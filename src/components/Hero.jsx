import React from 'react';
import { ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const stats = [
  { value: '14 min', label: 'Tempo médio evitado de parada não programada por evento' },
  { value: '+45h', label: 'De paradas evitadas — Vale Mina de Cauê (out/24–abr/26)' },
  { value: 'R$ 15M', label: 'Retorno financeiro estimado nas operações monitoradas' },
];

export default function Hero({ onOpenQuote, onNavigate }) {
  return (
    <section style={{
      background: 'var(--c-navy)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>

      {/* Background texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${getAssetUrl('assets/photos/hero_plant_bg.jpg')}')`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.08,
      }} />

      {/* Gradient left-to-right */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, var(--c-navy) 40%, rgba(10,31,68,0.6) 75%, transparent 100%)',
      }} />

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(to right, var(--c-blue) 0%, rgba(21,87,212,0.3) 50%, transparent 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '7rem 1.5rem 6rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '5rem',
          alignItems: 'center',
        }}
          className="hero-grid"
        >

          {/* LEFT: Main copy */}
          <div>
            {/* Tag line */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              marginBottom: '2rem',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '100px',
            }}>
              <ShieldCheck size={13} color="rgba(255,255,255,0.5)" />
              <span style={{
                fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
              }}>
                Sistema de Proteção para Correias Transportadoras
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'white', marginBottom: '1.5rem',
            }}>
              RADEC®
            </h1>
            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.35,
              color: 'rgba(255,255,255,0.75)', marginBottom: '2rem',
            }}>
              Proteção inteligente contra rasgos,<br />
              desalinhamentos e eventos críticos
            </h2>

            <p style={{
              fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '480px',
            }}>
              Visão computacional e sensoriamento de choque mecânico integrados ao sistema de controle da planta para proteção ativa de correias transportadoras.
            </p>

            {/* CTA Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('familia-radec')}
                className="btn btn-primary btn-lg"
              >
                Conheça o RADEC®
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => onNavigate('avaliacao-correia')}
                className="btn btn-secondary btn-lg"
              >
                Falar com Engenharia
              </button>
            </div>
          </div>

          {/* RIGHT: Proof card */}
          <div>
            {/* Main proof card */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 'var(--r-xl)',
              overflow: 'hidden',
              marginBottom: '1rem',
            }}>
              <div style={{
                background: 'rgba(0,0,0,0.25)', aspectRatio: '16/9',
                position: 'relative', overflow: 'hidden',
              }}>
                <img
                  src={getAssetUrl('assets/photos/radec_visao_field.jpg')}
                  alt="RADEC instalado em operação"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                />
                {/* Overlay tag */}
                <div style={{
                  position: 'absolute', top: '0.875rem', left: '0.875rem',
                  background: 'var(--c-navy)', borderRadius: '4px',
                  padding: '0.375rem 0.75rem',
                  fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                }}>
                  Operação em Campo
                </div>
              </div>
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                  marginBottom: '0.4rem',
                }}>
                  Validado com a Vale · Mina de Cauê, Itabira/MG
                </div>
                <div style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '0.9375rem', fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)', lineHeight: 1.45,
                }}>
                  Do laboratório ao intertravamento em operação real
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 'var(--r-lg)', padding: '1rem 0.875rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 800,
                    color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1,
                    marginBottom: '0.375rem',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.6875rem', color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1.5, fontWeight: 400,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        animation: 'bounce 2s infinite',
      }}>
        <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Explore o menu acima
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
