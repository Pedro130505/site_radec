import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

// ─────────────────────────────────────────────
// Navigation groups matching the page groupings in App.jsx
// ─────────────────────────────────────────────
const navGroups = [
  {
    label: 'Produto',
    items: [
      { id: 'produto',           name: 'Visão geral', desc: 'Família RADEC®, matriz de detecção e proteção ativa' },
      { id: 'radec-visao',       name: 'RADEC® Visão', desc: 'Inspeção óptica e video analytics' },
      { id: 'radec-vibracional', name: 'RADEC® Vibracional', desc: 'Sensoriamento de choque mecânico' },
    ],
  },
  {
    label: 'Resultados',
    items: [
      { id: 'resultados',        name: 'Case & ROI', desc: 'Case Vale Cauê e calculadora de impacto financeiro' },
      { id: 'especificacoes',    name: 'Especificações', desc: 'Ficha técnica oficial — IP, alimentação, comunicação' },
    ],
  },
  {
    label: 'Empresa',
    items: [
      { id: 'sobre-llk',         name: 'Sobre a LLK', desc: '17 anos, 28 patentes, premiações e parcerias' },
      { id: 'contato',           name: 'Fale com a Engenharia', desc: 'Avaliação técnica sem compromisso' },
    ],
  },
];

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

const ITEM_URLS = {
  home: `${BASE}/`,
  produto: `${BASE}/produto`,
  'radec-visao': `${BASE}/radec-visao`,
  'radec-vibracional': `${BASE}/radec-vibracional`,
  resultados: `${BASE}/resultados`,
  especificacoes: `${BASE}/especificacoes`,
  'sobre-llk': `${BASE}/sobre-llk`,
  contato: `${BASE}/contato`,
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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

  const handleNav = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.location.href = ITEM_URLS[id] || '/';
    }
    setMobileOpen(false);
    setOpenGroup(null);
  };

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: darkMode ? 'var(--c-navy)' : 'var(--c-white)',
      borderBottom: `1px solid ${darkMode ? 'rgba(255,255,255,0.06)' : 'var(--c-gray-01)'}`,
      boxShadow: !darkMode ? 'var(--shadow-sm)' : 'none',
      transition: 'background 0.25s ease, box-shadow 0.25s ease',
    }}>

      {/* Utility bar (only on dark/home) */}
      {darkMode && (
        <div style={{ background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '5px 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              LLK Soluções Industriais · Belo Horizonte, MG
            </span>
            <a href="tel:+553133333333" style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '0.375rem', textDecoration: 'none' }}>
              <Phone size={10} />
              Comercial: (31) 3333-3333
            </a>
          </div>
        </div>
      )}

      {/* Main bar */}
      <div className="container" style={{ height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0, flexShrink: 0 }}
        >
          <img
            src={darkMode ? getAssetUrl('assets/Logotipos/white/LLK-LOGO-A-WHITE.svg') : getAssetUrl('assets/Logotipos/blue/LLK-LOGO-A-BLUE.svg')}
            alt="LLK Soluções"
            style={{ height: '32px', width: 'auto' }}
          />
          <div style={{ borderLeft: `1px solid ${darkMode ? 'rgba(255,255,255,0.15)' : 'var(--c-gray-02)'}`, paddingLeft: '0.875rem' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '0.9375rem', letterSpacing: '-0.02em', lineHeight: 1.1, color: darkMode ? 'white' : 'var(--c-navy)' }}>RADEC®</div>
            <div style={{ fontSize: '0.5625rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '1px', color: darkMode ? 'rgba(255,255,255,0.4)' : 'var(--c-blue)' }}>Proteção de Correias</div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav ref={navRef} style={{ display: 'flex', alignItems: 'center', gap: '0' }} className="nav-desktop">
          {navGroups.map((group) => {
            const isGroupActive = group.items.some(i => i.id === activePage);
            const isOpen = openGroup === group.label;

            return (
              <div key={group.label} style={{ position: 'relative' }}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenGroup(isOpen ? null : group.label);
                  }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.3rem',
                    padding: '0.5rem 1rem', height: '62px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontSize: '0.875rem', fontWeight: isGroupActive ? 700 : 500,
                    color: darkMode
                      ? (isGroupActive ? 'white' : 'rgba(255,255,255,0.65)')
                      : (isGroupActive ? 'var(--c-navy)' : 'var(--c-gray-04)'),
                    borderBottom: isGroupActive
                      ? `2px solid ${darkMode ? 'white' : 'var(--c-blue)'}`
                      : '2px solid transparent',
                    transition: 'all 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = darkMode ? 'white' : 'var(--c-navy)'; }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = darkMode
                      ? (isGroupActive ? 'white' : 'rgba(255,255,255,0.65)')
                      : (isGroupActive ? 'var(--c-navy)' : 'var(--c-gray-04)');
                  }}
                >
                  {group.label}
                  <ChevronDown size={13} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.18s' }} />
                </button>

                {isOpen && (
                  <Dropdown
                    group={group}
                    activePage={activePage}
                    onNavigate={handleNav}
                    isDark={darkMode}
                    onClose={() => setOpenGroup(null)}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <button
            onClick={() => handleNav('contato')}
            className="btn btn-sm nav-desktop"
            style={{
              background: darkMode ? 'var(--c-white)' : 'var(--c-blue)',
              color: darkMode ? 'var(--c-navy)' : 'white',
              border: 'none',
              display: 'flex', alignItems: 'center', gap: '0.375rem',
            }}
          >
            Falar com Engenharia
            <ChevronRight size={14} />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-mobile"
            style={{
              background: 'transparent',
              border: `1px solid ${darkMode ? 'rgba(255,255,255,0.2)' : 'var(--c-gray-02)'}`,
              borderRadius: 'var(--r-md)', padding: '0.5rem', cursor: 'pointer',
              color: darkMode ? 'white' : 'var(--c-gray-05)',
              display: 'none',
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'var(--c-white)', borderTop: '1px solid var(--c-gray-01)',
          padding: '1rem 0 1.5rem', maxHeight: '80vh', overflowY: 'auto',
        }}>
          {navGroups.map(group => (
            <div key={group.label} style={{ marginBottom: '1.25rem' }}>
              <div style={{
                padding: '0.25rem 1.5rem 0.5rem',
                fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--c-gray-03)',
              }}>
                {group.label}
              </div>
              {group.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '0.75rem 1.5rem',
                    background: activePage === item.id ? 'rgba(21,87,212,0.05)' : 'none',
                    border: 'none', cursor: 'pointer',
                    borderLeft: activePage === item.id ? '3px solid var(--c-blue)' : '3px solid transparent',
                  }}
                >
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: activePage === item.id ? 'var(--c-blue)' : 'var(--c-gray-05)' }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--c-gray-03)', marginTop: '1px' }}>
                    {item.desc}
                  </div>
                </button>
              ))}
            </div>
          ))}
          <div style={{ padding: '1rem 1.5rem 0', borderTop: '1px solid var(--c-gray-01)' }}>
            <button
              onClick={() => handleNav('contato')}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Falar com Engenharia
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes ddEnter {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
