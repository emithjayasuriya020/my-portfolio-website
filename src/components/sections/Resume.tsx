"use client";

import React from 'react';

const EDUCATION = [
  {
    period: '2024 - Present',
    institution: 'Informatics Institute of Technology (IIT)',
    degree: 'BSc (Hons) Computer Science',
    subTitle: 'Awarded by University of Westminster, UK'
  },
  {
    period: 'Sept 2023 - 2024',
    institution: 'Informatics Institute of Technology (IIT)',
    degree: 'One Year Foundation Certificate in Higher Education - IT',
    subTitle: 'Foundation Program'
  },
  {
    period: 'Secondary Education',
    institution: 'Isipathana College, Colombo',
    degree: 'G.C.E O/L Examination',
    details: 'Grade — 6As, 3B | Overall Credit — Merit'
  }
];

const EXPERIENCE = [
  {
    role: 'Payment Associate',
    company: 'Port City BPO',
    period: 'During Academic Studies',
    description: 'Handling payment processing and transaction-related tasks while maintaining academic responsibilities.'
  }
];

const CERTIFICATES = [
  {
    title: 'Professional Certificate in Java Programming',
    institution: 'IIT (Object Oriented Programming)',
    detail: 'Credit — Distinction'
  }
];

const Resume: React.FC = () => {
  return (
    <section id="cv" className="py-24 bg-cream">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-[11px] tracking-[0.18em] text-[#B8962E] font-mono uppercase mb-2 text-center lg:text-left">
              06 — Résumé
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] text-center lg:text-left">
              Curriculum <span className="text-[#B8962E] italic">Vitae</span>
            </h2>
          </div>
          
          <button 
            onClick={() => {
              const a = document.createElement('a');
              a.href = '/cv.pdf';
              a.download = 'Emith_Jayasuriya_CV.pdf';
              a.click();
            }}
            className="group flex items-center gap-3 bg-[#1a1a2e] text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-mono hover:bg-[#B8962E] transition-all duration-300 shadow-lg"
          >
            Download PDF
            <svg className="w-4 h-4 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column — Education */}
          <div className="flex flex-col space-y-12">
            <h3 className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#1a1a2e]/40 mb-2 reveal-on-scroll reveal stagger-1">Education</h3>
            
            {EDUCATION.map((item, index) => (
              <div key={index} className={`relative pl-8 border-l border-[#E2D9C8] pb-4 reveal-on-scroll reveal-left stagger-${index + 1}`}>
                <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[#B8962E]" />
                <span className="block text-[10px] font-mono text-[#B8962E] uppercase tracking-widest mb-1">
                  {item.period}
                </span>
                <h4 className="text-[#1a1a2e] font-serif text-xl mb-1">{item.degree}</h4>
                <p className="text-sm text-[#6B5E4E] font-sans mb-1">{item.institution}</p>
                {item.subTitle && <p className="text-xs text-[#6B5E4E]/60 italic">{item.subTitle}</p>}
                {item.details && <p className="text-xs text-[#6B5E4E]/80 mt-2 font-mono uppercase tracking-tighter">{item.details}</p>}
              </div>
            ))}
          </div>

          {/* Right Column — Certs & Experience */}
          <div className="flex flex-col space-y-16">
            
            {/* Experience */}
            <div className="reveal-on-scroll reveal-right stagger-1">
              <h3 className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#1a1a2e]/40 mb-10">Experience</h3>
              {EXPERIENCE.map((item, index) => (
                <div key={index} className="bg-[#FDFAF4] border border-[#E2D9C8] p-8 rounded-[2px] shadow-sm hover:shadow-md transition-shadow">
                  <span className="block text-[10px] font-mono text-[#B8962E] uppercase tracking-widest mb-2">
                    {item.period}
                  </span>
                  <h4 className="text-[#1a1a2e] font-serif text-xl mb-1">{item.role}</h4>
                  <p className="text-sm font-medium text-[#6B5E4E] mb-4">{item.company}</p>
                  <p className="text-[13px] text-[#6B5E4E]/80 leading-relaxed italic">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certificates */}
            <div className="reveal-on-scroll reveal-right stagger-2">
              <h3 className="text-xs uppercase tracking-[0.3em] font-sans font-bold text-[#1a1a2e]/40 mb-10">Certificates</h3>
              {CERTIFICATES.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group mb-4">
                  <div className="mt-1 w-2 h-2 rounded-full border border-[#B8962E] group-hover:bg-[#B8962E] transition-colors" />
                  <div>
                    <h4 className="text-[#1a1a2e] font-serif text-lg leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6B5E4E] font-mono tracking-wider">
                      {item.institution} — <span className="text-[#B8962E] font-bold italic">{item.detail}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
