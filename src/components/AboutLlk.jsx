import React from 'react';
import { Building, Award, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useScrollReveal, revealStyle } from '../utils/scrollReveal';

const awards = [
  { title: 'Boas Práticas na Mineração 2024', detail: '1º e 3º Lugar — Melhor PoC em Campo' },
  { title: 'Top 10 IndTechs do Brasil', detail: '4 anos consecutivos de liderança em inovação' },
  { title: 'MStart & MSpot', detail: 'Mais desafios vencidos na mineração (Ciclos 1, 2, 4 e 5)' },
];

const solutions = [
  { name: 'SHM®', category: 'Proteção Estrutural', desc: 'Monitoramento contínuo de integridade estrutural em recuperadoras e máquinas de pátio.' },
  { name: 'Teor Online', category: 'Análise de Qualidade', desc: 'Análise química por visão hiperespectral do teor de Fe e Si sem contato.' },
  { name: 'V-Scan®', category: 'Controle de Processo', desc: 'Balança volumétrica óptica por triangulação laser sem parar roletes.' },
  { name: 'V-Count®', category: 'Controle de Processo', desc: 'Contagem e classificação óptica de corpos moedores em tempo real.' },
  { name: 'Colorímetro®', category: 'Análise de Qualidade', desc: 'Controle contínuo de cor e dosagem de reagentes em aquadutos e polpa.' },
];

const partners = [
  'Mining Hub — Programa de Inovação Aberta em Mineração',
  'UFMG — Universidade Federal de Minas Gerais',
  'BHTec — Parque Tecnológico de Belo Horizonte',
];

export default function AboutLlk({ onOpenQuote }) {
  const [headerRef, headerVisible] = useScrollReveal();
  const [overviewRef, overviewVisible] = useScrollReveal({ threshold: 0.08 });
  const [awardsRef, awardsVisible] = useScrollReveal({ threshold: 0.08 });
  const [portfolioRef, portfolioVisible] = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="sobre-llk" className="section-wrapper-light">
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} style={{ maxWidth: '780px', marginBottom: '4rem', ...revealStyle(headerVisible) }}>
          <div className="eyebrow">
            <ShieldCheck size={14} />
            Sobre a LLK Soluções Industriais
          </div>
          <h2 className="title-h1" style={{ marginBottom: '1.25rem', color: 'var(--c-gray-06)' }}>
            17 anos especializados em eficiência operacional para a Indústria de Base
          </h2>
          <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--c-gray-04)' }}>
            Referência nacional na aplicação de visão computacional, inteligência artificial, análise de vibração e IoT para proteção de ativos críticos industriais.
          </p>
        </div>

        {/* Numbers + Partners & Awards Grid (Matching Image 3 Redesign) */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', marginBottom: '4rem',
        }}>

          {/* LEFT: Stats + Ecosystem */}
          <div ref={overviewRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', ...revealStyle(overviewVisible, 0) }}>

            {/* 2 Extra Large Stat Boxes (Image 3) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { value: '28', label: 'Patentes', sub: 'Registradas no INPI' },
                { value: '+100', label: 'Soluções', sub: 'Desenvolvidas em Campo' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card-light"
                  style={{
                    textAlign: 'center', padding: '2.25rem 1.5rem',
                    background: 'var(--c-white)',
                    border: '1px solid var(--c-gray-01)',
                  }}
                >
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(2.75rem, 5vw, 3.75rem)', fontWeight: 900,
                    color: 'var(--c-navy-deep)', letterSpacing: '-0.04em', lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 800,
                    color: 'var(--c-blue)', marginTop: '0.5rem',
                  }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--c-gray-03)', marginTop: '0.25rem', fontWeight: 500 }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Partners Card (Image 3) */}
            <div className="card-light" style={{ flex: 1, padding: '2.25rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                marginBottom: '1.25rem', paddingBottom: '1rem',
                borderBottom: '1px solid var(--c-gray-01)',
              }}>
                <div style={{
                  width: '36px', height: '36px', background: 'rgba(21, 87, 212, 0.1)',
                  borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Building size={18} color="var(--c-blue)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 800,
                  color: 'var(--c-navy-deep)',
                }}>
                  Ecossistema Institucional & Parcerias
                </h3>
              </div>

              <p style={{ fontSize: '0.9375rem', color: 'var(--c-gray-04)', marginBottom: '1.5rem', lineHeight: 1.65 }}>
                Desenvolvemos inovação aberta em rede com os principais polos de tecnologia e mineração do país:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {partners.map((p, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '1rem 1.25rem', background: 'var(--c-gray-00)',
                    border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-md)',
                  }}>
                    <CheckCircle2 size={18} color="var(--c-blue)" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--c-gray-05)' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Awards Card + Primary CTA (Image 3) */}
          <div ref={awardsRef} style={{ ...revealStyle(awardsVisible, 100) }}>
            <div className="card-light" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '2.25rem' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                marginBottom: '1.5rem', paddingBottom: '1rem',
                borderBottom: '1px solid var(--c-gray-01)',
              }}>
                <div style={{
                  width: '36px', height: '36px', background: 'rgba(21, 87, 212, 0.1)',
                  borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Award size={18} color="var(--c-blue)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 800,
                  color: 'var(--c-navy-deep)',
                }}>
                  Premiações de Destaque
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', flex: 1 }}>
                {awards.map((a, i) => (
                  <div key={i} style={{
                    padding: '1.5rem', background: 'var(--c-gray-00)',
                    border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
                  }}>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '1.0625rem', fontWeight: 800,
                      color: 'var(--c-navy-deep)', marginBottom: '0.35rem',
                    }}>
                      {a.title}
                    </div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-blue)' }}>
                      {a.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Full Width Primary CTA Button (As shown in Image 3) */}
              <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--c-gray-01)' }}>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', justifyContent: 'center', borderRadius: 'var(--r-md)' }}
                >
                  Solicitar Diagnóstico RADEC®
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Portfolio Section (5-Column Grid) */}
        <div ref={portfolioRef} style={{ ...revealStyle(portfolioVisible) }}>
          <div style={{
            paddingBottom: '1.5rem', marginBottom: '2rem',
            borderBottom: '1px solid var(--c-gray-01)',
          }}>
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Portfólio Tecnológico LLK</div>
            <h3 style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
              color: 'var(--c-navy-deep)', letterSpacing: '-0.02em',
            }}>
              Outras Soluções Industriais de Processo e Qualidade
            </h3>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem',
          }}>
            {solutions.map((sol, i) => (
              <div key={i} className="card-light" style={{ padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--c-blue)',
                  display: 'block', marginBottom: '0.5rem',
                }}>
                  {sol.category}
                </span>

                <h4 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                  color: 'var(--c-navy-deep)', letterSpacing: '-0.02em', marginBottom: '0.75rem',
                }}>
                  {sol.name}
                </h4>

                <p style={{ fontSize: '0.875rem', color: 'var(--c-gray-04)', lineHeight: 1.65 }}>
                  {sol.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

