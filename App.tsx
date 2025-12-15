import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ContactPage } from './components/ContactPage';
import { MarketingAssistant } from './components/MarketingAssistant';
import { Blog } from './components/Blog';
import { Mail, MapPin } from 'lucide-react';

// Define the shape of our metadata
interface Socials {
  github: string;
  linkedin: string;
  twitter?: string;
}

interface AppMetadata {
  avatar?: string;
  socials?: Socials;
}

// Updated Footer to accept socials as props
const Footer: React.FC<{ socials: Socials }> = ({ socials }) => {
  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, platform: string) => {
    if (!url || url.includes('your-username')) {
      e.preventDefault();
      alert(`Please update your ${platform} URL in metadata.json to allow visitors to connect with you.`);
    }
  };

  return (
    <footer id="contact" className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Interested in collaborating on an AI project or need a speaker for your next tech meetup? Let's connect.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-slate-400 text-sm">
                <Mail className="h-4 w-4 mr-2 text-indigo-400" />
                <span>hello@example.com</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a></li>
              <li><a href="#blog" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li>
                <a 
                  href={socials.github} 
                  onClick={(e) => handleSocialClick(e, socials.github, 'GitHub')}
                  className="hover:text-indigo-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href={socials.linkedin} 
                  onClick={(e) => handleSocialClick(e, socials.linkedin, 'LinkedIn')}
                  className="hover:text-indigo-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-slate-400 text-sm mb-4">
              Subscribe to get the latest updates on my projects and AI trends.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-indigo-500 w-full text-sm"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} AI Dev Portfolio. Built with React, Tailwind & Gemini.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'contact'>('home');
  const [metadata, setMetadata] = useState<AppMetadata>({
    avatar: '',
    socials: {
      github: 'https://github.com/your-username',
      linkedin: 'https://linkedin.com/in/your-username',
      twitter: 'https://twitter.com/your-username'
    }
  });

  useEffect(() => {
    // Add timestamp to prevent caching of metadata.json
    fetch(`./metadata.json?t=${Date.now()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Metadata loaded:', data);
        setMetadata(prev => ({
          ...prev,
          ...data
        }));
      })
      .catch((err) => console.error('Failed to load metadata:', err));
  }, []);

  const handleNavigate = (page: 'home' | 'projects' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'projects') {
    return (
      <ProjectShowcase onBack={() => setCurrentPage('home')} />
    );
  }

  if (currentPage === 'contact') {
    return (
      <ContactPage onBack={() => setCurrentPage('home')} socials={metadata.socials} />
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500/30">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        <Hero 
          avatarUrl={metadata.avatar} 
          socials={metadata.socials} 
          onViewProjects={() => handleNavigate('projects')}
          onContactClick={() => handleNavigate('contact')}
        />
        <Projects />
        {/* This section answers "How to promote?" by providing a tool to do exactly that */}
        <MarketingAssistant />
        <Blog />
      </main>
      <Footer socials={metadata.socials!} />
    </div>
  );
};

export default App;