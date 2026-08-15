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
      background: 'linear-gradient(135deg, var(--c-navy-deep) 0%, #0A192F 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>

      {/* Background texture overlay - Exact Photo Requested by User */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url('${getAssetUrl('assets/photos/radec_cover_tunnel_plant.jpg')}')`,
        backgroundSize: 'cover', backgroundPosition: 'center 35%',
        opacity: 0.22, filter: 'contrast(115%) brightness(90%)',
      }} />

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 20% 40%, rgba(37, 99, 235, 0.15) 0%, transparent 60%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '6rem 2rem 5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>

          {/* LEFT: Main Copy */}
          <div>
            <div className="eyebrow eyebrow-dark">
              <ShieldCheck size={15} />
              Sistema Integrado de Proteção de Correias Transportadoras
            </div>

            <h1 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(3.25rem, 5.5vw, 5.25rem)',
              fontWeight: 900, letterSpacing: '-0.035em', lineHeight: 0.98,
              color: 'white', marginBottom: '1.25rem',
            }}>
              RADEC®
            </h1>

            <h2 style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
              fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.35,
              color: 'rgba(255,255,255,0.85)', marginBottom: '1.75rem',
            }}>
              Proteção inteligente contra rasgos,<br />
              desalinhamentos e choques estruturais
            </h2>

            <p style={{
              fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '580px',
            }}>
              Visão computacional de alta definição e sensoriamento de choque mecânico integrados diretamente ao sistema de controle (CLP) da planta para intertravamento ativo.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => onNavigate('familia-radec')}
                className="btn btn-primary btn-lg"
              >
                Conheça a Arquitetura RADEC®
                <ChevronRight size={20} />
              </button>

              <button
                onClick={() => onNavigate('contato')}
                className="btn btn-secondary btn-lg"
              >
                Falar com Engenharia LLK
              </button>
            </div>
          </div>

          {/* RIGHT: Proof Card */}
          <div>
            <div className="card-dark" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{
                borderRadius: 'var(--r-lg)', overflow: 'hidden',
                position: 'relative', height: '280px', marginBottom: '1.25rem',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.5)',
              }}>
                <img
                  src={getAssetUrl('assets/photos/Apresentao_p10_170.png')}
                  alt="Painel de Controle SCADA & Telemetria em Tempo Real RADEC"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  background: 'var(--c-blue)', color: 'white',
                  padding: '0.4rem 0.85rem', borderRadius: '6px',
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', boxShadow: '0 4px 12px rgba(21, 87, 212, 0.4)',
                }}>
                  TELEMETRIA EM CAMPO REAL
                </div>

                <div style={{
                  position: 'absolute', bottom: '0.85rem', right: '0.85rem',
                  background: 'rgba(6, 19, 41, 0.85)', backdropFilter: 'blur(6px)',
                  color: 'var(--c-cyan-glow)', padding: '0.35rem 0.75rem', borderRadius: '4px',
                  fontSize: '0.6875rem', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800,
                }}>
                  SISTEMA RADEC® ATIVO · VALE CAUÊ
                </div>
              </div>

              <div style={{
                fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'var(--c-cyan-glow)', marginBottom: '0.5rem',
              }}>
                VALIDADO EM OPERAÇÃO CONTÍNUA — VALE CAUÊ, MG
              </div>

              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                color: 'white', lineHeight: 1.3, marginBottom: '0.75rem',
              }}>
                Intertravamento automático comprovado no sistema de controle da mina
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                Integração nativa de alta velocidade com o CLP principal para desarme do acionamento em menos de 1 segundo diante de falhas críticas.
              </p>
            </div>

            {/* Stats Bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r-lg)', padding: '1.25rem 1rem',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 900,
                    color: 'white', letterSpacing: '-0.03em', lineHeight: 1.1,
                    marginBottom: '0.35rem',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.4, fontWeight: 500,
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

