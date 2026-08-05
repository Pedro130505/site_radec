import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RadecVisao from './components/RadecVisao';
import RadecVibracional from './components/RadecVibracional';
import ComparisonMatrix from './components/ComparisonMatrix';
import RoiCalculator from './components/RoiCalculator';
import Architecture40 from './components/Architecture40';
import CaseStudies from './components/CaseStudies';
import AboutLlk from './components/AboutLlk';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleOpenQuote = () => setQuoteOpen(true);
  const handleCloseQuote = () => setQuoteOpen(false);

  return (
    <div className="min-h-screen bg-[#040d1a] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Fixed Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenQuote={handleOpenQuote} />
        <RadecVisao onOpenQuote={handleOpenQuote} />
        <RadecVibracional onOpenQuote={handleOpenQuote} />
        <ComparisonMatrix onOpenQuote={handleOpenQuote} />
        <RoiCalculator onOpenQuote={handleOpenQuote} />
        <Architecture40 />
        <CaseStudies onOpenQuote={handleOpenQuote} />
        <AboutLlk onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Proposal Request Modal */}
      <ContactModal isOpen={quoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
