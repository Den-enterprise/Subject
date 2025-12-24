
import React, { useState } from 'react';
import { analyzeQuery } from '../services/gemini';
import { AnalysisResult } from '../types';

const SubjectDemo: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await analyzeQuery(query);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">See the Logic</h2>
          <p className="text-gray-400">Experience how our Python-powered engine deconstructs your intent before hitting the index.</p>
        </div>

        <div className="glass p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <span className="text-[10px] text-blue-500 font-mono">DEN_ENGINE_LOGS.EXE</span>
          </div>

          <form onSubmit={handleAnalyze} className="mb-10">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a complex query like 'Why is my react state not updating instantly?'"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <button
                disabled={loading}
                className="absolute right-2 top-2 bottom-2 bg-blue-600 text-white px-6 rounded-xl font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : 'Analyze'}
              </button>
            </div>
          </form>

          {loading && (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-white/5 rounded w-3/4"></div>
              <div className="h-4 bg-white/5 rounded w-1/2"></div>
              <div className="h-4 bg-white/5 rounded w-5/6"></div>
            </div>
          )}

          {result && !loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-700">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Subject Identified</h4>
                <p className="text-white text-lg font-medium">{result.subject}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                <h4 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">Detected Intent</h4>
                <p className="text-white text-lg font-medium">{result.intent}</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 md:col-span-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">Contextual Understanding</h4>
                <p className="text-gray-300 italic">"{result.context}"</p>
              </div>
              <div className="p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 md:col-span-2">
                <h4 className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-2">Refined Search Sequence</h4>
                <div className="flex items-center space-x-3 mt-2">
                  <div className="flex-1 bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-sm text-green-400">
                    google.search("{result.searchOptimization}")
                  </div>
                  <button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap">Execute Query</button>
                </div>
              </div>
            </div>
          )}
          
          {!result && !loading && (
            <div className="text-center py-10 opacity-30">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p>Engine idle. Waiting for user input...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubjectDemo;
