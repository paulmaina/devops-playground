import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Your Project Title',
      description: 'Detailed description of your project, what it does, and the problems it solves.',
      image: 'https://images.pexels.com/photos/your-image-id/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Your', 'Tech', 'Stack'],
      liveUrl: 'https://your-live-site.com',
      githubUrl: 'https://github.com/yourusername/project'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Firebase', 'Vuetify', 'WebSocket'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Modern weather application with location-based forecasts, interactive maps, and beautiful data visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Weather API', 'Chart.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Social Media Analytics',
      description: 'Comprehensive analytics dashboard for social media performance tracking with automated reporting and insights.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js', 'API Integration'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking application with workout plans, progress tracking, and social features.',
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Firebase', 'Redux', 'Health API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      title: 'AI Chat Interface',
      description: 'Modern chat interface with AI integration, real-time messaging, and intelligent conversation management.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;