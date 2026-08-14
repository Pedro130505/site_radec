import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactModal from './ContactModal';
import WhatsAppButton from './WhatsAppButton';

export default function AppShell({ activePage, children }) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleOpenQuote = () => {
    setQuoteOpen(true);
  };

  return (
    <div style={{ background: 'var(--c-white)', color: 'var(--c-gray-06)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        activePage={activePage}
        onOpenQuote={handleOpenQuote}
      />

      <main style={{ flex: 1 }}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { onOpenQuote: handleOpenQuote });
          }
          return child;
        })}
      </main>

      <Footer onOpenQuote={handleOpenQuote} />
      <ContactModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}
