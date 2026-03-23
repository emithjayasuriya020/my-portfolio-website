"use client";

import React, { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal-on-scroll");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="flex-1 relative">
      <Navbar />

      {/* Modern Background Visuals — Floating Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-navy/5 rounded-full blur-[150px] animate-blob delay-2000" />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] animate-blob delay-4000" />
      </div>

      <div className="reveal-on-scroll reveal">
        <Hero />
      </div>

      <div className="reveal-on-scroll reveal">
        <About />
      </div>

      <div className="reveal-on-scroll reveal">
        <Skills />
      </div>

      <div className="reveal-on-scroll reveal">
        <Projects />
      </div>

      <div className="reveal-on-scroll reveal">
        <Resume />
      </div>

      <div className="reveal-on-scroll reveal">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-footer py-20 text-cream/50 text-center font-mono text-xs uppercase tracking-widest">
        <div className="container mx-auto px-6">
          <p className="text-gold mb-4">Emith Jayasuriya &copy; 2026</p>
          <div className="h-px w-20 bg-gold/30 mx-auto" />
        </div>
      </footer>
    </main>
  );
}
