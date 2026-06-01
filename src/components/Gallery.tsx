import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: '/beck-ariza-advogados Galeria (1).webp',
    alt: 'Biblioteca jurídica do escritório Francis Beck & Rafael Ariza Advocacia em Porto Alegre',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (2).webp',
    alt: 'Instalações do escritório de advocacia em Porto Alegre',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (3).webp',
    alt: 'Mesa de reunião para atendimento jurídico em POA',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (4).webp',
    alt: 'Documentos jurídicos e processos - advocacia criminal',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (5).webp',
    alt: 'Arquitetura clássica do escritório em Porto Alegre',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (6).webp',
    alt: 'Atendimento jurídico especializado em Porto Alegre',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (7).webp',
    alt: 'Escritório de advocacia criminal em Porto Alegre',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (8).webp',
    alt: 'Recepção do escritório Francis Beck & Rafael Ariza',
    span: '',
  },
  {
    url: '/beck-ariza-advogados Galeria (9).webp',
    alt: 'Detalhes do escritório de advocacia em Porto Alegre',
    span: '',
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') setSelectedIndex(prev => prev === 0 ? images.length - 1 : (prev as number) - 1);
      if (e.key === 'ArrowRight') setSelectedIndex(prev => prev === images.length - 1 ? 0 : (prev as number) + 1);
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label block mb-4">Ambiente</span>
          <h2 className="section-title mb-4">O Espaço</h2>
          <p className="font-sans text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Um ambiente reservado e sofisticado, concebido para garantir a privacidade e o conforto de cada atendimento
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-all duration-400 ease-in-out" />
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-3" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 m-3" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors duration-300 z-[101] p-2 bg-navy-900/50 rounded-full md:bg-transparent md:p-0"
            onClick={() => setSelectedIndex(null)}
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          
          {/* Navigation Prev */}
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-all duration-300 z-[101] p-3 bg-navy-900/50 hover:bg-navy-900 rounded-full"
            onClick={handlePrev}
            aria-label="Imagem Anterior"
          >
            <ChevronLeft size={36} />
          </button>

          {/* Navigation Next */}
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-all duration-300 z-[101] p-3 bg-navy-900/50 hover:bg-navy-900 rounded-full"
            onClick={handleNext}
            aria-label="Próxima Imagem"
          >
            <ChevronRight size={36} />
          </button>

          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center px-12 md:px-0"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[selectedIndex].url} 
              alt={images[selectedIndex].alt || "Imagem expandida"} 
              className="max-w-full max-h-full object-contain shadow-2xl border border-white/10 transition-opacity duration-300"
            />
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-sans text-sm tracking-widest bg-navy-900/50 px-4 py-1.5 rounded-full">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
