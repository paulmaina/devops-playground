import React, { useState } from 'react';
import { HiDownload, HiPencil, HiCheck, HiX, HiPlus, HiTrash } from 'react-icons/hi';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

const Resume = () => {
  // Initial data
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: '1',
      title: 'Senior DevOps Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Led infrastructure automation initiatives, implemented CI/CD pipelines, and managed cloud deployments across AWS and GCP.',
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'AWS', 'GCP']
    },
    {
      id: '2',
      title: 'DevOps Engineer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Designed and maintained scalable infrastructure, automated deployment processes, and improved system reliability.',
      technologies: ['Docker', 'Ansible', 'GitLab CI', 'Oracle Cloud', 'Monitoring']
    }
  ]);

  const [education, setEducation] = useState<Education[]>([
    {
      id: '1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Nairobi',
      period: '2016 - 2020',
      description: 'Focused on software engineering, algorithms, and system design.'
    }
  ]);

  const [certifications, setCertifications] = useState<Certification[]>([
    {
      id: '1',
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SA-2023-001'
    },
    {
      id: '2',
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credentialId: 'CKA-2022-456'
    }
  ]);

  // Edit states
  const [editingExperience, setEditingExperience] = useState<string | null>(null);
  const [editingEducation, setEditingEducation] = useState<string | null>(null);
  const [editingCertification, setEditingCertification] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Form states
  const [experienceForm, setExperienceForm] = useState<Partial<Experience>>({});
  const [educationForm, setEducationForm] = useState<Partial<Education>>({});
  const [certificationForm, setCertificationForm] = useState<Partial<Certification>>({});

  // Experience handlers
  const handleEditExperience = (exp: Experience) => {
    setEditingExperience(exp.id);
    setExperienceForm({
      ...exp,
      technologies: [...exp.technologies]
    });
  };

  const handleSaveExperience = () => {
    if (editingExperience && experienceForm.title && experienceForm.company) {
      setExperiences(prev => prev.map(exp => 
        exp.id === editingExperience 
          ? { ...exp, ...experienceForm, technologies: experienceForm.technologies || [] } as Experience
          : exp
      ));
      setEditingExperience(null);
      setExperienceForm({});
    }
  };

  const handleAddExperience = () => {
    const newExp: Experience = {
      id: Date.now().toString(),
      title: 'New Position',
      company: 'Company Name',
      period: '2024 - Present',
      description: 'Job description here...',
      technologies: []
    };
    setExperiences(prev => [...prev, newExp]);
    handleEditExperience(newExp);
  };

  const handleDeleteExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

  // Education handlers
  const handleEditEducation = (edu: Education) => {
    setEditingEducation(edu.id);
    setEducationForm({ ...edu });
  };

  const handleSaveEducation = () => {
    if (editingEducation && educationForm.degree && educationForm.institution) {
      setEducation(prev => prev.map(edu => 
        edu.id === editingEducation 
          ? { ...edu, ...educationForm } as Education
          : edu
      ));
      setEditingEducation(null);
      setEducationForm({});
    }
  };

  const handleAddEducation = () => {
    const newEdu: Education = {
      id: Date.now().toString(),
      degree: 'New Degree',
      institution: 'Institution Name',
      period: '2020 - 2024',
      description: 'Education description...'
    };
    setEducation(prev => [...prev, newEdu]);
    handleEditEducation(newEdu);
  };

  const handleDeleteEducation = (id: string) => {
    setEducation(prev => prev.filter(edu => edu.id !== id));
  };

  // Certification handlers
  const handleEditCertification = (cert: Certification) => {
    setEditingCertification(cert.id);
    setCertificationForm({ ...cert });
  };

  const handleSaveCertification = () => {
    if (editingCertification && certificationForm.name && certificationForm.issuer) {
      setCertifications(prev => prev.map(cert => 
        cert.id === editingCertification 
          ? { ...cert, ...certificationForm } as Certification
          : cert
      ));
      setEditingCertification(null);
      setCertificationForm({});
    }
  };

  const handleAddCertification = () => {
    const newCert: Certification = {
      id: Date.now().toString(),
      name: 'New Certification',
      issuer: 'Issuing Organization',
      date: '2024',
      credentialId: ''
    };
    setCertifications(prev => [...prev, newCert]);
    handleEditCertification(newCert);
  };

  const handleDeleteCertification = (id: string) => {
    setCertifications(prev => prev.filter(cert => cert.id !== id));
  };

  const handleTechnologyChange = (index: number, value: string) => {
    const newTechnologies = [...(experienceForm.technologies || [])];
    newTechnologies[index] = value;
    setExperienceForm(prev => ({ ...prev, technologies: newTechnologies }));
  };

  const addTechnology = () => {
    setExperienceForm(prev => ({ 
      ...prev, 
      technologies: [...(prev.technologies || []), ''] 
    }));
  };

  const removeTechnology = (index: number) => {
    const newTechnologies = [...(experienceForm.technologies || [])];
    newTechnologies.splice(index, 1);
    setExperienceForm(prev => ({ ...prev, technologies: newTechnologies }));
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Resume</h2>
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`p-2 rounded-full transition-all duration-200 ${
                isEditMode 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              title={isEditMode ? 'Exit edit mode' : 'Enter edit mode'}
            >
              <HiPencil className="h-5 w-5" />
            </button>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 font-medium">
            Grab my resume - it's like a cheat sheet for hiring me🤝
          </p>
          <a
            href="/paul-kimani-resume.pdf"
            download="Paul_Kimani_Resume.pdf"
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center space-x-2">
              <HiDownload className="h-5 w-5" />
              <span>Download Resume</span>
            </span>
          </a>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Experience</h3>
              {isEditMode && (
                <button
                  onClick={handleAddExperience}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <HiPlus className="h-4 w-4" />
                  <span>Add Experience</span>
                </button>
              )}
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="border-l-4 border-blue-500 pl-6 relative">
                  {isEditMode && (
                    <div className="absolute -left-2 top-0 flex space-x-1">
                      {editingExperience === exp.id ? (
                        <>
                          <button
                            onClick={handleSaveExperience}
                            className="bg-green-500 text-white p-1 rounded hover:bg-green-600 transition-colors duration-200"
                          >
                            <HiCheck className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingExperience(null);
                              setExperienceForm({});
                            }}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <HiX className="h-3 w-3" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditExperience(exp)}
                            className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition-colors duration-200"
                          >
                            <HiPencil className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleDeleteExperience(exp.id)}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <HiTrash className="h-3 w-3" />
                          </button>
                        </>
                      )}
                    </div>
                  )}
                  
                  {editingExperience === exp.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={experienceForm.title || ''}
                        onChange={(e) => setExperienceForm(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Job Title"
                      />
                      <input
                        type="text"
                        value={experienceForm.company || ''}
                        onChange={(e) => setExperienceForm(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Company"
                      />
                      <input
                        type="text"
                        value={experienceForm.period || ''}
                        onChange={(e) => setExperienceForm(prev => ({ ...prev, period: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Period"
                      />
                      <textarea
                        value={experienceForm.description || ''}
                        onChange={(e) => setExperienceForm(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        rows={3}
                        placeholder="Description"
                      />
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Technologies</label>
                          <button
                            onClick={addTechnology}
                            className="text-blue-600 hover:text-blue-700 text-sm"
                          >
                            + Add Technology
                          </button>
                        </div>
                        <div className="space-y-2">
                          {(experienceForm.technologies || []).map((tech, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <input
                                type="text"
                                value={tech}
                                onChange={(e) => handleTechnologyChange(index, e.target.value)}
                                className="flex-1 px-3 py-1 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                                placeholder="Technology"
                              />
                              <button
                                onClick={() => removeTechnology(index)}
                                className="text-red-500 hover:text-red-600"
                              >
                                <HiX className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{exp.period}</p>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
              {isEditMode && (
                <button
                  onClick={handleAddEducation}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <HiPlus className="h-4 w-4" />
                  <span>Add Education</span>
                </button>
              )}
            </div>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-4 border-purple-500 pl-6 relative">
                  {isEditMode && (
                    <div className="absolute -left-2 top-0 flex space-x-1">
                      {editingEducation === edu.id ? (
                        <>
                          <button
                            onClick={handleSaveEducation}
                            className="bg-green-500 text-white p-1 rounded hover:bg-green-600 transition-colors duration-200"
                          >
                            <HiCheck className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingEducation(null);
                              setEducationForm({});
                            }}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <HiX className="h-3 w-3" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditEducation(edu)}
                            className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition-colors duration-200"
                          >
                            <HiPencil className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleDeleteEducation(edu.id)}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <HiTrash className="h-3 w-3" />
                          </button>
                        </>
                      )}
                    </div>
                  )}
                  
                  {editingEducation === edu.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={educationForm.degree || ''}
                        onChange={(e) => setEducationForm(prev => ({ ...prev, degree: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Degree"
                      />
                      <input
                        type="text"
                        value={educationForm.institution || ''}
                        onChange={(e) => setEducationForm(prev => ({ ...prev, institution: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Institution"
                      />
                      <input
                        type="text"
                        value={educationForm.period || ''}
                        onChange={(e) => setEducationForm(prev => ({ ...prev, period: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Period"
                      />
                      <textarea
                        value={educationForm.description || ''}
                        onChange={(e) => setEducationForm(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        rows={2}
                        placeholder="Description (optional)"
                      />
                    </div>
                  ) : (
                    <>
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{edu.period}</p>
                      {edu.description && (
                        <p className="text-slate-700 dark:text-slate-300">{edu.description}</p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
              {isEditMode && (
                <button
                  onClick={handleAddCertification}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <HiPlus className="h-4 w-4" />
                  <span>Add Certification</span>
                </button>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-green-200 dark:border-green-700 relative">
                  {isEditMode && (
                    <div className="absolute top-2 right-2 flex space-x-1">
                      {editingCertification === cert.id ? (
                        <>
                          <button
                            onClick={handleSaveCertification}
                            className="bg-green-500 text-white p-1 rounded hover:bg-green-600 transition-colors duration-200"
                          >
                            <HiCheck className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingCertification(null);
                              setCertificationForm({});
                            }}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <HiX className="h-3 w-3" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditCertification(cert)}
                            className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600 transition-colors duration-200"
                          >
                            <HiPencil className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => handleDeleteCertification(cert.id)}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600 transition-colors duration-200"
                          >
                            <HiTrash className="h-3 w-3" />
                          </button>
                        </>
                      )}
                    </div>
                  )}
                  
                  {editingCertification === cert.id ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={certificationForm.name || ''}
                        onChange={(e) => setCertificationForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                        placeholder="Certification Name"
                      />
                      <input
                        type="text"
                        value={certificationForm.issuer || ''}
                        onChange={(e) => setCertificationForm(prev => ({ ...prev, issuer: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                        placeholder="Issuer"
                      />
                      <input
                        type="text"
                        value={certificationForm.date || ''}
                        onChange={(e) => setCertificationForm(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                        placeholder="Date"
                      />
                      <input
                        type="text"
                        value={certificationForm.credentialId || ''}
                        onChange={(e) => setCertificationForm(prev => ({ ...prev, credentialId: e.target.value }))}
                        className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white text-sm"
                        placeholder="Credential ID (optional)"
                      />
                    </div>
                  ) : (
                    <>
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{cert.name}</h4>
                      <p className="text-green-600 dark:text-green-400 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">{cert.date}</p>
                      {cert.credentialId && (
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;