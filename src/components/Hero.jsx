import React from 'react';
import { ChevronRight, ShieldCheck, ArrowRight, Activity, Zap } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const stats = [
  { value: '14 min', label: 'Tempo médio evitado de parada não programada por evento' },
  { value: '+45h', label: 'De paradas evitadas na Vale Mina de Cauê (out/24–abr/26)' },
  { value: 'R$ 15M', label: 'Retorno financeiro estimado nas operações monitoradas' },
];

export default function Hero({ onOpenQuote, onNavigate }) {
  return (
    <section id="hero" style={{
      background: '#040D1A',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>

      {/* Background texture overlay - Authentic LLK Plant Photo */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${getAssetUrl('assets/photos/radec_cover_tunnel_plant.jpg')}')`,
        backgroundSize: 'cover', backgroundPosition: 'center 35%',
        opacity: 0.28, filter: 'contrast(120%) brightness(80%)',
      }} />

      {/* Industrial Grid Lines Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px', pointerEvents: 'none',
      }} />

      {/* Radial Gradient Ambient Lighting */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 15% 30%, rgba(21, 87, 212, 0.22) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '5rem 2rem 4.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* LEFT: Main Engineering Copy */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.4rem 0.85rem', background: 'rgba(21, 87, 212, 0.15)',
              border: '1px solid rgba(21, 87, 212, 0.35)', borderRadius: '4px',
              color: 'var(--c-cyan-glow)', fontSize: '0.75rem', fontWeight: 800,
              letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem',
              fontFamily: 'IBM Plex Mono, monospace',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-cyan-glow)' }} />
              RADEC® Visão + RADEC® Vibracional
            </div>

            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(3.5rem, 6vw, 5.75rem)',
              fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'white', marginBottom: '1rem',
            }}>
              RADEC®
            </h1>

            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.125rem)',
              fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3,
              color: 'rgba(255,255,255,0.92)', marginBottom: '1.5rem',
            }}>
              Proteção ativa para correias transportadoras
            </h2>

            <p style={{
              fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '580px',
            }}>
              Monitoramento contínuo para detecção de rasgos, desalinhamentos e eventos críticos, com integração ao sistema de controle da planta.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('familia-radec')}
                className="btn btn-primary btn-lg"
                style={{ fontWeight: 800, borderRadius: '6px', padding: '0.85rem 1.85rem' }}
              >
                Conheça o RADEC®
                <ChevronRight size={20} />
              </button>

              <button
                onClick={() => onNavigate('contato')}
                className="btn btn-secondary btn-lg"
                style={{ borderRadius: '6px', padding: '0.85rem 1.85rem' }}
              >
                Falar com nossa engenharia
              </button>
            </div>
          </div>

          {/* RIGHT: Operational Telemetry Frame */}
          <div>
            <div style={{
              background: 'rgba(6, 19, 41, 0.75)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--r-xl)', padding: '1.5rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            }}>
              <div style={{
                borderRadius: 'var(--r-lg)', overflow: 'hidden',
                position: 'relative', height: '300px', marginBottom: '1.25rem',
                border: '1px solid rgba(255,255,255,0.15)',
              }}>
                <img
                  src={getAssetUrl('assets/photos/Apresentao_p10_170.png')}
                  alt="Painel de Controle SCADA & Telemetria em Tempo Real RADEC"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', top: '0.85rem', left: '0.85rem',
                  background: 'var(--c-blue)', color: 'white',
                  padding: '0.35rem 0.75rem', borderRadius: '4px',
                  fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.08em',
                  fontFamily: 'IBM Plex Mono, monospace', textTransform: 'uppercase',
                }}>
                  VALE CAUÊ — SISTEMA DE CONTROLE CLP
                </div>

                <div style={{
                  position: 'absolute', bottom: '0.85rem', right: '0.85rem',
                  background: 'rgba(6, 19, 41, 0.9)', backdropFilter: 'blur(6px)',
                  color: 'var(--c-cyan-glow)', padding: '0.35rem 0.75rem', borderRadius: '4px',
                  fontSize: '0.6875rem', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800,
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  MODBUS TCP · DESARME &lt;1S ATIVO
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {stats.map((s, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--r-md)', padding: '1rem 0.75rem',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 900,
                      color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1,
                      marginBottom: '0.25rem',
                    }}>
                      {s.value}
                    </div>
                    <div style={{
                      fontSize: '0.6875rem', color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.35, fontWeight: 500,
                    }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

