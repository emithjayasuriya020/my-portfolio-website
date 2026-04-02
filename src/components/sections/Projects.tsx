import React from 'react';

const PROJECT_DATA = [
  {
    title: 'Personal Finance Tracker',
    category: 'FULL STACK',
    date: '2024',
    description: 'A production-grade Java stack management app supporting income/expense tracking, category management, and data summaries.',
    tags: ['SPRING BOOT', 'THYMELEAF', 'MYSQL', 'JAVA'],
    link: 'https://github.com/emithjayasuriya020/personal-finance-tracker',
    type: 'public'
  },
  {
    title: 'Eureka AI Services',
    category: 'AI / BACKEND',
    date: '2024',
    description: 'Backend services powering the Eureka AI platform — private repository focused on high-performance AI integration. Available upon request.',
    tags: ['PYTHON', 'AI / ML', 'REST API'],
    type: 'private'
  },
  {
    title: 'SafePaws',
    category: 'BACKEND',
    date: '2023',
    description: 'Pet safety and welfare platform built collaboratively as part of a software engineering module. Available upon request.',
    tags: ['BACKEND', 'REST API', 'GROUP PROJECT', 'JAVA'],
    type: 'private',
    badge: 'University Group Project'
  },
  {
    title: 'Traffic Visualization',
    category: 'DATA ANALYSIS',
    date: '2024',
    description: 'Processes raw CSV logs from junctions to surface violations and key statistics through rich visual output.',
    tags: ['PYTHON', 'PANDAS', 'MATPLOTLIB'],
    link: 'https://github.com/emithjayasuriya020/python-traffic-visualization',
    type: 'public'
  },
  {
    title: 'Weather Dashboard',
    category: 'FULLSTACK',
    date: '2024',
    description: 'A clean, real-time weather interface pulling live data with intuitive visual hierarchy.',
    tags: ['JAVASCRIPT', 'REST API', 'CSS'],
    link: 'https://github.com/emithjayasuriya020/weather-dashboard',
    type: 'public'
  },
  {
    title: 'Eureka Landing Page',
    category: 'LANDING PAGE',
    date: '2024',
    description: 'Marketing landing page for the Eureka AI platform, translating technical offerings into a polished web presence.',
    tags: ['JAVASCRIPT', 'HTML', 'CSS'],
    link: 'https://github.com/emithjayasuriya020/eureka-landing-page',
    type: 'public'
  },
  {
    title: 'Tasker CLI \u26A1',
    category: 'CLI / GO',
    date: '2024',
    description: 'A lightweight command-line task manager built with Go. Features persistent JSON storage for adding, listing, completing, and deleting tasks.',
    tags: ['GO', 'CLI', 'JSON'],
    link: 'https://github.com/emithjayasuriya020/tasker-cli',
    type: 'public'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-cream px-6 md:px-12 py-24 font-sans overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="reveal-on-scroll reveal">
          <p className="text-[11px] tracking-[0.18em] text-[#8B7355] font-normal mb-2 uppercase">
            03 — FEATURED WORK
          </p>
          <h2 className="font-serif text-4xl md:text-[42px] font-light text-[#B8962E] m-0 mb-2 leading-[1.1]">
            Projects
          </h2>
          <div className="w-10 h-0.5 bg-[#B8962E] my-5 mb-12" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_DATA.map((project, index) => (
            <div 
              key={index} 
              className={`group relative bg-[#FDFAF4] border border-[#E2D9C8] rounded-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#B8962E] flex flex-col h-full reveal-on-scroll reveal stagger-${(index % 5) + 1}`}
            >
              {/* Top Row: Category & Icon */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1.5">
                  <span className="text-[9px] tracking-[0.14em] font-medium text-[#B8962E] bg-[#B8962E]/10 px-2.5 py-1 rounded-sm">{project.category}</span>
                  {project.type === 'private' && (
                    <span className="text-[9px] tracking-[0.14em] font-medium text-[#6B5E4E] bg-[#6B5E4E]/10 border border-[#6B5E4E]/20 px-2.5 py-1 rounded-sm">PRIVATE</span>
                  )}
                </div>
                {project.type === 'public' ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <svg className="w-[18px] h-[18px] text-[#C9B99A] transition-all group-hover:text-[#B8962E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                ) : (
                  <svg className="w-4 h-4 text-[#C9B99A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                  </svg>
                )}
              </div>

              {/* Title & Desc */}
              <h3 className="font-serif text-2xl text-[#1a1a2e] mb-3 group-hover:text-[#B8962E] transition-colors">{project.title}</h3>
              <p className="text-[13px] text-[#6B5E4E] leading-relaxed mb-6 font-light italic">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-mono tracking-wider text-[#8B7355] border border-[#D8CCBA] px-2 py-0.5 rounded-sm bg-white">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Badge for Univ project */}
              {project.badge && (
                 <div className="mt-4 pt-4 border-t border-[#E2D9C8] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B8962E]" />
                    <span className="text-[10px] text-[#8B7355] italic">{project.badge}</span>
                 </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
