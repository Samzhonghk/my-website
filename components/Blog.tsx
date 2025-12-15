import React from 'react';
import { BlogPost } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Market Your AI Project effectively',
    excerpt: 'Building the tool is only half the battle. Here are 5 strategies to get your AI project in front of the right users, focusing on developer communities and practical demos.',
    date: 'Oct 12, 2023',
    readTime: '5 min read',
    category: 'Marketing'
  },
  {
    id: '2',
    title: 'Understanding Gemini 2.5 Flash: A Deep Dive',
    excerpt: 'Exploring the capabilities of Google\'s latest multimodal model. We look at latency, token limits, and how to implement it in a React environment.',
    date: 'Nov 05, 2023',
    readTime: '8 min read',
    category: 'Tutorial'
  },
  {
    id: '3',
    title: 'Why I Switched from CSS Modules to Tailwind',
    excerpt: 'A controversial take on styling in modern web development. Speed, consistency, and the mobile-first workflow that Tailwind provides.',
    date: 'Dec 15, 2023',
    readTime: '4 min read',
    category: 'Development'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Latest Articles</h2>
            <p className="text-slate-400">Thoughts on development, AI, and product growth.</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-indigo-400 hover:text-indigo-300 font-medium mt-4 md:mt-0">
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="glass-panel p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-slate-500 text-xs pt-4 border-t border-slate-700/50">
                <div className="flex items-center mr-4">
                  <Calendar className="h-3.5 w-3.5 mr-1.5" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1.5" />
                  {post.readTime}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium">
            View all posts <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};