import os
from typing import List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from dotenv import load_dotenv

try:
    from psycopg_pool import ConnectionPool
except Exception as exc:  # pragma: no cover
    raise RuntimeError("psycopg_pool is required. Ensure requirements are installed.") from exc


load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL environment variable is required")

cors_origins_env = os.getenv("CORS_ORIGIN", "*")
cors_origins: List[str] = [o.strip() for o in cors_origins_env.split(",") if o.strip()] or ["*"]

pool = ConnectionPool(conninfo=DATABASE_URL, max_size=10, kwargs={"sslmode": os.getenv("PGSSLMODE", "disable")})

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactMessageIn(BaseModel):
    name: str = Field(min_length=1)
    email: EmailStr
    subject: str = Field(min_length=1)
    message: str = Field(min_length=1)


@app.get("/api/health")
def health() -> dict:
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute("SELECT 1")
                cur.fetchone()
        return {"ok": True, "db": True}
    except Exception:
        return {"ok": False, "db": False}


@app.post("/api/contact")
def create_contact_message(payload: ContactMessageIn) -> dict:
    try:
        with pool.connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO contact_messages (name, email, subject, message)
                    VALUES (%s, %s, %s, %s)
                    RETURNING id, created_at
                    """,
                    (payload.name, str(payload.email), payload.subject, payload.message),
                )
                row = cur.fetchone()
        return {"id": row[0], "createdAt": row[1].isoformat()}
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Failed to save message") from exc


