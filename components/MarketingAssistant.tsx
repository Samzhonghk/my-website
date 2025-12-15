import React, { useState } from 'react';
import { generateMarketingContent } from '../services/geminiService';
import { MarketingType } from '../types';
import { Sparkles, Copy, Check, Loader2, PenTool } from 'lucide-react';

export const MarketingAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [selectedType, setSelectedType] = useState<MarketingType>(MarketingType.BLOG_IDEAS);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setLoading(true);
    setResult('');
    try {
      const content = await generateMarketingContent(topic, selectedType);
      setResult(content);
    } catch (error) {
      setResult("Error generating content.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-assistant" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" /> Powered by Gemini
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Content Strategy Assistant</h2>
          <p className="text-slate-400">
            Struggling to promote your project? Use this tool (powered by my API integration) to generate content ideas instantly.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8 border border-slate-700 shadow-2xl">
          <div className="space-y-6">
            
            {/* Input Section */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What is your project or topic about?
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., An AI-powered fitness tracker app..."
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
            </div>

            {/* Type Selection */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                What do you need?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.values(MarketingType).map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center ${
                      selectedType === type
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={loading || !topic.trim()}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Generating Strategy...
                </>
              ) : (
                <>
                  <PenTool className="w-5 h-5 mr-2" /> Generate Content
                </>
              )}
            </button>

            {/* Result Section */}
            {result && (
              <div className="mt-8 animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-indigo-300 uppercase tracking-wider">AI Generated Result</h3>
                  <button
                    onClick={handleCopy}
                    className="text-slate-400 hover:text-white transition-colors flex items-center text-xs"
                  >
                    {copied ? <Check className="w-4 h-4 mr-1 text-green-400" /> : <Copy className="w-4 h-4 mr-1" />}
                    {copied ? 'Copied!' : 'Copy Text'}
                  </button>
                </div>
                <div className="bg-slate-950/50 rounded-lg p-5 border border-slate-700/50 overflow-hidden">
                  <pre className="whitespace-pre-wrap font-sans text-slate-300 text-sm leading-relaxed">
                    {result}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};