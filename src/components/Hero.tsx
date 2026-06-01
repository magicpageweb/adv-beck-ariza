import { useEffect, useRef } from 'react';
import { ArrowRight, Shield, ChevronDown } from 'lucide-react';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [badgeRef, headingRef, subRef, ctaRef];
    items.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = '0';
        ref.current.style.transform = 'translateY(30px)';
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = 'opacity 0.9s ease-out, transform 0.9s ease-out';
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }, 200 + i * 180);
      }
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/bg-hero-img1.webp')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-900/70" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-transparent" />

      {/* Gold accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-600 to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div ref={badgeRef} className="flex items-center gap-3 mb-8">
            <Shield size={14} className="text-gold-500" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400">
              Rio Grande do Sul, Brasil
            </span>
            <span className="flex-1 max-w-16 h-px bg-gold-600/50" />
          </div>

          {/* Main Heading */}
          <h1 ref={headingRef} className="font-serif text-5xl md:text-6xl lg:text-7xl font-600 text-white leading-tight mb-6">
            Francis Beck &amp; <br />
            <span className="text-gold-400">Rafael Ariza</span> <br />
            <span className="font-300 italic">Advocacia</span>
          </h1>

          {/* Subheading */}
          <p ref={subRef} className="font-sans text-lg md:text-xl text-slate-300 font-300 leading-relaxed max-w-xl mb-12 tracking-wide">
            Defesa penal estratégica para cenários de complexidade e exposição
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-600 text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 ease-in-out hover:bg-gold-700 hover:shadow-xl hover:shadow-gold-600/30 hover:gap-4"
            >
              Agendar Reunião Reservada
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#escritorio"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 ease-in-out hover:border-gold-500 hover:text-gold-400"
            >
              Conheça o Escritório
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative z-10 mt-auto border-t border-white/10 bg-navy-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: '25+', label: 'Anos de Atuação' },
            { num: '20+', label: 'Anos de Experiência' },
            { num: '4', label: 'Macroáreas de Atuação' },
            { num: '100%', label: 'Confidencialidade' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl font-600 text-gold-400">{stat.num}</div>
              <div className="font-sans text-xs tracking-widest uppercase text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#escritorio"
        className="absolute bottom-36 right-8 hidden lg:flex flex-col items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors duration-300"
      >
        <span className="font-sans text-xs tracking-[0.2em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
