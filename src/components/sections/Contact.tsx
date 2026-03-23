"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.currentTarget);

    // This is where you put your Web3Forms access key
    // You can get one for free at https://web3forms.com/
    formData.append("access_key", "cc7c00bd-254f-4374-b5a2-41b5a2738804");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (event.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-navy/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-left mb-16 reveal-on-scroll reveal">
          <p className="text-[11px] tracking-[0.18em] text-[#B8962E] font-mono uppercase mb-2">
            07 — Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a2e] leading-tight mb-4">
            Contact
          </h2>
          <div className="w-10 h-1 bg-[#B8962E]/30 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column — Contact Form */}
          <div className="bg-[#FDFAF4] border border-[#E2D9C8] p-8 md:p-12 rounded-2xl shadow-sm reveal-on-scroll reveal-left stagger-1">
            <h3 className="font-serif text-2xl text-[#1a1a2e] mb-2">Send a Message</h3>
            <p className="text-sm text-[#6B5E4E] mb-10 italic">I&apos;ll get back to you as soon as possible.</p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#B8962E] font-mono mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Your Name"
                  className="w-full bg-white border border-[#E2D9C8] px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-[#B8962E] transition-colors placeholder-[#6B5E4E]/30"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#B8962E] font-mono mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full bg-white border border-[#E2D9C8] px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-[#B8962E] transition-colors placeholder-[#6B5E4E]/30"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#B8962E] font-mono mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="w-full bg-white border border-[#E2D9C8] px-5 py-4 rounded-xl text-sm focus:outline-none focus:border-[#B8962E] transition-colors resize-none placeholder-[#6B5E4E]/30"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#1a1a2e] text-white py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-mono hover:bg-[#B8962E] transition-all duration-300 shadow-lg mt-4 disabled:bg-slate-400 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-emerald-600 text-[11px] font-mono uppercase tracking-widest text-center mt-4">
                  ✓ Message sent successfully!
                </p>
              )}
              {status === 'error' && (
                <p className="text-rose-600 text-[11px] font-mono uppercase tracking-widest text-center mt-4">
                  ✗ Something went wrong.
                </p>
              )}
            </form>
          </div>

          {/* Right Column — Details & Socials */}
          <div className="flex flex-col space-y-12">
            <div className="reveal-on-scroll reveal-right stagger-1">
              <h3 className="font-serif text-3xl text-[#1a1a2e] mb-6">Let&apos;s build something together.</h3>
              <p className="text-[#6B5E4E] leading-relaxed mb-8 italic">
                Whether you have an internship opportunity, a collaboration idea, or just want to connect — my inbox is always open.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-6 group reveal-on-scroll reveal-right stagger-2">
                <div className="w-12 h-12 rounded-full bg-[#FDFAF4] border border-[#E2D9C8] flex items-center justify-center text-[#B8962E] group-hover:bg-[#B8962E] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B8962E] font-mono mb-1">Email</p>
                  <a href="mailto:emithjayasuriya@yahoo.com" className="text-[#1a1a2e] hover:text-[#B8962E] transition-colors">emithjayasuriya@yahoo.com</a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-6 group reveal-on-scroll reveal-right stagger-3">
                <div className="w-12 h-12 rounded-full bg-[#FDFAF4] border border-[#E2D9C8] flex items-center justify-center text-[#B8962E] group-hover:bg-[#B8962E] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B8962E] font-mono mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/emith-jayasuriya-3a4265316" target="_blank" rel="noopener noreferrer" className="text-[#1a1a2e] hover:text-[#B8962E] transition-colors">Emith Jayasuriya</a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-6 group reveal-on-scroll reveal-right stagger-4">
                <div className="w-12 h-12 rounded-full bg-[#FDFAF4] border border-[#E2D9C8] flex items-center justify-center text-[#B8962E] group-hover:bg-[#B8962E] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B8962E] font-mono mb-1">GitHub</p>
                  <a href="https://github.com/emithjayasuriya020" target="_blank" rel="noopener noreferrer" className="text-[#1a1a2e] hover:text-[#B8962E] transition-colors">emithjayasuriya020</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 group reveal-on-scroll reveal-right stagger-5">
                <div className="w-12 h-12 rounded-full bg-[#FDFAF4] border border-[#E2D9C8] flex items-center justify-center text-[#B8962E] group-hover:bg-[#B8962E] group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#B8962E] font-mono mb-1">Phone</p>
                  <a href="tel:+94783920235" className="text-[#1a1a2e] hover:text-[#B8962E] transition-colors">+94 78 392 0235</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
