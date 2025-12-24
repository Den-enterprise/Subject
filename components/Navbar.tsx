
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-6">
            {/* Subject Logo Placeholder */}
            <a href="/" className="block">
              <div className="h-10 w-32 flex items-center justify-center overflow-hidden relative group">
                <img 
                  src="https://raw.githubusercontent.com/Den-enterprise/Subject/refs/heads/main/logo1.png" 
                  alt="Subject Logo" 
                  className="h-full w-auto object-contain relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                {/* <span className="absolute inset-0 flex items-center justify-center text-[10px] text-gray-500 font-bold uppercase tracking-widest z-0">
                  Subject Logo
                </span> */}
              </div>
            </a>
            
            <div className="h-8 w-[1px] bg-white/10"></div>
            
            {/* Den_enterprise Logo Placeholder */}
            <div className="flex items-center">
              <div className="h-10 w-32 flex items-center justify-start  overflow-hidden relative group">
                <img 
                  src="https://raw.githubusercontent.com/Den-enterprise/Subject/refs/heads/main/logo2.png" 
                  alt="Den_enterprise Logo" 
                  className="h-full w-auto object-contain opacity-80 relative z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                {/* <span className="absolute inset-0 flex items-center justify-center text-[8px] text-gray-600 font-bold uppercase tracking-tighter z-0 text-center px-1">
                  Den_enterprise
                </span> */}
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <a 
              href="https://sourceforge.net/projects/subject-browser-code/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand/20 active:scale-95"
            >
              Download Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
