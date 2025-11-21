
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/mgl engenharia.png"
                alt="MGL Engenharia"
                className="h-16 w-auto rounded-lg bg-white p-1 object-contain"
              />
              <span className="text-xl font-bold text-white">MGL Engenharia</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Soluções técnicas em engenharia mecânica com responsabilidade, segurança e conformidade normativa.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a></li>
              <li><a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>(44) 9 9132-0666</li>
              <li>mglengenharia01@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs">
          <p>&copy; {currentYear} MGL Engenharia Mecânica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
