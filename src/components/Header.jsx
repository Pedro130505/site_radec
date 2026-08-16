import React, { useState, useEffect, useRef } from 'react';
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

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

const ITEM_URLS = {
  home: `${BASE}/`,
  'familia-radec': `${BASE}/produto`,
  produto: `${BASE}/produto`,
  'radec-visao': `${BASE}/radec-visao`,
  'radec-vibracional': `${BASE}/radec-vibracional`,
  'case-vale': `${BASE}/resultados`,
  resultados: `${BASE}/resultados`,
  'roi-calculator': `${BASE}/resultados`,
  especificacoes: `${BASE}/especificacoes`,
  'sobre-llk': `${BASE}/sobre-llk`,
  contato: `${BASE}/contato`,
  privacidade: `${BASE}/privacidade`,
  termos: `${BASE}/termos`,
};

// ─────────────────────────────────────────────
function Dropdown({ group, activePage, onNavigate, isDark, onClose }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--c-white)',
        border: '1px solid var(--c-gray-01)',
        borderRadius: 'var(--r-xl)',
        boxShadow: '0 16px 40px rgba(10,31,68,0.14), 0 4px 12px rgba(10,31,68,0.06)',
        minWidth: '300px',
        padding: '0.625rem',
        zIndex: 300,
        animation: 'ddEnter 0.18s ease both',
      }}
      onClick={e => e.stopPropagation()}
    >
      {group.items.map((item) => {
        const isActive = activePage === item.id;
        const targetUrl = ITEM_URLS[item.id] || '/';
        return (
          <a
            key={item.id}
            href={targetUrl}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(item.id);
              }
              onClose();
            }}
            style={{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '0.75rem 1rem',
              background: isActive ? 'rgba(21,87,212,0.06)' : 'transparent',
              border: 'none',
              borderLeft: isActive ? '2px solid var(--c-blue)' : '2px solid transparent',
              borderRadius: 'var(--r-md)',
              cursor: 'pointer',
              marginBottom: '2px',
              transition: 'all 0.12s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.background = 'var(--c-gray-00)';
                e.currentTarget.style.borderLeftColor = 'var(--c-gray-02)';
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = isActive ? 'rgba(21,87,212,0.06)' : 'transparent';
              e.currentTarget.style.borderLeftColor = isActive ? 'var(--c-blue)' : 'transparent';
            }}
          >
            <div style={{
              fontSize: '0.9rem', fontWeight: isActive ? 700 : 600,
              color: isActive ? 'var(--c-blue)' : 'var(--c-navy)',
              marginBottom: '0.2rem',
            }}>
              {item.name}
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--c-gray-03)', fontWeight: 400, lineHeight: 1.4 }}>
              {item.desc}
            </div>
          </a>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
export default function Header({ activePage, onNavigate, onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const [currentPath, setCurrentPath] = useState('');
  const navRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const pageKey = activePage || (() => {
    if (!currentPath || currentPath === '/' || currentPath === '') return 'home';
    const clean = currentPath.replace(/\/$/, '').split('/').pop();
    return clean || 'home';
  })();

  const isHome = pageKey === 'home';
  const darkMode = isHome && !scrolled;
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const onOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenGroup(null);
      }
    };
    window.addEventListener('mousedown', onOutside);
    return () => window.removeEventListener('mousedown', onOutside);
  }, []);

  const handleNavClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else if (typeof window !== 'undefined') {
      window.location.href = ITEM_URLS[id] || '/';
    }
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
            src={getAssetUrl('assets/brand/llk_logo_b_blue.svg')}
            alt="LLK Soluções Industriais | Innovation Starts Here"
            style={{ height: '36px', width: 'auto' }}
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

