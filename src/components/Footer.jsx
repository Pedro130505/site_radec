import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const navCols = [
  {
    title: 'Produto',
    items: [
      { id: 'hero',              label: 'Visão Geral RADEC®' },
      { id: 'radec-visao',       label: 'RADEC® Visão' },
      { id: 'radec-vibracional', label: 'RADEC® Vibracional' },
    ],
  },
  {
    title: 'Resultados & Engenharia',
    items: [
      { id: 'resultados',        label: 'Case Vale & ROI' },
      { id: 'especificacoes',    label: 'Especificações Técnicas' },
      { id: 'sobre-llk',        label: 'Sobre a LLK' },
      { id: 'contato',          label: 'Fale com a Engenharia' },
    ],
  },
  {
    title: 'Privacidade & LGPD',
    items: [
      { id: 'privacidade',       label: 'Política de Privacidade' },
      { id: 'termos',            label: 'Termos de Uso' },
      { id: 'cookie-settings',   label: 'Preferências de Cookies' },
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
  'contato': `${BASE}/contato`,
  'privacidade': `${BASE}/privacidade`,
  'termos': `${BASE}/termos`,
};

export default function Footer({ onNavigate }) {
  const linkStyle = {
    fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.5)',
    background: 'none', border: 'none',
    cursor: 'pointer', padding: 0,
    textAlign: 'left', display: 'block',
    transition: 'color 0.15s',
    fontFamily: 'inherit',
    fontWeight: 500,
    textDecoration: 'none',
  };

  const handleNav = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.location.href = ITEM_URLS[id] || '/';
    }
  };

  return (
    <footer style={{
      background: 'var(--c-navy-deep)',
      color: 'rgba(255,255,255,0.6)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container" style={{ padding: '5rem 2rem 3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3.5rem', marginBottom: '4rem' }}>

          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <a href="/" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('home'); } }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: '1.5rem', display: 'block' }}>
              <img src={getAssetUrl('assets/Logotipos/white/LLK-LOGO-A-WHITE.svg')} alt="LLK Soluções" style={{ height: '36px', opacity: 0.9 }} />
            </a>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', marginBottom: '1.75rem', maxWidth: '320px' }}>
              LLK Soluções Industriais — Especialistas em visão computacional, inteligência artificial e proteção de ativos para a Indústria de Base.
            </p>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--c-cyan-glow)', fontFamily: 'IBM Plex Mono, monospace' }}>
              INNOVATION STARTS HERE
            </span>
          </div>

          {/* Navigation Columns */}
          {navCols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginBottom: '1.5rem' }}>
                {col.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.items.map(item => (
                  <a
                    key={item.id}
                    href={ITEM_URLS[item.id] || '#'}
                    onClick={(e) => {
                      if (item.id === 'cookie-settings') {
                        e.preventDefault();
                        if (typeof window !== 'undefined') {
                          window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
                        }
                        return;
                      }
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(item.id);
                      }
                    }}
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--c-cyan-glow)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginBottom: '1.5rem' }}>
              Contato & Sede
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { Icon: MapPin, text: 'Belo Horizonte / MG — BHTec' },
                { Icon: Phone, text: '(31) 3333-3333', href: 'tel:+553133333333' },
                { Icon: Mail, text: 'contato@llk.com.br', href: 'mailto:contato@llk.com.br' },
                { Icon: Globe, text: 'www.llk.com.br' },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Icon size={16} color="var(--c-cyan-glow)" style={{ flexShrink: 0 }} />
                  {href
                    ? <a href={href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontWeight: 500 }}>{text}</a>
                    : <span style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{text}</span>
                  }
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.2)' }}>
        <div className="container" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
            © {new Date().getFullYear()} LLK Soluções Industriais Ltda. Todos os direitos reservados. RADEC® é marca registrada.
          </span>
          <button
            onClick={() => { onNavigate('hero'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 'var(--r-md)', padding: '0.625rem 1rem',
              fontSize: '0.8125rem', fontWeight: 700, color: 'white',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
            }}
          >
            <ArrowUp size={15} />
            Voltar ao topo
          </button>
        </div>
      </div>
    </footer>
  );
}
