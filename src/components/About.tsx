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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Write your personal story here - how you got started, your journey, and what drives you.
              </p>
              <p>
                Describe your approach to work, your philosophy, and what makes you unique.
              </p>
              <p>
                Share what you do outside of work, your interests, and how you stay current in your field.
              </p>
            </div>
          </div>
          
          <div>
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Skills & Technologies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{skill.category}</h4>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-white text-gray-700 px-3 py-1 rounded-full text-sm mx-1 mb-2"
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