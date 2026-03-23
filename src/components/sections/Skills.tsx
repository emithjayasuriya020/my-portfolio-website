import React from 'react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL']
  },
  {
    title: 'Web Development',
    skills: ['React', 'Node.js', 'HTML/CSS', 'REST APIs', 'FastAPI']
  },
  {
    title: 'ML & Data Science',
    skills: ['Pandas', 'NumPy', 'Jupyter']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Docker', 'Linux', 'Postman', 'MongoDB']
  },
  {
    title: 'CS Fundamentals',
    skills: ['Algorithms', 'Data Structures', 'Operating Systems', 'Networking', 'IT Security']
  },
  {
    title: 'Soft Skills',
    skills: ['Communication', 'Teamwork', 'Problem Solving', 'Leadership']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Decorator — Grid Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl -z-10" />

        <div className="text-left mb-16">
          <p className="text-[11px] tracking-[0.18em] text-gold font-mono uppercase mb-2">
            02 — Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
            Skills & <span className="text-gold italic">Technologies</span>
          </h2>
          <div className="w-10 h-1 bg-gold/30 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={category.title} 
              className={`group flex flex-col space-y-4 bg-[#FDFAF4]/50 p-6 rounded-2xl border border-[#E2D9C8]/50 hover:border-[#B8962E]/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 backdrop-blur-sm reveal-on-scroll reveal stagger-${(index % 5) + 1}`}
            >
              <h3 className="text-navy font-serif text-xl border-b border-border-ui pb-2 group-hover:text-gold group-hover:border-gold transition-colors duration-300 flex items-center justify-between">
                {category.title}
                <span className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono tracking-wider text-slate-700 bg-white border border-border-ui px-3 py-1.5 rounded-full hover:border-gold hover:text-navy hover:scale-110 transition-all duration-300 shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
