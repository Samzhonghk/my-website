import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, Code2, Terminal } from 'lucide-react';
import { projects } from './Projects'; // Import data from existing file

interface ProjectShowcaseProps {
  onBack: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Simple Header for this page */}
      <nav className="glass-panel py-4 sticky top-0 z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={onBack}>
            <Terminal className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="font-bold text-xl tracking-tight text-white">Dev<span className="text-indigo-400">Portfolio</span></span>
          </div>
          <button 
            onClick={onBack}
            className="flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">All Projects</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            A complete collection of my technical projects, experiments, and open source contributions.
            Here you can explore the code, view live demos, and understand the tech stack behind each solution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={project.id} className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 flex flex-col md:flex-row group">
              
              {/* Image Section */}
              <div className="md:w-1/2 lg:w-2/5 relative overflow-hidden h-64 md:h-auto">
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-10"></div>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content Section */}
              <div className="md:w-1/2 lg:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <Code2 className="text-slate-600 h-6 w-6" />
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-sm font-medium rounded-md bg-slate-800 text-indigo-300 border border-slate-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6 border-t border-slate-700/50">
                   {project.repoUrl && (
                    <a href={project.repoUrl} className="flex-1 flex items-center justify-center px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-all font-medium border border-slate-700">
                      <Github className="h-5 w-5 mr-2" /> View Code
                    </a>
                   )}
                   {project.demoUrl && (
                    <a href={project.demoUrl} className="flex-1 flex items-center justify-center px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all font-medium shadow-lg shadow-indigo-500/20">
                      <ExternalLink className="h-5 w-5 mr-2" /> Live Demo
                    </a>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};