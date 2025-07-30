import React from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="h-8 w-8" />,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
    },
    {
      category: 'Backend',
      icon: <Server className="h-8 w-8" />,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
    },
    {
      category: 'Design',
      icon: <Palette className="h-8 w-8" />,
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="h-8 w-8" />,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Ionic']
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            A passionate DevOps Engineer with 5+ years of experience designing and automating scalable, secure infrastructure using tools 
            like Docker, Kubernetes, Terraform, and CI/CD pipelines to power high-impact digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Story</h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I’m a DevOps Engineer passionate about automating infrastructure and building secure, scalable systems. My journey started 
                with a curiosity for how systems work and how to make them better. From traditional monolithic architecture to cloud-native 
                deployments, I’ve always been drawn to solving complex problems through smart design and clean automation.
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
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ring-1 ring-slate-200"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 hover:-translate-y-2">
                <div className="text-blue-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-4">{skill.category}</h4>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-gradient-to-r from-slate-50 to-blue-50 text-slate-700 px-3 py-1 rounded-full text-sm mx-1 mb-2 border border-slate-200 hover:border-blue-300 transition-colors duration-200"
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