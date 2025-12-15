import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'projects' | 'contact') => void;
  currentPage: 'home' | 'projects' | 'contact';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    // Handle special routes
    if (target === 'projects' || target === '#contact') {
      e.preventDefault();
      const page = target === '#contact' ? 'contact' : 'projects';
      onNavigate(page);
      setIsMenuOpen(false);
      return;
    }
    
    // If target is home or we are on other pages and clicking a hash link
    if ((currentPage === 'projects' || currentPage === 'contact') && target !== 'projects' && target !== '#contact') {
      e.preventDefault();
      onNavigate('home');
      // Small timeout to allow render before scrolling
      if (target.startsWith('#')) {
        setTimeout(() => {
          const element = document.getElementById(target.replace('#', ''));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      setIsMenuOpen(false);
    } else {
      // Normal anchor behavior
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'Marketing AI', id: '#ai-assistant' },
    { name: 'Blog', id: '#blog' },
    { name: 'Contact', id: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <Terminal className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="font-bold text-xl tracking-tight text-white">Dev<span className="text-indigo-400">Portfolio</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.id.startsWith('#') ? link.id : '#'} 
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-slate-300 hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-700 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.id.startsWith('#') ? link.id : '#'}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};