
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-24 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                 <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Subject</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-xs font-light">
              Built by Den_enterprise. A minimalist approach to query-driven web exploration.
            </p>
          </div>
          
          <div className="flex space-x-16">
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Resources</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="https://sourceforge.net/projects/subject-browser-code/" className="hover:text-brand transition-colors">SourceForge</a></li>
                {/* Documentation and Change Log removed */}
              </ul>
            </div>
            {/* Connect section removed completely */}
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <span>© 2024 Den_enterprise. All Rights Reserved.</span>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
