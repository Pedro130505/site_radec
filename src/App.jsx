import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import RadecFamilyOverview from './components/RadecFamilyOverview';
import ActiveProtectionSection from './components/ActiveProtectionSection';
import RadecVisao from './components/RadecVisao';
import RadecVibracional from './components/RadecVibracional';
import FailureEvolutionSection from './components/FailureEvolutionSection';
import TimelineAndValeCase from './components/TimelineAndValeCase';
import RoiCalculator from './components/RoiCalculator';
import TechSpecs from './components/TechSpecs';
import AboutLlk from './components/AboutLlk';
import ContactEvaluationSection from './components/ContactEvaluationSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleOpenQuote = () => {
    setQuoteOpen(true);
  };

  const handleNavigate = (sectionId) => {
    if (sectionId === 'home' || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0356c5] selection:text-white">
      
      {/* PDF Sticky Header: Single dark blue bar with logo, RADEC, PT/EN, clickable phone, no big CTA */}
      <Header
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      <main className="flex-grow">
        {/* PDF Hero: Light technical grid background, content left, single equipment photo right with compact Case Vale strip */}
        <Hero onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />

        {/* PDF TrustBar: Static compact logo grid between Hero and Soluções */}
        <TrustBar />

        {/* Pergunta 1 & 3: O que o RADEC® entrega? / Como atuam de forma complementar? */}
        <RadecFamilyOverview onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />

        {/* Pergunta 2: Como funciona a proteção ativa? */}
        <ActiveProtectionSection />

        {/* Pergunta 4: O que cada tecnologia monitora? — RADEC® Visão */}
        <RadecVisao onOpenQuote={handleOpenQuote} />

        {/* Pergunta 4: O que cada tecnologia monitora? — RADEC® Vibracional */}
        <RadecVibracional onOpenQuote={handleOpenQuote} />

        {/* Pergunta 5: Como as soluções se comparam? */}
        <FailureEvolutionSection />

        {/* Pergunta 6: Quais resultados foram obtidos no Case VALE? */}
        <TimelineAndValeCase onOpenQuote={handleOpenQuote} />

        {/* Pergunta 7: Qual pode ser o impacto financeiro para a operação? */}
        <RoiCalculator onOpenQuote={handleOpenQuote} />

        {/* Pergunta 8: Quais são as especificações técnicas? */}
        <TechSpecs onOpenQuote={handleOpenQuote} />

        {/* Institucional: Sobre a LLK, patentes e premiações */}
        <AboutLlk onOpenQuote={handleOpenQuote} />

        {/* Pergunta 9: Como entrar em contato? */}
        <ContactEvaluationSection />
      </main>

      {/* Footer & Floating Controls */}
      <Footer onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
      <ContactModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}
