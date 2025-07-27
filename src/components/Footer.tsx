import React from 'react';
import { Code, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Code className="h-8 w-8 text-blue-400 drop-shadow-lg" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-sm"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Alex Johnson</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Full-Stack Developer passionate about creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="group p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative z-10">
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="relative z-10">
            <h3 className="font-semibold text-lg mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Consulting</li>
              <li>Code Review</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center relative z-10">
          <p className="text-slate-300 flex items-center justify-center space-x-1">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Alex Johnson</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;