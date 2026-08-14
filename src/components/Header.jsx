import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const navItems = [
  { id: 'familia-radec',    label: 'O Produto' },
  { id: 'radec-visao',      label: 'RADEC® Visão' },
  { id: 'radec-vibracional',label: 'RADEC® Vibracional' },
  { id: 'case-vale',        label: 'Case Vale' },
  { id: 'roi-calculator',   label: 'Calculadora ROI' },
  { id: 'especificacoes',   label: 'Especificações' },
  { id: 'sobre-llk',        label: 'Sobre a LLK' },
];

export default function Header({ onNavigate, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Track active section on scroll
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveId(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    onNavigate(id);
    setActiveId(id);
    setMobileOpen(false);
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'var(--c-white)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid var(--c-gray-01)',
      boxShadow: scrolled ? '0 4px 20px rgba(10,31,68,0.08)' : 'none',
      transition: 'all 0.25s ease',
    }}>

      {/* Top Utility Bar */}
      <div style={{ background: 'var(--c-navy)', color: 'white', padding: '4px 0', fontSize: '0.6875rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.05em' }}>
            LLK Soluções Industriais · Tecnologia em Proteção de Ativos
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="tel:+553133333333" style={{ color: 'rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}>
              <Phone size={11} color="var(--c-blue)" />
              Comercial: (31) 3333-3333
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>

        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
        >
          <img
            src={getAssetUrl('assets/Logotipos/blue/LLK-LOGO-A-BLUE.svg')}
            alt="LLK Soluções"
            style={{ height: '32px', width: 'auto' }}
          />
          <div style={{ borderLeft: '1px solid var(--c-gray-02)', paddingLeft: '0.875rem', textAlign: 'left' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.9375rem', letterSpacing: '-0.02em', lineHeight: 1.1, color: 'var(--c-navy)' }}>
              RADEC®
            </div>
            <div style={{ fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--c-blue)', marginTop: '1px' }}>
              Proteção de Correias
            </div>
          </div>
        </button>

        {/* Desktop Direct Nav Menu */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="nav-desktop">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  padding: '0.5rem 0.75rem',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: 'var(--r-md)',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--c-blue)' : 'var(--c-navy)',
                  position: 'relative',
                  transition: 'all 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--c-blue)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--c-navy)'; }}
              >
                {item.label}
                {isActive && (
                  <span style={{
                    position: 'absolute', bottom: '-4px', left: '0.75rem', right: '0.75rem', height: '2px',
                    background: 'var(--c-blue)', borderRadius: '2px',
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={() => handleNavClick('contato')}
            className="btn btn-primary btn-sm nav-desktop"
            style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}
          >
            Falar com Engenharia
            <ChevronRight size={14} />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile"
            style={{
              background: 'transparent',
              border: '1px solid var(--c-gray-02)',
              borderRadius: 'var(--r-md)', padding: '0.5rem', cursor: 'pointer',
              color: 'var(--c-navy)',
              display: 'none',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div style={{
          background: 'var(--c-white)', borderTop: '1px solid var(--c-gray-01)',
          padding: '1rem 1.5rem 1.5rem', maxHeight: '80vh', overflowY: 'auto',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  textAlign: 'left',
                  padding: '0.75rem 1rem',
                  background: activeId === item.id ? 'rgba(21,87,212,0.06)' : 'transparent',
                  border: 'none',
                  borderRadius: 'var(--r-md)',
                  cursor: 'pointer',
                  fontSize: '0.9375rem',
                  fontWeight: activeId === item.id ? 700 : 500,
                  color: activeId === item.id ? 'var(--c-blue)' : 'var(--c-navy)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                {item.label}
                <ChevronRight size={14} opacity={0.5} />
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('contato')}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Falar com Engenharia
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

