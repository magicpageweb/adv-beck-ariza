import { useState, useRef, useEffect } from 'react';
import { GraduationCap, Users, Target, BookOpen, Lock } from 'lucide-react';

const values = [
  {
    icon: GraduationCap,
    title: 'Especialização de Alto Nível',
    text: 'A atuação do escritório é concentrada em Direito Penal e Processual Penal, com foco em criminalidade econômica, compliance e direito sancionador. Essa especialização permite o domínio técnico profundo das matérias e o desenvolvimento de estratégias eficazes, diferenciando-se dos escritórios de atuação generalista.',
  },
  {
    icon: Users,
    title: 'Atendimento Pessoal e Direto',
    text: 'Cada cliente tem contato direto com os advogados responsáveis pelo caso, sem intermediários. Acreditamos que a relação de confiança entre advogado e cliente é fundamental para o sucesso da defesa, especialmente em situações de alta sensibilidade jurídica e reputacional.',
  },
  {
    icon: Target,
    title: 'Estratégia Construída com o Cliente',
    text: 'A definição da estratégia jurídica é feita de forma colaborativa, com o cliente informado e participante em cada etapa. Compreendemos que decisões jurídicas impactam vidas, negócios e reputações, razão pela qual o cliente é tratado como parceiro estratégico, e não apenas como destinatário de um serviço.',
  },
  {
    icon: BookOpen,
    title: 'Rigor Técnico e Visão Prática',
    text: 'Combinamos aprofundamento doutrinário e jurisprudencial com uma abordagem pragmática voltada para resultados. A bagagem acadêmica dos integrantes do escritório enriquece a qualidade das peças processuais e das estratégias adotadas, sem perder de vista os objetivos concretos do cliente.',
  },
  {
    icon: Lock,
    title: 'Discrição e Integridade',
    text: 'Todas as comunicações e informações tratadas no escritório são cobertas pelo sigilo profissional absoluto. A discrição não é apenas uma obrigação legal — é um compromisso ético e uma condição essencial para a prestação do serviço de advocacia criminal de alto padrão.',
  },
];

export default function Values() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => { /* Intersection tracking for future animations */ },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label block mb-4">Princípios Fundamentais</span>
          <h2 className="section-title mb-4">Valores</h2>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Princípios que orientam cada decisão estratégica
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0">
          {/* Tab Headers — desktop vertical nav */}
          <div className="hidden lg:flex flex-col border-r border-slate-200">
            {values.map((v, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-6 py-5 border-b border-slate-100 transition-all duration-300 ease-in-out relative group ${
                  activeIndex === i
                    ? 'bg-white text-navy-900'
                    : 'text-slate-500 hover:text-navy-800 hover:bg-white/50'
                }`}
              >
                {activeIndex === i && (
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-600" />
                )}
                <div className="flex items-center gap-3">
                  <v.icon
                    size={16}
                    className={`transition-colors duration-300 ${activeIndex === i ? 'text-gold-600' : 'text-slate-400 group-hover:text-gold-500'}`}
                  />
                  <span className="font-sans text-xs font-600 tracking-wide">{v.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-4 bg-white p-10 lg:p-16 min-h-64">
            {values.map((v, i) => (
              <div
                key={i}
                className={`transition-all duration-400 ease-in-out ${
                  activeIndex === i ? 'block' : 'hidden'
                }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-navy-900 text-gold-400">
                    <v.icon size={22} />
                  </div>
                  <h3 className="font-serif text-2xl font-600 text-navy-900">{v.title}</h3>
                </div>
                <p className="font-sans text-base text-slate-600 leading-relaxed">{v.text}</p>
                <div className="mt-8 h-px bg-gradient-to-r from-gold-200 via-gold-400 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="lg:hidden mt-8 space-y-3">
          {values.map((v, i) => (
            <div key={i} className="border border-slate-200 bg-white">
              <button
                onClick={() => setActiveIndex(activeIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <v.icon size={16} className="text-gold-600" />
                  <span className="font-sans text-sm font-600 text-navy-900">{v.title}</span>
                </div>
                <span className={`text-gold-600 transition-transform duration-300 ${activeIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-in-out ${activeIndex === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-5 pb-5 font-sans text-sm text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
