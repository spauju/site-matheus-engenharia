import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  // Replace with your actual WhatsApp number and a pre-filled message
  const whatsappNumber = "5544991320666";
  const whatsappMessage = "olá,vim do site gostaria de tirar algumas dúvidas, referente aos serviços prestados.";

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber={whatsappNumber} message={whatsappMessage} />
    </div>
  );
};

export default App;