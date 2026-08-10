import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';

// Section components
import RadecFamilyOverview from './components/RadecFamilyOverview';
import FailureEvolutionSection from './components/FailureEvolutionSection';
import ActiveProtectionSection from './components/ActiveProtectionSection';

import RadecVisao from './components/RadecVisao';

import RadecVibracional from './components/RadecVibracional';
import SelfDiagnosisSection from './components/SelfDiagnosisSection';

import TimelineAndValeCase from './components/TimelineAndValeCase';
import RoiCalculator from './components/RoiCalculator';

import TechSpecs from './components/TechSpecs';

import ContactEvaluationSection from './components/ContactEvaluationSection';

import AboutLlk from './components/AboutLlk';

import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// ─────────────────────────────────────────────
// PAGES — each "page" is a named group of sections
// ─────────────────────────────────────────────
const PAGE_DEFS = {
  home: null, // handled separately (Hero + TrustBar)

  produto: {
    label: 'O Produto',
    sections: ['RadecFamilyOverview', 'FailureEvolutionSection', 'ActiveProtectionSection'],
  },
  'radec-visao': {
    label: 'RADEC® Visão',
    sections: ['RadecVisao'],
  },
  'radec-vibracional': {
    label: 'RADEC® Vibracional',
    sections: ['RadecVibracional', 'SelfDiagnosisSection'],
  },
  resultados: {
    label: 'Resultados',
    sections: ['TimelineAndValeCase', 'RoiCalculator'],
  },
  especificacoes: {
    label: 'Especificações',
    sections: ['TechSpecs'],
  },
  contato: {
    label: 'Contato',
    sections: ['ContactEvaluationSection'],
  },
  'sobre-llk': {
    label: 'Sobre a LLK',
    sections: ['AboutLlk'],
  },
};

// Map section name → component
const SECTION_COMPONENTS = {
  RadecFamilyOverview,
  FailureEvolutionSection,
  ActiveProtectionSection,
  RadecVisao,
  RadecVibracional,
  SelfDiagnosisSection,
  TimelineAndValeCase,
  RoiCalculator,
  TechSpecs,
  ContactEvaluationSection,
  AboutLlk,
};

// ─────────────────────────────────────────────
function PageTransition({ pageKey, children }) {
  return (
    <div key={pageKey} style={{ animation: 'pageEnter 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
      {children}
      <style>{`
        @keyframes pageEnter {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────
export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = () => {
    setQuoteOpen(true);
  };

  const renderPage = () => {
    if (activePage === 'home') {
      return (
        <PageTransition pageKey="home">
          <Hero onOpenQuote={handleOpenQuote} onNavigate={handleNavigate} />
          <TrustBar />
        </PageTransition>
      );
    }

    const pageDef = PAGE_DEFS[activePage];
    if (!pageDef) return null;

    return (
      <PageTransition pageKey={activePage}>
        {pageDef.sections.map((sectionName) => {
          const SectionComponent = SECTION_COMPONENTS[sectionName];
          return SectionComponent ? (
            <SectionComponent
              key={sectionName}
              onOpenQuote={handleOpenQuote}
              onNavigate={handleNavigate}
            />
          ) : null;
        })}
      </PageTransition>
    );
  };

  return (
    <div style={{ background: 'var(--c-white)', color: 'var(--c-gray-06)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      <Footer onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
      <ContactModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}
