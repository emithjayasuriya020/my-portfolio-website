"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

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
  const { isDark, toggle } = useTheme();

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
        <div className={`mx-auto max-w-5xl px-10 py-4 rounded-full border border-border-ui backdrop-blur-md bg-card-bg/90 shadow-xl flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'scale-[0.98]' : 'scale-100'
        }`}>
          {/* Logo — EJ. */}
          <div
            className="text-navy font-serif font-bold text-2xl cursor-pointer flex items-center gap-0.5 shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span>E</span><span className="text-gold">J.</span>
          </div>

          {/* Nav Links — Uppercase tracked */}
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar ml-8">
            {NAV_LINKS.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className={`text-[10px] uppercase tracking-[0.2em] font-sans font-medium whitespace-nowrap
                  ${activeSection === id ? 'text-gold' : 'text-text-muted hover:text-navy'}
                `}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            id="theme-toggle"
            onClick={toggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-6 shrink-0 w-9 h-9 rounded-full border border-border-ui flex items-center justify-center text-text-muted hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
          >
            {isDark ? (
              /* Sun icon */
              <svg
                key="sun"
                className="w-[18px] h-[18px] transition-transform duration-500 group-hover:rotate-45"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5"/>
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              /* Moon icon */
              <svg
                key="moon"
                className="w-[16px] h-[16px] transition-transform duration-500 group-hover:-rotate-12"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
