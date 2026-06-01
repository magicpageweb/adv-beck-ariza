import { Phone, MessageCircle, Shield } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Escritório', href: '#escritorio' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Profissionais', href: '#profissionais' },
  { label: 'Contato', href: '#contato' },
];

const practiceLinks = [
  'Criminalidade Econômica',
  'Direito Penal Negocial',
  'Direito Sancionador',
  'Compliance',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Branding */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/LogoADV-branco.webp" 
                alt="Francis Beck & Rafael Ariza Advocacia" 
                className="h-16 w-auto"
              />
            </div>
            <p className="font-sans text-sm leading-relaxed text-slate-400 mb-6">
              Escritório de referência em Direito Penal e Processual Penal. Atuação especializada, personalizada e pautada na mais absoluta confidencialidade.
            </p>
            <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase">
              <Shield size={12} className="text-gold-500" />
              <span className="text-gold-500">Sigilo Profissional Garantido</span>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-white mb-6 font-600">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-slate-400 hover:text-gold-400 transition-colors duration-300 ease-in-out flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-slate-600 group-hover:bg-gold-500 group-hover:w-5 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Practice Areas */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-white mb-6 font-600">
              Áreas de Atuação
            </h4>
            <ul className="space-y-3">
              {practiceLinks.map(area => (
                <li key={area}>
                  <a
                    href="#areas"
                    className="font-sans text-sm text-slate-400 hover:text-gold-400 transition-colors duration-300 ease-in-out flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-slate-600 group-hover:bg-gold-500 group-hover:w-5 transition-all duration-300" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-white mb-6 font-600">
              Contato Direto
            </h4>
            <div className="space-y-5">
              <a
                href="tel:+555135571750"
                className="flex items-center gap-3 group"
              >
                <Phone size={15} className="text-gold-500 flex-shrink-0" />
                <div>
                  <p className="font-sans text-xs text-slate-500 tracking-wide">Telefone</p>
                  <p className="font-sans text-sm text-slate-300 group-hover:text-gold-400 transition-colors duration-300">
                    (51) 3557.1750
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/555135571750"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <MessageCircle size={15} className="text-gold-500 flex-shrink-0" />
                <div>
                  <p className="font-sans text-xs text-slate-500 tracking-wide">WhatsApp</p>
                  <p className="font-sans text-sm text-slate-300 group-hover:text-gold-400 transition-colors duration-300">
                    Atendimento reservado
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="font-sans text-xs text-slate-500 leading-relaxed">
                Rua Regente, 245 — Sala 1004, Petrópolis<br />
                Porto Alegre/RS<br />
                Atendimento mediante agendamento
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-5 text-xs font-sans">
              <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors duration-300 tracking-wide">
                Política de Privacidade
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors duration-300 tracking-wide">
                Termos de Uso
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="text-slate-500 hover:text-gold-400 transition-colors duration-300 tracking-wide">
                Ética Profissional
              </a>
            </div>
            <div className="font-sans text-xs text-slate-600 text-center space-y-1">
              <p>&copy; {year} Francis Beck &amp; Rafael Ariza Advocacia. Todos os direitos reservados.</p>
              <p>Desenvolvido por <span className="text-gold-500">MagicPage Websites</span></p>
            </div>
          </div>

          {/* Confidentiality notice */}
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="font-sans text-xs text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-500">Aviso de Confidencialidade:</strong>{' '}
              Comunicação de natureza confidencial. Sigilo profissional garantido nos termos do Código de Ética e Disciplina da OAB.
              Este site tem caráter meramente informativo e não configura captação de clientela.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
