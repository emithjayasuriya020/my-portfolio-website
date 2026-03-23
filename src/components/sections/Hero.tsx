"use client";

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const a = document.createElement('a');
    a.href = '/cv.pdf';
    a.download = 'Emith_Jayasuriya_CV.pdf';
    a.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg-section">
      {/* Decorative Background Element */}
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[120%] opacity-10 pointer-events-none">
        <Image 
          src="/images/Anime-Image.avif" 
          alt="" 
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side — Text Content */}
        <div className="max-w-2xl">
          <p className="text-gold font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-6 reveal active stagger-1">
            Empowering Digital Innovation
          </p>
          
          <h1 className="text-navy font-serif text-5xl md:text-8xl leading-[1.1] mb-8 reveal active stagger-2">
            Emith <span className="text-gold italic">Jayasuriya</span>
          </h1>

          <p className="text-slate text-lg md:text-xl mb-12 leading-relaxed font-light reveal active stagger-3">
            A Computer Science student & aspiring Software Engineer 
            crafting seamless digital experiences through code and creative problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 reveal active stagger-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-navy text-cream text-[11px] uppercase tracking-[0.2em] font-mono hover:bg-gold transition-all duration-500 shadow-xl"
            >
              Explore Projects
            </button>
            <button 
              onClick={handleDownloadCV}
              className="px-10 py-5 border border-navy/20 text-navy text-[11px] uppercase tracking-[0.2em] font-mono hover:bg-navy hover:text-white transition-all duration-500"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right Side — Image Card */}
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto reveal active stagger-2">
          {/* Glassmorphic card for image */}
          <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl rotate-3 scale-105 z-0" />
          <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-border-ui">
            <Image 
              src="/images/my-photo.jpeg" 
              alt="Emith Jayasuriya" 
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          
          {/* Subtle floating attribute */}
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-border-ui shadow-lg z-20 reveal active stagger-5">
            <span className="block text-gold font-mono text-xs uppercase tracking-widest mb-1">Based in</span>
            <span className="text-navy font-serif text-lg">Sri Lanka</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
