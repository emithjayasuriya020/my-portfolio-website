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
    <section id="skills" className="py-24 bg-bg-section-alt overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Decorator — Ambient glow blobs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 dark:bg-gold/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 dark:bg-gold/5 rounded-full blur-3xl -z-10" />

        <div className="text-left mb-16">
          <p className="text-[11px] tracking-[0.18em] text-gold font-mono uppercase mb-2">
            02 — Expertise
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight mb-4">
            Skills & <span className="text-gold italic">Technologies</span>
          </h2>
          <div className="w-10 h-1 bg-gold/30 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className={`group flex flex-col space-y-4
                bg-[#FDFAF4]/70 dark:bg-[#1a2032]
                border border-[#E2D9C8] dark:border-[#2d3748]
                hover:border-gold dark:hover:border-gold/60
                dark:hover:shadow-[0_0_30px_-5px_rgba(201,168,76,0.2)]
                p-6 rounded-2xl
                transition-all duration-500 hover:shadow-xl hover:-translate-y-2
                backdrop-blur-sm reveal-on-scroll reveal stagger-${(index % 5) + 1}`}
            >
              {/* Category title */}
              <h3 className="
                text-navy dark:text-[#e2ddd4]
                font-serif text-xl
                border-b border-[#E2D9C8] dark:border-[#2d3748]
                group-hover:border-gold dark:group-hover:border-gold/50
                pb-2
                group-hover:text-gold
                transition-colors duration-300
                flex items-center justify-between
              ">
                {category.title}
                <span className="w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-[11px] font-mono tracking-wider cursor-default
                      px-3 py-1.5 rounded-full
                      border transition-all duration-300
                      shadow-sm hover:scale-110

                      /* Light mode */
                      text-slate-700 bg-white border-[#E2D9C8]
                      hover:border-gold hover:text-[#1a1a2e]

                      /* Dark mode — gold tinted */
                      dark:text-gold/90 dark:bg-gold/10 dark:border-gold/25
                      dark:hover:bg-gold/20 dark:hover:border-gold/60 dark:hover:text-gold
                    "
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
