import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={handleLinkClick} className="flex items-center gap-3 relative z-10 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
              <img
                src="/images/mgl engenharia.png"
                alt="MGL Engenharia - Logo"
                className="h-20 w-auto object-contain relative z-10"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {['Serviços', 'Sobre'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o')}`}
                onClick={handleLinkClick}
                className="text-slate-700 font-medium hover:text-blue-600 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contato"
              onClick={handleLinkClick}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold py-2.5 px-6 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Entrar em Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-xl transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
      >
        <nav className="flex flex-col items-center gap-6 py-8 px-6">
          {['Serviços', 'Sobre'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o')}`}
              onClick={handleLinkClick}
              className="text-slate-700 font-medium text-lg hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            onClick={handleLinkClick}
            className="w-full text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-blue-500/30"
          >
            Entrar em Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;