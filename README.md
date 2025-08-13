# Kimani Portfolio – Frontend, Backend API, Postgres, CI/CD, and Kubernetes

Personal portfolio built with Vite + React + TypeScript on the frontend and FastAPI + Postgres on the backend. Includes Docker images, GitHub Actions pipelines, and Kubernetes manifests with Ingress (TLS), HPA, NetworkPolicies, and a PVC for Postgres.

## Stack

- Frontend: Vite + React + TypeScript
- Backend API: Python FastAPI (Uvicorn)
- Database: Postgres
- CI: GitHub Actions (lint, build, Docker publish)
- Containers: Docker, Docker Hub images (`kimnet/portfolio-frontend`, `kimnet/portfolio-backend`)
- Orchestration: Kubernetes (Ingress, HPA, NetworkPolicy, PVC)

## Repository layout

- `src/` – React app (Vite)
- `server/app.py` – FastAPI app exposing `/api/health` and `/api/contact`
- `server/db/init.sql` – DB schema for `contact_messages`
- `Dockerfile` – Frontend image (serves built static files)
- `server/Dockerfile` – Backend image (FastAPI/Uvicorn)
- `docker-compose.yml` – Local Postgres for development
- `k8s/` – Kubernetes manifests (namespace, deployments, services, ingress, hpa, pvc, networkpolicies)
- `.github/workflows/` – CI (build/lint) and Docker publish

## Environment variables

Create a `.env` file in the project root for local dev:

```
PORT=5000
CORS_ORIGIN=http://localhost:5173
DATABASE_URL=postgres://postgres:postgres@localhost:5432/portfolio
# PGSSLMODE=require
```

Notes:
- In Kubernetes, `DATABASE_URL` is set via `k8s/backend-secret.yaml` and points to the in-cluster Postgres Service.
- Frontend calls the API with relative `/api` and relies on Ingress path routing.

## Local development

Prerequisites: Node.js 18+, npm, Python 3.11+ (for backend), Docker Desktop (for local Postgres).

1) Start Postgres via Docker Compose

```bash
docker compose up -d
```

This exposes Postgres on `localhost:5432`, seeds schema from `server/db/init.sql`, and persists data in a named volume.

2) Install dependencies

```bash
npm ci
pip install -r server/requirements.txt
```

3) Run backend (FastAPI/Uvicorn)

```bash
npm run server
# or: uvicorn server.app:app --host 0.0.0.0 --port 5000
```

Health: `curl http://localhost:5000/api/health`

4) Run frontend (Vite)

```bash
npm run dev
```

Open `http://localhost:5173` and submit the contact form.

5) Verify saved messages

```bash
docker exec -it $(docker ps -qf "name=portfolio-postgres") psql -U postgres -d portfolio -c "SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 5;"
```

## Build and push images (Docker Hub: kimnet)

```bash
# Backend (FastAPI)
docker build -t kimnet/portfolio-backend:latest -f server/Dockerfile .
docker push kimnet/portfolio-backend:latest

# Frontend (static site)
docker build -t kimnet/portfolio-frontend:latest -f Dockerfile .
docker push kimnet/portfolio-frontend:latest
```

## CI/CD

- `.github/workflows/ci.yml`: Lints, builds frontend, validates DB schema on Postgres service, and builds backend image.
- `.github/workflows/docker-publish.yml`: Builds and pushes both images to Docker Hub (`kimnet`).

Required GitHub Secrets:

- `DOCKERHUB_USERNAME` = `kimnet`
- `DOCKERHUB_TOKEN` = Docker Hub access token or password

## Kubernetes deployment

Prerequisites on the cluster:

- Ingress controller (nginx)
- cert-manager + ClusterIssuer (e.g., `letsencrypt-prod`)
- Metrics server (for HPA)
- A default StorageClass (for PVC binding)

Apply manifests (namespace, storage, DB, backend, frontend, policies, HPA, ingress):

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/postgres-pvc.yaml
kubectl apply -f k8s/postgres-secret.yaml
kubectl apply -f k8s/postgres-init-configmap.yaml
kubectl apply -f k8s/postgres-deployment.yaml
kubectl apply -f k8s/backend-secret.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/networkpolicy.yaml
kubectl apply -f k8s/hpa-backend.yaml
kubectl apply -f k8s/hpa-frontend.yaml
kubectl apply -f k8s/ingress.yaml
```

Ingress (`k8s/ingress.yaml`) routes:

- `https://kimani-portfolio.com/` → `portfolio-frontend` (Service port 80)
- `https://kimani-portfolio.com/api` → `portfolio-backend` (Service port 80 → pod port 5000)

Update domain and TLS:

- Set DNS A/AAAA of `kimani-portfolio.com` to your Ingress Controller IP
- Ensure `cert-manager.io/cluster-issuer: letsencrypt-prod` exists, or change it

NetworkPolicies (`k8s/networkpolicy.yaml`):

- Allow Ingress controller to reach backend on TCP 5000
- Allow backend to reach Postgres on TCP 5432

HPA (`k8s/hpa-*.yaml`):

- Scales backend and frontend between 2–5 replicas at ~70% CPU (requires metrics-server)

## Notes

- Database is not exposed publicly; only the backend can connect to it in-cluster.
- Frontend uses relative `/api` and does not need separate env configuration in production.
- For local clusters (minikube/kind), use nip.io or disable TLS in Ingress for quick testing.

## License

MIT
