
import React from 'react';

const Hero: React.FC = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0B1120]"></div>
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse delay-2000"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
          <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">Soluções em Engenharia</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2">
          Engenharia Mecânica
        </h1>

        <p className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 leading-tight mb-8 drop-shadow-lg">
          Responsável
        </p>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Compromisso, expertise e segurança técnica para elevar o padrão dos seus projetos industriais.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="#servicos"
            onClick={handleLinkClick}
            className="group relative px-8 py-4 bg-blue-600 rounded-xl font-bold text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center justify-center gap-2">
              Nossos Serviços
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>

          <a
            href="#contato"
            onClick={handleLinkClick}
            className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;