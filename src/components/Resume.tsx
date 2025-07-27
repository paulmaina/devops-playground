import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Lead developer for multiple client projects, specializing in React and Node.js applications. Mentored junior developers and improved team productivity by 40%.'
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
    'AWS Certified Developer',
    'Google Cloud Professional',
    'Meta React Developer',
    'MongoDB Certified Developer'
  ];

  const handleDownloadResume = () => {
    // In a real application, this would download an actual PDF file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Alex_Johnson_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            My professional journey, education, and achievements that have shaped my career in web development.
          </p>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <Download className="h-5 w-5" />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-3 mb-8 mt-12">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-600">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-6 w-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600">Years of Experience</p>
                  <p className="text-2xl font-bold text-blue-600">5+</p>
                </div>
                <div>
                  <p className="text-gray-600">Projects Completed</p>
                  <p className="text-2xl font-bold text-blue-600">50+</p>
                </div>
                <div>
                  <p className="text-gray-600">Happy Clients</p>
                  <p className="text-2xl font-bold text-blue-600">30+</p>
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