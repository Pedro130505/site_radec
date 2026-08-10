import React from 'react';
import { Eye, Activity, CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const products = [
  {
    id: 'visao',
    label: 'Inspeção Óptica & IA',
    title: 'RADEC® Visão',
    subtitle: 'Monitoramento direto por visão computacional',
    desc: 'Monitora manifestações geométricas da correia para identificação de rasgos, desalinhamentos e alterações de condição sem contato físico.',
    items: ['Rasgos de borda', 'Rasgos centrais', 'Rasgos com abertura', 'Rasgos com sobreposição', 'Desalinhamento'],
    href: '#radec-visao',
    Icon: Eye,
    accent: 'var(--c-blue)',
  },
  {
    id: 'vibracional',
    label: 'Sensoriamento Mecânico',
    title: 'RADEC® Vibracional',
    subtitle: 'Detecção de eventos por choque mecânico',
    desc: 'Detecta manifestações mecânicas associadas a rasgos, queda de material e tiras soltas, complementando a proteção óptica.',
    items: ['Queda de material', 'Tiras soltas / descolamento', 'Eventos de impacto severo'],
    href: '#radec-vibracional',
    Icon: Activity,
    accent: 'var(--c-navy)',
  },
];

export default function RadecFamilyOverview({ onOpenQuote }) {
  return (
    <section id="familia-radec" style={{
      background: 'var(--c-gray-00)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Header */}
        <ScrollReveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="eyebrow">Arquitetura de Proteção</div>
          <h2 className="title-h2" style={{ marginBottom: '0.875rem' }}>
            Uma família de proteção.<br />Dois princípios de detecção.
          </h2>
          <p className="lead" style={{ fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>
            Diferentes tecnologias passam a observar ou atuar em diferentes estágios da manifestação da falha.
          </p>
        </ScrollReveal>

        {/* Product Cards */}
        <ScrollReveal delay={150} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.5rem',
        }}>
          {products.map(p => {
            const Icon = p.Icon;
            return (
              <div key={p.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Card Top */}
                <div style={{
                  display: 'flex', alignItems: 'flex-start',
                  justifyContent: 'space-between', marginBottom: '1.5rem',
                }}>
                  <div>
                    <span style={{
                      fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: 'var(--c-blue)',
                      display: 'block', marginBottom: '0.5rem',
                    }}>
                      {p.label}
                    </span>
                    <h3 style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '1.5rem', fontWeight: 700,
                      color: 'var(--c-navy)', letterSpacing: '-0.02em',
                    }}>
                      {p.title}
                    </h3>
                    <p style={{
                      fontSize: '0.875rem', fontWeight: 500,
                      color: 'var(--c-blue)', marginTop: '0.25rem',
                    }}>
                      {p.subtitle}
                    </p>
                  </div>
                  <div className="icon-badge icon-badge-md" style={{
                    background: 'var(--c-navy)',
                    color: 'white', borderRadius: 'var(--r-md)',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} />
                  </div>
                </div>

                <p className="body-text" style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  {p.desc}
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{
                    fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase', color: 'var(--c-gray-03)',
                    marginBottom: '0.75rem',
                  }}>
                    Manifestações detectadas
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {p.items.map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <CheckCircle size={14} color="var(--c-green)" />
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--c-gray-05)' }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: 'auto' }}>
                  <a href={p.href} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Conheça o {p.title}
                    <ArrowRight size={16} />
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
