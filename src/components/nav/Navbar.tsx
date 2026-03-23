"use client";

import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home',     id: 'home' },
  { label: 'About',    id: 'about' },
  { label: 'Skills',   id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'CV',       id: 'cv' },
  { label: 'Contact',  id: 'contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = NAV_LINKS.map(link => link.id);
      
      // Bottom of page check
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near or above the top of the viewport
          if (rect.top <= 160) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 100) setActiveSection('home');
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`mx-auto max-w-5xl px-10 py-4 rounded-full border border-[#E2D9C8] backdrop-blur-md bg-[#FDFAF4]/90 shadow-xl flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'scale-[0.98]' : 'scale-100'
        }`}>
          {/* Logo — EJ. */}
          <div
            className="text-[#1a1a2e] font-serif font-bold text-2xl cursor-pointer flex items-center gap-0.5 shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>E</span><span className="text-[#B8962E]">J.</span>
          </div>

          {/* Nav Links — Uppercase tracked */}
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar ml-8">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`text-[10px] uppercase tracking-[0.2em] font-sans font-medium transition-all duration-300 whitespace-nowrap
                  ${activeSection === id ? 'text-[#B8962E]' : 'text-[#6B5E4E] hover:text-[#1a1a2e]'}
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
