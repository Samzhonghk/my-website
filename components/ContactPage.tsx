import React, { useEffect, useState } from 'react';
import { ArrowLeft, Mail, MapPin, Send, Terminal, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
  socials?: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack, socials }) => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace 'YOUR_FORMSPREE_ID' with your actual Form ID from https://formspree.io/
    // Example: https://formspree.io/f/xxyyzz
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwpgjpal';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string, platform: string) => {
    if (!url || url.includes('your-username')) {
      e.preventDefault();
      alert(`Please update your ${platform} URL in metadata.json to link to your actual profile.`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      {/* Navigation Bar */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Chat</h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Have a project in mind, a question about my work, or just want to connect? 
              I'm always open to discussing new opportunities and innovative ideas.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
                  <Mail className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-slate-400 mt-1">hello@example.com</p>
                  <p className="text-slate-500 text-sm mt-1">I usually reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
                  <MapPin className="h-6 w-6 text-indigo-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-slate-400 mt-1">San Francisco, CA</p>
                  <p className="text-slate-500 text-sm mt-1">Available for remote work worldwide.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Connect on Social</h3>
              <div className="flex space-x-4">
                {socials?.github && (
                  <a 
                    href={socials.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => handleSocialClick(e, socials.github, 'GitHub')}
                    className="bg-slate-800 p-3 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {socials?.linkedin && (
                  <a 
                    href={socials.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => handleSocialClick(e, socials.linkedin, 'LinkedIn')}
                    className="bg-slate-800 p-3 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {socials?.twitter && (
                  <a 
                    href={socials.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => handleSocialClick(e, socials.twitter, 'Twitter')}
                    className="bg-slate-800 p-3 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-700 shadow-xl">
            {isSent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-8 text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Project inquiry..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};