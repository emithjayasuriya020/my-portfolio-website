import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bg-section">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Label */}
        <p className="text-[11px] tracking-[0.18em] text-gold font-mono uppercase mb-2">
          01 — Introduction
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">

          {/* Left — Image */}
          <div className="relative reveal-on-scroll reveal-left">
            {/* Decorative offset frame */}
            <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl -rotate-2 scale-105 z-0" />
            <div className="relative z-10 overflow-hidden rounded-2xl border border-border-ui shadow-xl aspect-[4/5] w-full max-w-sm mx-auto">
              <Image
                src="/images/my-photo.jpeg"
                alt="Emith Jayasuriya"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 30vw"
              />
            </div>
            
            {/* Location badge */}
            <div className="absolute -bottom-5 -right-4 bg-card-bg/90 backdrop-blur-md px-5 py-3 rounded-xl border border-border-ui shadow-md z-20 reveal-on-scroll reveal stagger-4">
              <span className="block text-gold font-mono text-[10px] uppercase tracking-widest mb-0.5">University</span>
              <span className="text-navy font-serif text-sm leading-tight">IIT Sri Lanka<br />
                <span className="text-light-slate font-sans font-light text-xs">Univ. of Westminster</span>
              </span>
            </div>
          </div>

          {/* Right — Bio */}
          <div className="flex flex-col space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-navy leading-tight reveal-on-scroll reveal stagger-1">
              About <span className="text-gold italic">Me</span>
            </h2>

            <div className="w-10 h-0.5 bg-gold/50 reveal-on-scroll reveal stagger-2" />

            <div className="reveal-on-scroll reveal stagger-3 space-y-6 text-justify">
              <p className="text-slate text-base leading-relaxed font-sans">
                As a second-year Computer Science student at IIT Sri Lanka (University of Westminster),
                I am driven by the challenge of architecting systems that are as robust as they are intuitive.
                My focus lies in <span className="text-navy font-medium">Software Engineering</span> and{' '}
                <span className="text-navy font-medium">Mobile Development</span>, where I aim to bridge the
                gap between complex machine learning models and seamless user experiences.
              </p>

              <p className="text-slate text-base leading-relaxed font-sans">
                I believe that great software isn&apos;t just written; it&apos;s engineered with a deep sense of
                human empathy and technical precision. Whether I&apos;m contributing to open-source projects or
                dissecting a new research paper, my goal is always to translate intricate concepts into
                scalable, real-world solutions.
              </p>
            </div>

            {/* Detail grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border-ui reveal-on-scroll reveal stagger-4">
              <div>
                <span className="block text-gold font-mono text-[10px] uppercase tracking-widest mb-1">University</span>
                <span className="text-navy font-sans text-sm leading-snug">
                  Informatics Institute of Technology, Sri Lanka
                </span>
                <span className="block text-light-slate font-sans text-xs mt-0.5">
                  Degree awarded by University of Westminster
                </span>
              </div>
              <div>
                <span className="block text-gold font-mono text-[10px] uppercase tracking-widest mb-1">Major</span>
                <span className="text-navy font-sans text-sm leading-snug">
                  BSc(Hons) in Computer Science
                </span>
              </div>
              <div>
                <span className="block text-gold font-mono text-[10px] uppercase tracking-widest mb-1">Location</span>
                <span className="text-navy font-sans text-sm">Colombo, Sri Lanka</span>
              </div>
              <div>
                <span className="block text-gold font-mono text-[10px] uppercase tracking-widest mb-1">Status</span>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-navy font-sans text-sm">Seeking Internship</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
