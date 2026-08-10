import React from 'react';
import { Eye, Search, Bell, Cpu, Shield, ArrowRight } from 'lucide-react';
import { useScrollReveal, revealStyle } from '../utils/scrollReveal';

const steps = [
  { n: '01', title: 'Monitora', desc: 'Acompanha continuamente a correia e suas condições observáveis.', Icon: Eye },
  { n: '02', title: 'Identifica', desc: 'Reconhece rasgos, desalinhamentos ou eventos associados ao dano.', Icon: Search },
  { n: '03', title: 'Gera Alarmes', desc: 'Disponibiliza estados de alarme e diagnóstico conforme condição.', Icon: Bell },
  { n: '04', title: 'Integra ao PLC', desc: 'Transmite informações ao sistema de controle da planta.', Icon: Cpu },
  { n: '05', title: 'Proteção Ativa', desc: 'Permite estratégias de intertravamento e proteção automática.', Icon: Shield },
];

export default function ActiveProtectionSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [stepsRef, stepsVisible] = useScrollReveal({ threshold: 0.05 });
  return (
    <section id="protecao-ativa" style={{
      background: 'var(--c-navy)',
      color: 'white',
      padding: 'var(--section-y) 0',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: '3.5rem', textAlign: 'center', ...revealStyle(headerVisible) }}>
          <div className="eyebrow eyebrow-white" style={{ marginBottom: '1rem' }}>
            Intertravamento & Automação
          </div>
          <h2 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.025em',
            marginBottom: '1rem',
          }}>
            Mais que monitoramento.<br />Proteção ativa.
          </h2>
          <p style={{
            fontSize: '1.0625rem',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Integração completa entre detecção, diagnóstico e atuação no sistema de controle da planta.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <div key={i} style={{
                background: 'var(--c-navy-mid)',
                padding: '2.25rem 1.75rem',
                position: 'relative',
              }}>
                {/* Step number */}
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.3)',
                  letterSpacing: '0.08em',
                  marginBottom: '1.25rem',
                }}>
                  {step.n}
                </div>

                {/* Icon */}
                <div style={{
                  width: '40px', height: '40px',
                  background: 'rgba(21, 87, 212, 0.2)',
                  borderRadius: 'var(--r-md)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.125rem',
                }}>
                  <Icon size={18} color="var(--c-blue)" style={{ color: '#5B9BFF' }} />
                </div>

                <h3 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '0.625rem',
                  letterSpacing: '-0.015em',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.65,
                  fontWeight: 400,
                }}>
                  {step.desc}
                </p>

                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)',
                    zIndex: 1, display: 'none',
                  }}>
                    <ArrowRight size={14} color="rgba(255,255,255,0.2)" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div style={{
          marginTop: '2rem',
          padding: '1.25rem 2rem',
          background: 'rgba(21, 87, 212, 0.12)',
          border: '1px solid rgba(21, 87, 212, 0.25)',
          borderRadius: 'var(--r-lg)',
          textAlign: 'center',
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.85)',
        }}>
          Do monitoramento à proteção integrada da operação.
        </div>

      </div>
    </section>
  );
}
