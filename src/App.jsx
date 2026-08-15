import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';

// Section components
import RadecFamilyOverview from './components/RadecFamilyOverview';
import RadecVisao from './components/RadecVisao';
import RadecVibracional from './components/RadecVibracional';
import SelfDiagnosisSection from './components/SelfDiagnosisSection';
import FailureEvolutionSection from './components/FailureEvolutionSection';
import ActiveProtectionSection from './components/ActiveProtectionSection';

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
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (sectionId === 'home' || sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ background: 'var(--c-white)', color: 'var(--c-gray-06)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header with direct section navigation */}
      <Header
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      <main style={{ flex: 1 }}>
        {/* Hero Banner */}
        <Hero onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />

        {/* Client Logos / Trust Bar */}
        <TrustBar />

        {/* Radec Family Overview */}
        <RadecFamilyOverview onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />

        {/* RADEC Visão */}
        <RadecVisao onOpenQuote={handleOpenQuote} />

        {/* RADEC Vibracional */}
        <RadecVibracional onOpenQuote={handleOpenQuote} />

        {/* Auto Diagnóstico */}
        <SelfDiagnosisSection />

        {/* Evolução de Falhas */}
        <FailureEvolutionSection />

        {/* Proteção Ativa */}
        <ActiveProtectionSection />

        {/* Validation Timeline & Case Vale (Contains 8-step Vale grid + 7-step field event infographic) */}
        <TimelineAndValeCase onOpenQuote={handleOpenQuote} />

        {/* Calculadora ROI */}
        <RoiCalculator onOpenQuote={handleOpenQuote} />

        {/* Especificações Técnicas */}
        <TechSpecs />

        {/* Sobre a LLK (Contains Patentes, Soluções, Parcerias & Premiações) */}
        <AboutLlk onOpenQuote={handleOpenQuote} />

        {/* Avaliação Técnica / Contato */}
        <ContactEvaluationSection />
      </main>

      {/* Footer & Floating Widgets */}
      <Footer onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
      <ContactModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}

