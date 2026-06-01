import { Award, BookOpen } from 'lucide-react';

const professionals = [
  {
    name: 'Francis Beck',
    title: 'Advogado Especialista',
    experience: 'Mais de 25 anos',
    photo: '/Francis-Beck Adv-perfil-1.webp',
    credentials: [
      'Doutor em Direito',
      'Pós-Doutor pela Universidade de Coimbra (Portugal)',
      'Mestre em Ciências Criminais',
      'Especialista em Direito Penal Econômico',
      'Professor da ESMM/RS – Escola Superior da Magistratura',
      'Autor de obras jurídicas de referência',
    ],
    linkedin: '#',
  },
  {
    name: 'Rafael Ariza',
    title: 'Advogado Especialista',
    experience: 'Mais de 20 anos',
    photo: '/Rafael-Ariza-Adv--perfil.webp',
    credentials: [
      'Mestre em Direito',
      'Especialista em Direito Penal e Processual Penal',
      'Especialista em Compliance e Governança',
      'Professor de cursos de pós-graduação',
      'Autor de artigos jurídicos especializados',
    ],
    linkedin: '#',
  },
];

export default function Professionals() {
  return (
    <section id="profissionais" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label block mb-4">Conhecer a Equipe</span>
          <h2 className="section-title mb-4">Profissionais</h2>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Experiência prática aliada à sólida formação acadêmica
          </p>
        </div>

        {/* Intro text */}
        <p className="font-sans text-slate-600 text-base leading-relaxed max-w-3xl mx-auto text-center mb-16">
          Seus integrantes possuem mais de 25 anos de atuação acadêmica e prática no Direito Penal e Processual Penal, combinando experiência em casos de alta complexidade com produção científica de referência e atividade docente continuada.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {professionals.map((pro) => (
            <div
              key={pro.name}
              className="group border border-slate-100 bg-slate-50 hover:border-gold-200 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-400 ease-in-out overflow-hidden"
            >
              <div className="relative overflow-hidden bg-navy-900 py-12 flex flex-col items-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gold-500/30 mb-6 group-hover:border-gold-500 transition-colors duration-400 relative z-10 shadow-lg">
                  <img
                    src={pro.photo}
                    alt={`${pro.name} - Advogado Especialista em Direito Penal em Porto Alegre`}
                    className="w-full h-full object-cover object-top transition-transform duration-600 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="text-center z-10 px-6 relative">
                  <h3 className="font-serif text-2xl font-600 text-white">{pro.name}</h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-400 mt-2">{pro.title}</p>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy-950/70" />
              </div>

              <div className="p-8">
                {/* Experience badge */}
                <div className="inline-flex items-center gap-2 bg-navy-900 text-gold-400 px-4 py-2 mb-6">
                  <Award size={13} />
                  <span className="font-sans text-xs tracking-widest uppercase">{pro.experience}</span>
                </div>

                {/* Credentials */}
                <div className="flex items-start gap-3 mb-4">
                  <BookOpen size={15} className="text-gold-600 mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-xs tracking-widest uppercase text-slate-500 font-600">Titulação e Formação</span>
                </div>
                <ul className="space-y-2">
                  {pro.credentials.map((cred, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm text-slate-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500 mt-2" />
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
