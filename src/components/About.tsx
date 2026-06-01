import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Shield, Building2 } from 'lucide-react';

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const highlights = [
  { icon: TrendingUp, label: 'Mitigação de Riscos Penais' },
  { icon: Building2, label: 'Fortalecimento da Governança Corporativa' },
  { icon: Shield, label: 'Preservação da Integridade Institucional' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const beck = useCounter(25, 2000, inView);
  const ariza = useCounter(20, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="escritorio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Column */}
          <div>
            <span className="section-label block mb-4">Sobre Nós</span>
            <h2 className="section-title mb-10">O Escritório</h2>

            <div className="space-y-6 text-slate-600 font-sans text-base leading-relaxed">
              <p>
                O escritório <strong className="text-navy-900 font-600">Francis Beck &amp; Rafael Ariza Advocacia</strong> é referência em Direito Penal e Processual Penal, com atuação especializada em criminalidade econômica e empresarial, compliance e investigações internas, e direito sancionador. Fundado por advogados com trajetórias acadêmicas e profissionais consolidadas, o escritório combina rigor técnico com visão estratégica para oferecer soluções eficazes em contextos de alta complexidade jurídica.
              </p>
              <p>
                A atuação é orientada por uma abordagem técnica, personalizada e altamente estratégica. Cada caso é tratado com atenção individual, considerando não apenas os aspectos jurídicos, mas também os impactos reputacionais, institucionais e econômicos para o cliente. O escritório presta assessoria tanto na fase preventiva — com programas de compliance e orientação jurídica —, quanto na fase contenciosa, com defesa robusta em todas as instâncias do Poder Judiciário e perante órgãos administrativos.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-slate-600 font-sans text-sm leading-relaxed">
                A sólida formação acadêmica dos seus integrantes — incluindo doutorado, pós-doutorado e atividade docente continuada — reflete o compromisso permanente com a excelência técnica e a atualização constante, elementos indispensáveis para a prática do Direito Penal moderno.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div ref={sectionRef}>
            {/* Counters */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-navy-900 p-8 text-center relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-in-out" />
                <div className="font-serif text-6xl font-700 text-gold-400 leading-none mb-2">
                  {beck}<span className="text-4xl text-gold-500">+</span>
                </div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-slate-400 leading-relaxed">
                  Anos de Atuação Acadêmica e Profissional
                </p>
                <p className="font-serif text-sm italic text-gold-500/70 mt-2">Francis Beck</p>
              </div>
              <div className="bg-navy-900 p-8 text-center relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-in-out" />
                <div className="font-serif text-6xl font-700 text-gold-400 leading-none mb-2">
                  {ariza}<span className="text-4xl text-gold-500">+</span>
                </div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-slate-400 leading-relaxed">
                  Anos de Experiência Especializada
                </p>
                <p className="font-serif text-sm italic text-gold-500/70 mt-2">Rafael Ariza</p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 p-5 border border-slate-100 bg-slate-50 hover:border-gold-300 hover:bg-white hover:shadow-md transition-all duration-300 ease-in-out group cursor-default"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-200 text-gold-600 group-hover:bg-gold-600 group-hover:text-white group-hover:border-gold-600 transition-all duration-300">
                    <Icon size={18} />
                  </div>
                  <span className="font-sans text-sm font-500 text-navy-800">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
