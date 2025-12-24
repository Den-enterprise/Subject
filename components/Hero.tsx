
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-brand/10 rounded-full filter blur-[100px] opacity-50"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-[100px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass border border-white/10 text-xs font-bold text-brand-light mb-12 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          <span>Built with Python & Precision</span>
        </div>
        
        <h1 className="text-6xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
          <span className="text-white">FIND THE</span><br />
          <span className="text-brand-light">SUB</span>
          <span className="text-brand">JECT.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-12 leading-relaxed font-light">
          A high-performance browser by Den_enterprise. We deconstruct your queries to find the core subject, delivering superior results through the power of Python.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="https://sourceforge.net/projects/subject-browser-code/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-brand hover:bg-brand-dark text-white rounded-2xl font-black text-xl transition-all transform hover:scale-105 subject-glow flex items-center justify-center"
          >
            Download from SourceForge
          </a>
          <button className="">
            
          </button>
        </div>
        
        <div className="mt-24 relative animate-float max-w-5xl mx-auto">
          <div className="glass p-3 rounded-[2.5rem] border border-white/5 shadow-2xl relative">
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
              alt="Subject Browser UI" 
              className="rounded-[2rem] brightness-75 grayscale contrast-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
