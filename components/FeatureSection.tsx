
import React from 'react';

const features = [
  {
    title: "Python-Native Core",
    description: "Engineered with high-performance Python, allowing for native speed and sophisticated logic in every browsing session.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Link-Centric Results",
    description: "Instead of complex data scraping, we prioritize clean, direct links to Google's most relevant sources based on your query's subject.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    )
  },
  {
    title: "Subject Extraction",
    description: "The engine deconstructs complex queries into core subjects, ensuring your search results are precisely what you intended.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "By Den_enterprise",
    description: "A product of Den_enterprise's commitment to lean, powerful, and effective software tools for the modern web.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 rounded-[2rem] glass border border-white/5 hover:border-brand/40 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand-light mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-brand/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
