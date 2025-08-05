import React from 'react';
import {FaNetworkWired, FaCloud, FaDocker} from 'react-icons/fa';
import { SiKubernetes } from "react-icons/si";
import workspaceImg from '../assets/workspace.jpg'; // <-- Import your image here

const About = () => {
  const skills = [
    {
      category: 'Coputer Networking & Security',
      icon: <FaNetworkWired className="h-10 w-10" />,
      technologies: ['OSI & TCP/IP Models', 'IP Addressing & Subnetting', 'Routing & Switching', 'DNS', 'Network Security']
    },
    {
      category: 'Cloud Computing(AWS, GCP, Oracle Cloud)',
      icon: <FaCloud className="h-10 w-10" />, 
      technologies: ['Compute', 'Storage & Databases', 'Networking & IAM', 'Serverless', 'IaC']
    },
    {
      category: 'Docker/Podman',
      icon: <FaDocker className="h-10 w-10" />,
      technologies: ['Image Optimization', 'Multi-Stage Builds', 'Container Networking', 'Persistent Volumes', 'Docker Compose']
    },
    {
      category: 'Kubernetes',
      icon: <SiKubernetes className="h-10 w-10" />,
      technologies: ['Pod Management', 'Declarative Deployments', 'Service Discovery', 'Secrets & ConfigMaps', 'Ingress & TLS Routing']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
            A passionate DevOps Engineer with 5+ years of experience designing and automating scalable, secure infrastructure using tools 
            like Docker, Kubernetes, Terraform, and CI/CD pipelines to power high-impact digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">My Story</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I’m a DevOps Engineer passionate about automating infrastructure and building secure, scalable systems. My journey started 
                with a curiosity for how systems work and how to make them better. From traditional monolithic architecture to cloud-native 
                microservices deployments, I’ve always been drawn to solving complex problems through smart design and clean automation.
              </p>
              <p>
                I focus on the intersection of functionality and reliability, using tools like Kubernetes, Docker, Terraform, and CI/CD 
                pipelines to streamline delivery and improve system resilience. I approach work with clear communication, collaboration, and a commitment
                 to continuous learning.
              </p>
              <p>
                Outside of work, I stay sharp by exploring cloud tech, cybersecurity, and scripting through hands-on projects, videos and labs. 
                Whether I’m automating on Linux, fine-tuning YAML, or learning something new before sunrise, I stay curious, focused, and driven 
                to keep building better systems.
              </p>
            </div>
          </div>
          
          <div>
            <img
              src={workspaceImg} // <-- Use imported image here
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ring-1 ring-slate-200 dark:ring-slate-700"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-400 hover:-translate-y-2">
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{skill.category}</h4>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700 dark:to-blue-900/30 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm mx-1 mb-2 border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-400 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;