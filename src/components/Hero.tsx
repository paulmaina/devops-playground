import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import myPhoto from '../assets/my-photo.png';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-50/30 to-transparent"></div>

      {/* Animated Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-1 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient">Paul Kimani</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl lg:max-w-none font-medium leading-relaxed">
                Automating secure, scalable cloud solutions through DevOps excellence.
              </p>

              <p className="text-base md:text-lg text-slate-600 mb-10 max-w-xl leading-relaxed">
                I build modern, resilient infrastructure by automating deployments, integrating secure APIs, 
                and implementing DevSecOps best practices. With experience across AWS, GCP, Oracle Cloud, Containerization, K8s, GitOps, 
                and CI/CD pipelines, I design systems that are efficient, secure, and built to scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    Get In Touch
                  </span>
                </button>
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">
                    View My Work
                  </span>
                </button>
              </div>

              <div className="flex justify-center lg:justify-start space-x-6 mb-12">
                <a
                  href="https://github.com/paulmaina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://linkedin.com/in/paul-kimani-b1b996162gt5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="mailto:paulkim841@gmail.com"
                  className="group p-3 rounded-full bg-white shadow-lg hover:shadow-xl text-slate-600 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1"
                >
                  <Mail className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>

              <button
                onClick={scrollToAbout}
                className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-white/50"
              >
                <ChevronDown className="h-8 w-8 mx-auto" />
              </button>
            </div>

            {/* Right Image */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end relative">
              {/* Background Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-white/20 rounded-3xl blur-sm z-10 pointer-events-none"></div>
              
              {/* Profile Image */}
              <img
                src={myPhoto}
                alt="Paul Kimani headshot"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl object-cover z-20 bg-transparent"
                style={{ filter: 'contrast(1.05) saturate(1.1)', background: 'transparent' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent rounded-3xl blur-xl scale-110 opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
