
import React from 'react';

// Icon Components
const WrenchScrewdriverIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.245 15.17l4.773 4.773z" />
  </svg>
);

const DocumentTextIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const ClipboardDocumentCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
  </svg>
);

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 hover:border-blue-100 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
      title: "Responsabilidade Técnica",
      description: "Assumimos a responsabilidade técnica por seus projetos e serviços, garantindo a conformidade com as normas e a segurança operacional.",
    },
    {
      icon: <DocumentTextIcon className="w-8 h-8" />,
      title: "Elaboração de Laudos Técnicos",
      description: "Emitimos laudos técnicos detalhados para máquinas, equipamentos e sistemas mecânicos, atendendo a requisitos legais e de segurança.",
    },
    {
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />,
      title: "Assinatura de ART",
      description: "Realizamos a emissão e assinatura da Anotação de Responsabilidade Técnica (ART), documento indispensável para a regularização de serviços de engenharia.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">O que oferecemos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-6">Nossos Serviços Especializados</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Oferecemos soluções confiáveis e precisas para as necessidades da sua empresa, com foco em qualidade e segurança.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
