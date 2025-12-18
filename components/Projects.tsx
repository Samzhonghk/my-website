import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Code2 } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 'herbal-pharmacy',
    title: 'Herbal Pharmacy Management System',
    description: 'A comprehensive system for managing herbal pharmacy inventory, sales, and customer records. Streamlines daily operations and tracking.',
    techStack: ['React', 'Vercel', 'Web App'],
    imageUrl: './herbal-pharmacy.png', // 建议替换为你的项目截图
    demoUrl: 'https://herbal-pharmacy-management.vercel.app/',
    repoUrl: '#'
  },
  {
    id: 'loan-system',
    title: 'Small Loan Management System',
    description: 'A web-based application for managing loan applications, client records, and approval workflows. Features a secure login system and dashboard.',
    techStack: ['HTML/CSS', 'JavaScript', 'Vercel'],
    imageUrl: './loan-system.png',
    demoUrl: 'https://smallloansystem-4kb5bgg2k-maxwells-projects-3bacae9d.vercel.app/login.html',
    repoUrl: '#'
  },
  {
    id: '1',
    title: 'AI Code Assistant',
    description: 'A VS Code extension that uses Gemini Pro to provide real-time code suggestions and refactoring tips directly in your editor.',
    techStack: ['TypeScript', 'Gemini API', 'VS Code API'],
    imageUrl: 'https://picsum.photos/800/600?random=1',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'Smart Analytics Dashboard',
    description: 'Real-time data visualization platform for SaaS metrics, featuring AI-powered anomaly detection and forecasting.',
    techStack: ['React', 'D3.js', 'Python', 'FastAPI'],
    imageUrl: 'https://picsum.photos/800/600?random=2',
    demoUrl: '#',
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'Neural Style Transfer App',
    description: 'Web application allowing users to transfer artistic styles to their photos using deep learning models in the browser.',
    techStack: ['TensorFlow.js', 'React', 'WebGL'],
    imageUrl: 'https://picsum.photos/800/600?random=3',
    demoUrl: '#',
    repoUrl: '#'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-panel rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-col h-full group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                  <a href={project.repoUrl} className="flex items-center text-slate-400 hover:text-white transition-colors text-sm">
                    <Github className="h-4 w-4 mr-1.5" /> Code
                  </a>
                  <a href={project.demoUrl} className="flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium">
                    Live Demo <ExternalLink className="h-4 w-4 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};