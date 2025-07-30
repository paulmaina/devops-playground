import React from 'react';
// Different icon families from react-icons
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiJenkins, SiMongodb } from 'react-icons/si';
import { HiCode, HiServer, HiCloud, HiShieldCheck } from 'react-icons/hi';
import { BiGitBranch, BiTerminal } from 'react-icons/bi';

/**
 * React Icons Integration Examples
 * 
 * This component demonstrates best practices for using react-icons:
 * 1. Importing from different icon families
 * 2. Proper sizing and styling
 * 3. Accessibility considerations
 * 4. Responsive design
 * 5. Interactive states
 */

const IconExamples: React.FC = () => {
  // Example: Technology stack with different icon families
  const technologies = [
    { name: 'React', icon: FaReact, color: 'text-blue-500', family: 'FontAwesome' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500', family: 'FontAwesome' },
    { name: 'Docker', icon: FaDocker, color: 'text-blue-600', family: 'FontAwesome' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-700', family: 'Simple Icons' },
    { name: 'Terraform', icon: SiTerraform, color: 'text-purple-600', family: 'Simple Icons' },
    { name: 'Jenkins', icon: SiJenkins, color: 'text-red-500', family: 'Simple Icons' },
  ];

  // Example: Service categories with Hero Icons
  const services = [
    { name: 'Development', icon: HiCode, description: 'Full-stack development' },
    { name: 'Infrastructure', icon: HiServer, description: 'Cloud infrastructure' },
    { name: 'DevOps', icon: HiCloud, description: 'CI/CD pipelines' },
    { name: 'Security', icon: HiShieldCheck, description: 'DevSecOps practices' },
  ];

  return (
    <div className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
          React Icons Integration Examples
        </h2>

        {/* Example 1: Technology Stack Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8">
            Technology Stack (Mixed Icon Families)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Icon with proper sizing and accessibility */}
                  <IconComponent
                    className={`w-12 h-12 ${tech.color} mb-3 group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                    {tech.name}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {tech.family}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Example 2: Service Cards with Hero Icons */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8">
            Services (Hero Icons with Descriptions)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                      <IconComponent
                        className="w-6 h-6 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {service.name}
                    </h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Example 3: Interactive Icon Buttons */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8">
            Interactive Icon Buttons
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* GitHub Button */}
            <button
              className="group flex items-center space-x-2 px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-full hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-105"
              aria-label="View GitHub repositories"
            >
              <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>GitHub</span>
            </button>

            {/* Terminal Button */}
            <button
              className="group flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105"
              aria-label="Open terminal"
            >
              <BiTerminal className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Terminal</span>
            </button>

            {/* Git Branch Button */}
            <button
              className="group flex items-center space-x-2 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-300 hover:scale-105"
              aria-label="View git branches"
            >
              <BiGitBranch className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              <span>Branches</span>
            </button>
          </div>
        </div>

        {/* Example 4: Different Icon Sizes */}
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-8">
            Icon Sizing Examples
          </h3>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <SiMongodb className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 dark:text-slate-400">Small (24px)</p>
            </div>
            <div className="text-center">
              <SiMongodb className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 dark:text-slate-400">Medium (32px)</p>
            </div>
            <div className="text-center">
              <SiMongodb className="w-12 h-12 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 dark:text-slate-400">Large (48px)</p>
            </div>
            <div className="text-center">
              <SiMongodb className="w-16 h-16 text-green-600 mx-auto mb-2" />
              <p className="text-sm text-slate-600 dark:text-slate-400">XL (64px)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconExamples;