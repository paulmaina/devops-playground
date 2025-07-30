import { HiCode, HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white py-12 relative overflow-hidden">
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
                <HiCode className="h-8 w-8 text-blue-400 drop-shadow-lg" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-sm"></div>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Paul Kimani</span>
            </div>
            <p className="text-slate-300 dark:text-slate-400 mb-4 leading-relaxed">
              DevOps Enginer passionate about making ‘it works on my machine’ work everywhere.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/paulmaina"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaGithub className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/paul-kimani-b1b996162gt5"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <FaLinkedin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="mailto:paulkim841@gmail.com"
                className="group p-2 rounded-full bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <HiMail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
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
                    className="text-slate-300 dark:text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
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
            <ul className="space-y-2 text-slate-300 dark:text-slate-400">
              <li>Cloud Architecture☁️</li>
              <li>Containerization & Orchestration🐳</li>
              <li>CI/CD & Automation🚀</li>
              <li>Security & Compliance🔐</li>
              <li>Monitoring & Observability📈</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 mt-8 pt-8 text-center relative z-10">
          <p className="text-slate-300 dark:text-slate-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} Made with</span>
            <HiHeart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Paul Kimani</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;