import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const areas = [
  {
    id: 'compliance',
    label: 'Compliance e Investigações Internas',
    shortLabel: 'Compliance',
    items: [
      'Programas de compliance penal e anticorrupção',
      'Due diligence penal em fusões e aquisições',
      'Investigações internas corporativas',
      'Assessoria a Comitês de Ética e Auditoria',
      'Gestão de crise e resposta a incidentes',
      'Treinamentos corporativos em compliance',
      'Soluções de prevenção à lavagem de dinheiro (PLD/FT)',
    ],
  },
  {
    id: 'economica',
    label: 'Criminalidade Econômica e Empresarial',
    shortLabel: 'Criminalidade Econômica',
    items: [
      'Crimes tributários e fiscais',
      'Crimes contra o sistema financeiro nacional',
      'Crimes falimentares e recuperacionais',
      'Corrupção ativa e passiva',
      'Lavagem de dinheiro e ocultação de bens',
      'Crimes licitatórios e contra a Administração Pública',
      'Crimes ambientais de natureza empresarial',
      'Crimes contra as relações de consumo',
      'Crimes de abuso de autoridade',
      'Crimes societários e de gestão fraudulenta',
      'Crimes contra o mercado de capitais',
      'Crimes previdenciários',
      'Crimes de concorrência desleal',
      'Crimes contra a honra em contexto empresarial',
    ],
  },
  {
    id: 'negocial',
    label: 'Direito Penal Negocial',
    shortLabel: 'Direito Penal Negocial',
    items: [
      'Soluções consensuais em matéria penal',
      'Acordo de não persecução penal (ANPP)',
      'Colaboração premiada (delação premiada)',
      'Leniência e acordos administrativos',
      'Suspensão condicional do processo',
      'Transação penal',
      'Negociação de penas em processos criminais complexos',
      'Procedimentos seguros para encerramento de investigações',
    ],
  },
  {
    id: 'sancionador',
    label: 'Direito Sancionador',
    shortLabel: 'Direito Sancionador',
    items: [
      'Processos administrativos sancionadores',
      'Defesa perante o CADE (antitruste)',
      'Defesa perante o Banco Central e CVM',
      'Processos disciplinares em órgãos reguladores',
      'Responsabilidade administrativa de pessoas jurídicas (Lei Anticorrupção)',
      'Impugnações e recursos administrativos',
      'Procedimentos sancionadores tributários',
    ],
  },
];

export default function PracticeAreas() {
  const [activeTab, setActiveTab] = useState('compliance');
  const activeArea = areas.find(a => a.id === activeTab)!;

  return (
    <section id="areas" className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-600/5 rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label block mb-4">Especialização</span>
          <h2 className="section-title-light mb-4">Áreas de Atuação</h2>
          <p className="font-sans text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            Atuação abrangente com foco em direito e processo penal econômico e empresarial
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 mb-12 border-b border-white/10">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`px-5 py-4 font-sans text-xs tracking-wider uppercase transition-all duration-300 ease-in-out relative ${
                activeTab === area.id
                  ? 'text-gold-400'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {area.shortLabel}
              {activeTab === area.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Area title */}
          <div>
            <h3 className="font-serif text-3xl md:text-4xl font-600 text-white mb-6 leading-tight">
              {activeArea.label}
            </h3>
            <p className="font-sans text-slate-400 text-sm leading-relaxed mb-8">
              Nossa equipe oferece assessoria especializada e defesa técnica em todas as vertentes desta área,
              com profundo conhecimento da legislação, jurisprudência e práticas regulatórias aplicáveis.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-gold-400 font-sans text-sm tracking-widest uppercase border-b border-gold-400/30 pb-1 hover:border-gold-400 hover:gap-3 transition-all duration-300 ease-in-out"
            >
              Consultar sobre esta área
              <ChevronRight size={14} />
            </a>
          </div>

          {/* Item list */}
          <div>
            <ul className={activeArea.id === 'economica' ? "grid grid-cols-1 md:grid-cols-2 gap-x-4" : "space-y-0"}>
              {activeArea.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-3 border-b border-white/5 group"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-600 group-hover:scale-150 transition-transform duration-300" />
                  </span>
                  <span className="font-sans text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom grid overview */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 pt-12 border-t border-white/10">
          {areas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveTab(area.id)}
              className={`p-6 text-left border transition-all duration-300 ease-in-out group ${
                activeTab === area.id
                  ? 'border-gold-600 bg-gold-600/10'
                  : 'border-white/10 bg-white/5 hover:border-gold-600/50 hover:bg-white/10'
              }`}
            >
              <div className={`font-sans text-xs tracking-widest uppercase mb-3 transition-colors duration-300 ${activeTab === area.id ? 'text-gold-400' : 'text-slate-500 group-hover:text-gold-500'}`}>
                {String(areas.indexOf(area) + 1).padStart(2, '0')}
              </div>
              <div className="font-serif text-base font-500 text-white leading-tight">
                {area.shortLabel}
              </div>
              <div className={`mt-3 text-xs font-sans text-slate-500 transition-colors duration-300 ${activeTab === area.id ? 'text-gold-500' : ''}`}>
                {area.items.length} subespecialidades
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
