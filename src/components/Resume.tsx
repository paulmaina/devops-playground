import React from 'react';
import { HiDownload, HiBriefcase, HiAcademicCap } from 'react-icons/hi';
import { HiDocumentText } from 'react-icons/hi';

const Resume = () => {
  const experiences = [
    {
      title: 'Your Job Title',
      company: 'Company Name',
      period: 'Start Date - End Date',
      description: 'Description of your role, responsibilities, and achievements.'
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Inc.',
      period: '2020 - 2022',
      description: 'Developed responsive web applications for Fortune 500 clients. Collaborated with design teams to implement pixel-perfect UIs and improved site performance by 60%.'
    },
    {
      title: 'Web Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Built the company\'s main product from the ground up using modern web technologies. Implemented user authentication, payment processing, and real-time features.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      period: '2015 - 2019',
      description: 'Graduated Magna Cum Laude. Focused on web development, algorithms, and software engineering principles.'
    }
  ];

  const certifications = [
    'Cisco Cetified Network Associate (CCNA)',
    'Google Cloud Professional',
    'Meta React Developer',
    'MongoDB Certified Developer'
  ];

  const handleDownloadResume = () => {
    // Download the actual PDF file from the public folder
    const link = document.createElement('a');
    link.href = '/paul-kimani-resume.pdf';
    link.download = 'Paul_Kimani_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 font-medium">
            Grab my resume - it's like a cheat sheet for hiring me🤝
          </p>
          <button
            onClick={handleDownloadResume}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center space-x-2">
            <HiDownload className="h-5 w-5" />
            <span>Download Resume</span>
            </span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <HiBriefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gradient-to-b from-blue-200 to-purple-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{exp.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{exp.period}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 mb-8 mt-12">
              <HiAcademicCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gradient-to-b from-blue-200 to-purple-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600">
              <div className="flex items-center space-x-3 mb-6">
                <HiDocumentText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl p-6 mt-6 border border-blue-200 dark:border-slate-600">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">Years of Experience</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">4+</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">Projects Completed</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50+</p>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium">Happy Clients</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">20+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;