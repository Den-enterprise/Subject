
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        <section id="engine" className="py-32 border-y border-white/5 bg-[#020617]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                <div className="text-brand font-black uppercase tracking-[0.3em] text-sm mb-4">Under the hood</div>
                <h2 className="text-5xl lg:text-7xl font-black mb-10 leading-[0.9] tracking-tighter">
                  Python-Built <br />Efficiency.
                </h2>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                  Subject isn't just another Chromium skin. It's a specialized tool built in Python that acts as an intelligent intermediary. It doesn't use complex APIs—it simply uses direct links to Google to provide the cleanest results possible.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Zero API Latency",
                    "Native Python Runtime",
                    "SourceForge Open Release",
                    "Subject-Link Mapping"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
                        <svg className="w-3.5 h-3.5 text-brand-light" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-brand/10 blur-[120px] rounded-full"></div>
                <div className="relative glass p-2 rounded-3xl border border-white/10 shadow-3xl">
                  <div className="bg-black/80 rounded-2xl p-8 font-mono text-sm text-brand-light">
                    <div className="flex items-center space-x-2 mb-6 border-b border-white/5 pb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
                      <span className="ml-4 text-[10px] text-gray-600 uppercase">subject_engine.py</span>
                    </div>
                    <p className="mb-2"><span className="text-brand-accent">import</span> browser_core</p>
                    <p className="mb-2"><span className="text-brand-accent">class</span> <span className="text-white">SubjectEngine</span>:</p>
                    <p className="ml-4 mb-2"><span className="text-brand-accent">def</span> <span className="text-white">analyze_intent</span>(query):</p>
                    <p className="ml-8 mb-2">subject = parse_subject(query)</p>
                    <p className="ml-8 text-gray-500"># Direct link generation</p>
                    <p className="ml-8">target = f"google.com/search?q={'{subject}'}"</p>
                    <p className="ml-8"><span className="text-brand-accent">return</span> redirect(target)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand/5 to-transparent"></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter">Ready to Start?</h2>
            <p className="text-2xl text-gray-400 mb-16 font-light max-w-2xl mx-auto">Download the latest beta of Subject Browser and experience query-centric browsing today.</p>
            <div className="flex flex-col items-center space-y-8">
              <a 
                href="https://sourceforge.net/projects/subject-browser-code/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-16 py-7 bg-white text-black rounded-[2rem] font-black text-2xl hover:bg-gray-200 transition-all shadow-3xl transform hover:scale-105 active:scale-95"
              >
                Download for Desktop
              </a>
              <div className="flex items-center space-x-4 text-gray-500">
                <span className="text-xs uppercase tracking-widest font-bold">Hosted on SourceForge</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                <span className="text-xs uppercase tracking-widest font-bold">100% Open Source</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
