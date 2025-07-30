import React from 'react';
import { HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

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
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium">
            A selection of projects that showcase my skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-400 hover:-translate-y-2">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                    >
                      <HiExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                    >
                      <FaGithub className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-200 dark:border-blue-600 font-medium"
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