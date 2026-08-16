import React from 'react';
import { Eye, Activity, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const products = [
  {
    id: 'visao',
    label: 'Inspeção Óptica & IA',
    title: 'RADEC® Visão',
    subtitle: 'Monitoramento direto da correia por visão computacional',
    desc: 'Monitora manifestações ópticas e geométricas da correia para identificação de rasgos, desalinhamentos e alterações de condição.',
    items: ['Rasgos de borda', 'Rasgos centrais', 'Rasgos com abertura', 'Rasgos com sobreposição', 'Desalinhamento'],
    href: '#radec-visao',
    btnText: 'Conheça o RADEC® Visão',
    Icon: Eye,
  },
  {
    id: 'vibracional',
    label: 'Sensoriamento Mecânico',
    title: 'RADEC® Vibracional',
    subtitle: 'Detecção de eventos por choque mecânico',
    desc: 'Detecta manifestações mecânicas associadas a rasgos, queda de material e tiras soltas, complementando a proteção óptica.',
    items: ['Queda de material', 'Tiras soltas', 'Eventos de impacto associados ao dano'],
    href: '#radec-vibracional',
    btnText: 'Conheça o RADEC® Vibracional',
    Icon: Activity,
  },
];

export default function RadecFamilyOverview({ onOpenQuote }) {
  return (
    <section id="familia-radec" className="section-wrapper-light">
      <div className="container">

        {/* Asymmetric Split Header - Eliminating Empty White Space */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
          marginBottom: '4rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--c-gray-01)',
        }}>
          {/* Left Column: Bold Headline & Eyebrow */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <Layers size={14} />
              Arquitetura Integrada de Proteção
            </div>
            <h2 className="title-h1" style={{ color: 'var(--c-navy-deep)', lineHeight: 1.05 }}>
              Uma família de proteção.<br />
              <span style={{ color: 'var(--c-blue)' }}>Dois princípios de detecção.</span>
            </h2>
          </div>

          {/* Right Column: Technical Narrative & Key Metric Badges */}
          <div>
            <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--c-gray-04)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Diferentes tecnologias ópticas e mecânicas atuam em etapas complementares para garantir o intertravamento automático da correia sem falsos desligamentos por poeira ou sombras.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{
                background: 'var(--c-white)', border: '1px solid var(--c-gray-01)',
                padding: '0.625rem 1.125rem', borderRadius: 'var(--r-md)',
                fontSize: '0.8125rem', fontWeight: 700, color: 'var(--c-navy-deep)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-blue)' }} />
                Sensoriamento Óptico Sem Contato
              </div>

              <div style={{
                background: 'var(--c-white)', border: '1px solid var(--c-gray-01)',
                padding: '0.625rem 1.125rem', borderRadius: 'var(--r-md)',
                fontSize: '0.8125rem', fontWeight: 700, color: 'var(--c-navy-deep)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--c-green)' }} />
                Atuação em CLP &lt;1 segundo
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <ScrollReveal delay={150} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '2rem',
        }}>
          {products.map(p => {
            const Icon = p.Icon;
            return (
              <div key={p.id} className="card-light" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '2.5rem' }}>
                <div>
                  {/* Card Header */}
                  <div style={{
                    display: 'flex', alignItems: 'flex-start',
                    justifyContent: 'space-between', marginBottom: '1.75rem',
                  }}>
                    <div>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: 'var(--c-blue)',
                        display: 'block', marginBottom: '0.5rem',
                      }}>
                        {p.label}
                      </span>

                      <h3 style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '1.75rem', fontWeight: 800,
                        color: 'var(--c-navy-deep)', letterSpacing: '-0.025em',
                      }}>
                        {p.title}
                      </h3>

                      <p style={{
                        fontSize: '0.9375rem', fontWeight: 600,
                        color: 'var(--c-blue)', marginTop: '0.25rem',
                      }}>
                        {p.subtitle}
                      </p>
                    </div>

                    <div style={{
                      width: '48px', height: '48px', background: 'var(--c-navy-deep)',
                      color: 'white', borderRadius: 'var(--r-md)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, boxShadow: '0 4px 12px rgba(6,19,41,0.2)',
                    }}>
                      <Icon size={22} />
                    </div>
                  </div>

                  <p style={{ fontSize: '1rem', color: 'var(--c-gray-05)', lineHeight: 1.7, marginBottom: '2rem' }}>
                    {p.desc}
                  </p>

                  <div style={{ marginBottom: '2.25rem' }}>
                    <div style={{
                      fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: 'var(--c-gray-03)',
                      marginBottom: '1rem',
                    }}>
                      Manifestações e anomalias detectadas
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {p.items.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <CheckCircle2 size={18} color="var(--c-green)" />
                          <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--c-gray-05)' }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <a href={p.href} className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    {p.btnText || `Conheça o ${p.title}`}
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </ScrollReveal>

      </div>
    </section>
  );
}

