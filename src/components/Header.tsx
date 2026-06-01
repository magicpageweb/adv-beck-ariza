import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Escritório', href: '#escritorio' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Profissionais', href: '#profissionais' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-900 text-slate-400 text-xs font-sans tracking-widest py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="uppercase">Atendimento Mediante Agendamento</span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-gold-600 inline-block"></span>
            Rio Grande do Sul, Brasil
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${
          scrolled
            ? 'bg-navy-900/95 backdrop-blur-md shadow-2xl py-0 md:top-0'
            : 'bg-transparent py-0 md:top-[33px]'
        }`}
      >
        <nav className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-400 ease-in-out ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center group" aria-label="Ir para o início">
            <img 
              src="/LogoADV-branco.webp" 
              alt="Francis Beck & Rafael Ariza Advocacia"
              className="transition-all duration-300 ease-in-out"
              style={{ height: scrolled ? '40px' : '48px' }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-xs tracking-widest uppercase transition-all duration-300 ease-in-out relative pb-0.5 ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-gold-500'
                    : 'text-slate-300 hover:text-gold-400'
                }`}
              >
                {link.label}
                {activeSection === link.href.replace('#', '') && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-gold-500 transition-all duration-300" />
                )}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-4 px-6 py-2.5 bg-gold-600 text-white font-sans text-xs tracking-widest uppercase transition-all duration-300 ease-in-out hover:bg-gold-700 hover:shadow-lg hover:shadow-gold-600/25"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 transition-all duration-300"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-navy-900/98 backdrop-blur-md transition-all duration-400 ease-in-out overflow-hidden ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-5 border-t border-white/10">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-sm tracking-widest uppercase text-slate-300 hover:text-gold-400 transition-all duration-300 ease-in-out"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-6 py-3 bg-gold-600 text-white font-sans text-xs tracking-widest uppercase text-center transition-all duration-300 ease-in-out hover:bg-gold-700"
            >
              Agendar Consulta
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
