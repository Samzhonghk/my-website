import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, User } from 'lucide-react';

interface HeroProps {
  avatarUrl?: string;
  socials?: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  onViewProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ avatarUrl, socials, onViewProjects, onContactClick }) => {
  const [imgError, setImgError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  // Handle URL changes and cache busting for local files
  useEffect(() => {
    setImgError(false);
    if (avatarUrl) {
      if (!avatarUrl.startsWith('http') && !avatarUrl.startsWith('data:')) {
        // Append timestamp to force reload of local images and bypass browser cache
        setImageSrc(`${avatarUrl}?t=${Date.now()}`);
      } else {
        setImageSrc(avatarUrl);
      }
    }
  }, [avatarUrl]);

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, platform: string) => {
    // Check if the URL is missing or still set to the default placeholder
    if (!url || url.includes('your-username')) {
      e.preventDefault();
      alert(`Please update your ${platform} URL in metadata.json to link to your actual profile.`);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Avatar Section */}
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              {avatarUrl && !imgError ? (
                <img 
                  src={imageSrc} 
                  alt="Profile Avatar" 
                  onError={(e) => {
                    console.warn("Avatar load failed:", imageSrc);
                    setImgError(true);
                  }}
                  className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-slate-900 object-cover shadow-2xl transform transition duration-500 group-hover:scale-105 bg-slate-800"
                />
              ) : (
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center shadow-2xl group-hover:scale-105 transition duration-500">
                  <User className="w-16 h-16 text-slate-500" />
                </div>
              )}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8">
            Building the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            I'm a Full Stack AI Engineer specializing in React, Node.js, and Large Language Models. 
            I build scalable web applications that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button 
              onClick={onViewProjects}
              className="px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center"
            >
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={onContactClick}
              className="px-8 py-3.5 rounded-full glass-panel hover:bg-slate-800 text-white font-semibold transition-all flex items-center justify-center border border-slate-700"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center space-x-8 text-slate-400">
            {socials?.github && (
              <a 
                href={socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => handleSocialClick(e, socials.github, 'GitHub')}
                className="hover:text-indigo-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            )}
            {socials?.linkedin && (
              <a 
                href={socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => handleSocialClick(e, socials.linkedin, 'LinkedIn')}
                className="hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            )}
            {socials?.twitter && (
              <a 
                href={socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => handleSocialClick(e, socials.twitter, 'Twitter')}
                className="hover:text-indigo-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};