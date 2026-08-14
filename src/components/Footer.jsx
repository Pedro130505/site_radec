import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const navCols = [
  {
    title: 'Produto',
    items: [
      { id: 'produto',           label: 'Visão Geral RADEC®' },
      { id: 'radec-visao',       label: 'RADEC® Visão' },
      { id: 'radec-vibracional', label: 'RADEC® Vibracional' },
    ],
  },
  {
    title: 'Resultados & Empresa',
    items: [
      { id: 'resultados',        label: 'Case Vale & ROI' },
      { id: 'especificacoes',    label: 'Especificações Técnicas' },
      { id: 'sobre-llk',        label: 'Sobre a LLK' },
      { id: 'contato',          label: 'Fale com a Engenharia' },
    ],
  },
];

const solutions = ['SHM® — Integridade Estrutural', 'Teor Online — Fe/SiO₂', 'V-Scan® — Balança Óptica', 'V-Count® — Corpos Moedores'];

const ITEM_URLS = {
  home: '/',
  produto: '/produto',
  'radec-visao': '/radec-visao',
  'radec-vibracional': '/radec-vibracional',
  resultados: '/resultados',
  especificacoes: '/especificacoes',
  'sobre-llk': '/sobre-llk',
  'contato': '/contato',
};

export default function Footer({ onNavigate }) {
  const linkStyle = {
    fontSize: '0.875rem',
    color: 'rgba(255,255,255,0.45)',
    background: 'none', border: 'none',
    cursor: 'pointer', padding: 0,
    textAlign: 'left', display: 'block',
    transition: 'color 0.15s',
    fontFamily: 'inherit',
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
      background: 'var(--c-navy)',
      color: 'rgba(255,255,255,0.55)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="container" style={{ padding: '4rem 1.5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <a href="/" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('home'); } }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: '1.25rem', display: 'block' }}>
              <img src={getAssetUrl('assets/Logotipos/white/LLK-LOGO-A-WHITE.svg')} alt="LLK Soluções" style={{ height: '34px', opacity: 0.85 }} />
            </a>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '300px', marginBottom: '1.5rem' }}>
              LLK Soluções Industriais — Especialistas em eficiência operacional, visão computacional e proteção de ativos para as Indústrias de Base.
            </p>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', fontFamily: 'IBM Plex Mono, monospace' }}>
              Innovation Starts Here
            </span>
          </div>

          {/* Nav cols */}
          {navCols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: '1.25rem' }}>
                {col.title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {col.items.map(item => (
                  <a
                    key={item.id}
                    href={ITEM_URLS[item.id] || '/'}
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate(item.id);
                      }
                    }}
                    style={linkStyle}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)', marginBottom: '1.25rem' }}>
              Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { Icon: MapPin, text: 'Belo Horizonte / MG — BHTec' },
                { Icon: Phone, text: '(31) 3333-3333', href: 'tel:+553133333333' },
                { Icon: Mail, text: 'contato@llk.com.br', href: 'mailto:contato@llk.com.br' },
                { Icon: Globe, text: 'www.llk.com.br' },
              ].map(({ Icon, text, href }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem' }}>
                  <Icon size={13} color="rgba(255,255,255,0.3)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  {href
                    ? <a href={href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>{text}</a>
                    : <span style={{ fontSize: '0.875rem' }}>{text}</span>
                  }
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} LLK Soluções Industriais Ltda. Todos os direitos reservados. RADEC® é marca registrada.
          </span>
          <button
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-md)', padding: '0.5rem 0.875rem',
              fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.375rem',
            }}
          >
            <ArrowUp size={13} />
            Voltar ao início
          </button>
        </div>
      </div>
    </footer>
  );
}
