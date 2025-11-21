import React from 'react';

const About: React.FC = () => {
  // Componente para a foto do engenheiro com fallback para SVG
  const EngineerPhoto: React.FC = () => {
    const [imageError, setImageError] = React.useState(false);

    // SVG de fallback caso a imagem não carregue
    const FallbackAvatar = () => (
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
        <svg
          className="w-48 h-48 md:w-52 md:h-52 rounded-full shadow-2xl border-4 border-white relative z-10 bg-white"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#avatarGradient)" />
          <circle cx="100" cy="85" r="35" fill="#fbbf24" opacity="0.9" />
          <circle cx="90" cy="80" r="3" fill="#1f2937" />
          <circle cx="110" cy="80" r="3" fill="#1f2937" />
          <path d="M95 95 Q100 100 105 95" stroke="#1f2937" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    );

    if (imageError) {
      return <FallbackAvatar />;
    }

    return (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        <img
          src="/images/engenheiro.jpg"
          alt="Foto do Engenheiro Responsável - Matheus Henrique Garcia Lima"
          className="w-48 h-48 md:w-52 md:h-52 rounded-full object-cover shadow-2xl border-4 border-white relative z-10 bg-slate-200 transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      </div>
    );
  };

  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-16 max-w-5xl mx-auto mt-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <EngineerPhoto />
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                Engenheiro Responsável
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                Matheus Henrique Garcia Lima
              </h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 font-bold text-xl mb-6">
                CREA-PR 98765/D
              </p>

              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Engenheiro Mecânico com vasta experiência em projetos industriais e comerciais. Minha paixão é transformar desafios complexos em soluções seguras e eficientes, sempre focado em superar as expectativas dos clientes e garantir a total conformidade com as normas técnicas.
                </p>
                <p>
                  Estou comprometido em ser um parceiro confiável para o seu negócio, oferecendo expertise em laudos técnicos, responsabilidade técnica (ART) e consultoria para otimizar seus processos e garantir a segurança operacional.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap justify-center md:justify-start gap-6">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-slate-900">5+</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Anos de Exp.</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-slate-900">100+</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Projetos</span>
                </div>
                <div className="text-center">
                  <span className="block text-3xl font-bold text-slate-900">100%</span>
                  <span className="text-sm text-slate-500 uppercase tracking-wider">Satisfação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;