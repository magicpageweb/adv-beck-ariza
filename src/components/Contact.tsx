import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Lock, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label block mb-4">Entre em Contato</span>
          <h2 className="section-title mb-4">Atendimento Direto e Reservado</h2>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            O escritório está à disposição para consultas confidenciais. Atendimentos mediante agendamento prévio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="text-center py-16 px-8 bg-slate-50 border border-gold-200">
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-navy-900 text-gold-400 mb-6">
                  <Send size={24} />
                </div>
                <h3 className="font-serif text-2xl font-600 text-navy-900 mb-3">Mensagem Recebida</h3>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  Sua mensagem foi enviada com sucesso. Entraremos em contato em até 24 horas úteis, de forma totalmente confidencial.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 text-navy-900 font-sans text-sm focus:outline-none focus:border-gold-600 transition-colors duration-300 peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 text-slate-400 font-sans text-sm transition-all duration-300 pointer-events-none peer-focus:top-[-18px] peer-focus:text-xs peer-focus:text-gold-600 peer-[:not(:placeholder-shown)]:top-[-18px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold-600"
                  >
                    Nome Completo
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                    className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 text-navy-900 font-sans text-sm focus:outline-none focus:border-gold-600 transition-colors duration-300 peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 text-slate-400 font-sans text-sm transition-all duration-300 pointer-events-none peer-focus:top-[-18px] peer-focus:text-xs peer-focus:text-gold-600 peer-[:not(:placeholder-shown)]:top-[-18px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold-600"
                  >
                    E-mail
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder=" "
                    className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 text-navy-900 font-sans text-sm focus:outline-none focus:border-gold-600 transition-colors duration-300 peer"
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-3 text-slate-400 font-sans text-sm transition-all duration-300 pointer-events-none peer-focus:top-[-18px] peer-focus:text-xs peer-focus:text-gold-600 peer-[:not(:placeholder-shown)]:top-[-18px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold-600"
                  >
                    Telefone / WhatsApp
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder=" "
                    rows={4}
                    required
                    className="w-full bg-transparent border-0 border-b border-slate-200 py-3 px-0 text-navy-900 font-sans text-sm focus:outline-none focus:border-gold-600 transition-colors duration-300 resize-none peer"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-slate-400 font-sans text-sm transition-all duration-300 pointer-events-none peer-focus:top-[-18px] peer-focus:text-xs peer-focus:text-gold-600 peer-[:not(:placeholder-shown)]:top-[-18px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-gold-600"
                  >
                    Mensagem
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-navy-900 text-white font-sans text-sm tracking-widest uppercase py-4 px-8 transition-all duration-300 ease-in-out hover:bg-gold-600 hover:shadow-lg hover:shadow-gold-600/25"
                >
                  <Send size={15} />
                  Enviar Mensagem
                </button>

                <p className="text-center font-sans text-xs text-slate-400 tracking-wide">
                  Todas as comunicações são protegidas pelo sigilo profissional
                </p>
              </form>
            )}
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="flex items-start gap-5 p-6 border border-slate-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-900 text-gold-400 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                <Phone size={18} />
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-slate-400 mb-1">Telefone Confidencial</p>
                <p className="font-serif text-lg font-600 text-navy-900">(51) 3557.1750</p>
                <p className="font-sans text-xs text-slate-500 mt-1">Atendimento direto e reservado</p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 border border-slate-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-900 text-gold-400 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                <MessageCircle size={18} />
              </div>
              <div className="flex-1">
                <p className="font-sans text-xs tracking-widest uppercase text-slate-400 mb-1">WhatsApp Reservado</p>
                <p className="font-serif text-lg font-600 text-navy-900 mb-3">Comunicação segura e confidencial</p>
                <a
                  href="https://wa.me/555135571750"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-navy-900 text-white font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-gold-600"
                >
                  <MessageCircle size={13} />
                  Iniciar Conversa
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 border border-slate-100 hover:border-gold-200 hover:shadow-md transition-all duration-300 ease-in-out group">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-navy-900 text-gold-400 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-sans text-xs tracking-widest uppercase text-slate-400 mb-1">Endereço</p>
                <p className="font-serif text-lg font-600 text-navy-900">Rua Regente, 245</p>
                <p className="font-sans text-sm text-slate-500 mt-1">Sala 1004, Petrópolis · Porto Alegre/RS</p>
              </div>
            </div>

            {/* Confidentiality Box */}
            <div className="p-6 bg-gold-50 border border-gold-200 relative overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 w-1 bg-gold-500" />
              <div className="flex items-start gap-4">
                <Lock size={18} className="text-gold-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-gold-700 font-600 mb-2">
                    Política de Confidencialidade
                  </p>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">
                    Todas as comunicações são confidenciais e protegidas pelo sigilo profissional nos termos do Código de Ética e Disciplina da OAB. Nenhuma informação compartilhada será divulgada a terceiros sob qualquer circunstância.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
