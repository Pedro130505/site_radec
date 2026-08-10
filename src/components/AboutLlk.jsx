import React from 'react';
import { Building, Award, CheckCircle, ArrowRight, Layers } from 'lucide-react';
import { useScrollReveal, revealStyle } from '../utils/scrollReveal';

const awards = [
  { title: 'Boas Práticas na Mineração 2024', detail: '1º e 3º Lugar — Melhor PoC' },
  { title: 'Top 10 IndTechs do Brasil', detail: '4 anos consecutivos' },
  { title: 'MStart & MSpot', detail: 'Mais desafios vencidos (Ciclos 1, 2, 4 e 5)' },
];

const solutions = [
  { name: 'SHM®', category: 'Proteção Estrutural', desc: 'Monitoramento contínuo de integridade estrutural em recuperadoras e máquinas de pátio.' },
  { name: 'Teor Online', category: 'Análise de Qualidade', desc: 'Análise química por visão hiperespectral do teor de Ferro e Sílica sem contato com a correia.' },
  { name: 'V-Scan®', category: 'Controle de Processo', desc: 'Balança volumétrica óptica por triangulação laser sem necessidade de remover rolos.' },
  { name: 'V-Count®', category: 'Controle de Processo', desc: 'Contagem e classificação óptica de corpos moedores em tempo real.' },
  { name: 'Colorímetro®', category: 'Análise de Qualidade', desc: 'Controle contínuo de cor e dosagem de reagentes em aquadutos e correias.' },
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
    <section id="sobre-llk" style={{
      background: 'var(--c-gray-00)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Section Header */}
        <div ref={headerRef} style={{ maxWidth: '620px', marginBottom: '4rem', ...revealStyle(headerVisible) }}>
          <div className="eyebrow">Sobre a LLK Soluções</div>
          <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
            17 anos especializados em eficiência operacional para a Indústria de Base
          </h2>
          <p className="lead" style={{ fontSize: '1rem' }}>
            Referência nacional na aplicação de visão computacional, inteligência artificial, análise de vibração e IoT para proteção de ativos industriais.
          </p>
        </div>

        {/* Numbers + Partners in 2-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>

          {/* Numbers + Overview */}
          <div ref={overviewRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', ...revealStyle(overviewVisible, 0) }}>

            {/* 2 stat boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: '28', label: 'Patentes', sub: 'Registradas no INPI' },
                { value: '+100', label: 'Soluções', sub: 'Desenvolvidas em Campo' },
              ].map((stat, i) => (
                <div key={i} className="card" style={{ textAlign: 'center', padding: '1.75rem 1rem' }}>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '2.25rem', fontWeight: 800,
                    color: 'var(--c-navy)', letterSpacing: '-0.03em', lineHeight: 1,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700,
                    color: 'var(--c-blue)', marginTop: '0.25rem',
                  }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--c-gray-03)', marginTop: '0.25rem' }}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Partners card */}
            <div className="card" style={{ flex: 1 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.625rem',
                marginBottom: '1.25rem',
                paddingBottom: '1rem', borderBottom: '1px solid var(--c-gray-01)',
              }}>
                <Building size={16} color="var(--c-blue)" />
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700,
                  color: 'var(--c-navy)',
                }}>
                  Ecossistema Institucional & Parcerias
                </h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--c-gray-04)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                Desenvolvemos inovação em rede com os principais polos de tecnologia e mineração do país:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {partners.map((p, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.625rem',
                    padding: '0.75rem', background: 'var(--c-gray-00)',
                    border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-md)',
                  }}>
                    <CheckCircle size={14} color="var(--c-blue)" />
                    <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--c-gray-05)' }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div ref={awardsRef} style={{ ...revealStyle(awardsVisible, 100) }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.625rem',
                marginBottom: '1.25rem',
                paddingBottom: '1rem', borderBottom: '1px solid var(--c-gray-01)',
              }}>
                <Award size={16} color="var(--c-blue)" />
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700,
                  color: 'var(--c-navy)',
                }}>
                  Premiações de Destaque
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
                {awards.map((a, i) => (
                  <div key={i} style={{
                    padding: '1.25rem', background: 'var(--c-gray-00)',
                    border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
                  }}>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '0.9375rem', fontWeight: 700,
                      color: 'var(--c-navy)', marginBottom: '0.25rem',
                    }}>
                      {a.title}
                    </div>
                    <div style={{
                      fontSize: '0.8125rem', fontWeight: 600, color: 'var(--c-blue)',
                    }}>
                      {a.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div style={{
                marginTop: '2rem', paddingTop: '1.5rem',
                borderTop: '1px solid var(--c-gray-01)',
              }}>
                <button
                  onClick={onOpenQuote}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Solicitar Diagnóstico RADEC®
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Portfolio Section */}
        <div ref={portfolioRef} style={{ ...revealStyle(portfolioVisible) }}>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            paddingBottom: '1.5rem', marginBottom: '1.5rem',
            borderBottom: '1px solid var(--c-gray-01)',
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>Portfólio Industrial LLK</div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 700,
                color: 'var(--c-navy)', letterSpacing: '-0.02em',
              }}>
                Outras Tecnologias de Processo e Qualidade
              </h3>
            </div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem',
          }}>
            {solutions.map((sol, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--c-blue)',
                  display: 'block', marginBottom: '0.5rem',
                }}>
                  {sol.category}
                </span>
                <h4 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 800,
                  color: 'var(--c-navy)', letterSpacing: '-0.02em', marginBottom: '0.75rem',
                }}>
                  {sol.name}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--c-gray-04)', lineHeight: 1.65 }}>
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
