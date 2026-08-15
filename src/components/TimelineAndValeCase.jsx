import React, { useState } from 'react';
import { Clock, DollarSign, ShieldCheck, TrendingUp, Search, AlertTriangle, Shield, Cpu, Users, Target, Info, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const timelineSteps = [
  { n: '01', title: 'Desenvolvimento com a Vale', desc: 'Parceria de P&D iniciada no ecossistema Mining Hub com foco em detecção precoce de falhas.' },
  { n: '02', title: 'Avaliação técnica', desc: 'Validação de algoritmos em bancada laboratorial com dados ópticos e espectrais reais.' },
  { n: '03', title: 'Testes operacionais', desc: 'Protótipos instalados em ambiente severo sob poeira em suspensão e alta vibração.' },
  { n: '04', title: 'Testes em correia real', desc: 'Aferição de acurácia com falhas induzidas em transportadores de correia de grande porte.' },
  { n: '05', title: 'Integração com automação', desc: 'Conexão com CLPs da planta via protocolo Modbus TCP e sinais de relé digital de segurança.' },
  { n: '06', title: 'Operação assistida', desc: 'Monitoramento contínuo em tempo real sem trip para validação estatística de acurácia.' },
  { n: '07', title: 'Intertravamento', desc: 'Ativação do desarme automático de segurança direto na lógica de controle do motor principal.' },
  { n: '08', title: 'Eventos reais em operação', desc: 'Detecção de rasgos reais e retorno financeiro comprovado em lavra contínua.', isCurrent: true },
];

const eventSteps = [
  { n: '01', title: 'Alteração na borda', desc: 'Sistema identifica alteração geométrica na borda da correia via sensores ópticos.', Icon: Search, status: 'Alerta Inicial', color: '#38BDF8' },
  { n: '02', title: 'Alarme gerado', desc: 'Sistema gera alarme pré-configurado e notifica a sala de controle.', Icon: AlertTriangle, status: 'Notificação SCADA', color: '#F59E0B' },
  { n: '03', title: 'Nível de proteção', desc: 'Condição de avanço atinge o nível limite configurado para atuação.', Icon: Shield, status: 'Nível 2 Atingido', color: '#F97316' },
  { n: '04', title: 'Parada automática', desc: 'Intertravamento acionado pelo CLP automaticamente em menos de 1 segundo.', Icon: Cpu, status: 'Trip CLP Ativado', color: '#EF4444' },
  { n: '05', title: 'Inspeção em campo', desc: 'Equipe inspeciona a correia com transportador parado com total segurança.', Icon: Users, status: 'Inspeção Física', color: '#A855F7' },
  { n: '06', title: 'Rasgo confirmado', desc: 'Rasgo na borda confirmado durante verificação presencial pela manutenção.', Icon: Target, status: 'Diagnóstico OK', color: '#EC4899' },
  { n: '07', title: 'Correia reparada', desc: 'Correia reparada rapidamente e operação retomada com segurança absoluta.', Icon: ShieldCheck, status: 'Operação Normal', color: '#10B981' },
];

export default function TimelineAndValeCase({ onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(3); // Default step 04 (Parada automática)
  const currentEvent = eventSteps[activeStep];

  return (
    <div id="case-vale">
      {/* ======== SECTION 1: TIMELINE VALE (FULL-BLEED LIGHT) ======== */}
      <section className="section-wrapper-light">
        <div className="container">
          <div style={{ maxWidth: '780px', marginBottom: '3.5rem' }}>
            <div className="eyebrow">
              <Zap size={14} />
              Da Pesquisa à Confiabilidade Industrial
            </div>
            <h2 className="title-h1" style={{ marginBottom: '1.25rem', color: 'var(--c-gray-06)' }}>
              Desenvolvido para sair do laboratório e operar na mineração severa
            </h2>
            <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--c-gray-04)' }}>
              Um histórico rigoroso de 8 etapas de validação em conjunto com a Vale para atingir confiabilidade industrial absoluta.
            </p>
          </div>

          {/* 8-Step Clean Grid Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '1rem',
          }}>
            {timelineSteps.map((t, i) => (
              <div
                key={i}
                className="card-light"
                style={{
                  padding: '1.75rem 1.5rem',
                  borderTop: t.isCurrent ? '3px solid var(--c-blue)' : '1px solid var(--c-gray-01)',
                  background: 'var(--c-white)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                  }}>
                    <span className="step-badge" style={{
                      background: t.isCurrent ? 'rgba(21, 87, 212, 0.1)' : 'var(--c-gray-00)',
                      color: t.isCurrent ? 'var(--c-blue)' : 'var(--c-gray-04)',
                      border: t.isCurrent ? '1px solid rgba(21, 87, 212, 0.3)' : '1px solid var(--c-gray-01)',
                      fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800,
                    }}>
                      PASSO {t.n} {t.isCurrent && '— ATUAL'}
                    </span>
                    {t.isCurrent && <CheckCircle2 size={16} color="var(--c-blue)" />}
                  </div>

                  <h4 style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.125rem', fontWeight: 800,
                    color: 'var(--c-navy-deep)', marginBottom: '0.625rem',
                    lineHeight: 1.3,
                  }}>
                    {t.title}
                  </h4>

                  <p style={{ fontSize: '0.875rem', color: 'var(--c-gray-04)', lineHeight: 1.65 }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== SECTION 2: COMPARATIVE PERFORMANCE (BEFORE / AFTER) ======== */}
      <section className="section-wrapper-white">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <div className="eyebrow" style={{ margin: '0 auto 1.25rem' }}>Prova Comercial Definitiva</div>
            <h2 className="title-h1" style={{ marginBottom: '1rem' }}>
              Resultados comprovados em operação contínua
            </h2>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--c-blue)' }}>
              Vale | Mina de Cauê — Itabira / MG
            </p>
          </div>

          {/* Before vs After Cards */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', marginBottom: '4rem',
          }}>
            {/* BEFORE */}
            <div style={{
              background: '#FFF5F5', border: '1px solid #FECACA',
              borderRadius: 'var(--r-xl)', padding: '2.5rem',
              boxShadow: '0 8px 24px rgba(220, 38, 38, 0.06)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem',
              }}>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: '#991B1B',
                  background: '#FEE2E2', padding: '0.4rem 0.85rem', borderRadius: '6px',
                }}>
                  Antes do RADEC®
                </span>
                <span style={{ fontSize: '0.8125rem', color: '#7F1D1D', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600 }}>
                  out/2021 a set/2024
                </span>
              </div>

              <h4 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                color: '#7F1D1D', marginBottom: '1.5rem', lineHeight: 1.3,
              }}>
                Operação Sem Intertravamento Automático
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{
                  background: 'white', border: '1px solid #FECACA',
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                }}>
                  <div style={{
                    width: '48px', height: '48px', background: '#FEE2E2',
                    borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Clock size={22} color="#DC2626" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                      color: '#991B1B', letterSpacing: '-0.02em', lineHeight: 1.1,
                    }}>
                      +40 horas
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                      de paradas não programadas por danos de rasgo
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'white', border: '1px solid #FECACA',
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                }}>
                  <div style={{
                    width: '48px', height: '48px', background: '#FEE2E2',
                    borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <DollarSign size={22} color="#DC2626" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                      color: '#991B1B', letterSpacing: '-0.02em', lineHeight: 1.1,
                    }}>
                      R$ 17 milhões
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                      de prejuízo financeiro estimado em avarias acumuladas
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AFTER */}
            <div style={{
              background: '#F0FDF4', border: '1px solid #BBF7D0',
              borderRadius: 'var(--r-xl)', padding: '2.5rem',
              boxShadow: '0 8px 24px rgba(22, 163, 74, 0.08)',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.5rem',
              }}>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: '#14532D',
                  background: '#DCFCE7', padding: '0.4rem 0.85rem', borderRadius: '6px',
                }}>
                  Depois do RADEC® Intertravado
                </span>
                <span style={{ fontSize: '0.8125rem', color: '#14532D', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 600 }}>
                  out/2024 a abr/2026
                </span>
              </div>

              <h4 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                color: '#14532D', marginBottom: '1.5rem', lineHeight: 1.3,
              }}>
                Proteção Ativa Intertravada ao Sistema de Controle
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{
                  background: 'white', border: '1px solid #BBF7D0',
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                }}>
                  <div style={{
                    width: '48px', height: '48px', background: '#DCFCE7',
                    borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <ShieldCheck size={22} color="#16A34A" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                      color: '#14532D', letterSpacing: '-0.02em', lineHeight: 1.1,
                    }}>
                      +45 horas
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                      de paradas não programadas evitadas com desarme preventivo
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'white', border: '1px solid #BBF7D0',
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                }}>
                  <div style={{
                    width: '48px', height: '48px', background: '#DCFCE7',
                    borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', flexShrink: 0,
                  }}>
                    <TrendingUp size={22} color="#16A34A" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                      color: '#14532D', letterSpacing: '-0.02em', lineHeight: 1.1,
                    }}>
                      R$ 15 milhões
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
                      de retorno financeiro direto por preservação da correia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== SECTION 3: 7-STEP FIELD EVENT INFOGRAPHIC (IMAGE 1 REDESIGN) ======== */}
      <section className="section-wrapper-navy">
        <div className="container">
          <div style={{
            background: 'var(--c-navy-card)',
            borderRadius: 'var(--r-xl)',
            padding: '3rem',
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
          }}>
            {/* Header Header */}
            <div style={{
              display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
              gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap',
            }}>
              <div>
                <div className="eyebrow eyebrow-dark">Documentação de Campo em Operação Real</div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(1.5rem, 3vw, 2.125rem)',
                  fontWeight: 800, color: 'white', letterSpacing: '-0.025em',
                }}>
                  Um evento real em operação — Vale | Mina de Cauê, Itabira/MG
                </h3>
              </div>
              <div style={{
                background: 'var(--c-blue)', color: 'white',
                padding: '0.625rem 1.25rem', borderRadius: 'var(--r-md)',
                fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', boxShadow: '0 4px 14px rgba(21, 87, 212, 0.4)',
              }}>
                RADEC® Visão Intertravado
              </div>
            </div>

            {/* Interactive Step Navigator Bar (7 steps) */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '0.5rem', marginBottom: '2.5rem',
            }} className="event-steps-grid">
              {eventSteps.map((ev, i) => {
                const Icon = ev.Icon;
                const isActive = activeStep === i;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    style={{
                      background: isActive ? 'var(--c-blue)' : 'rgba(255, 255, 255, 0.04)',
                      border: isActive ? '1.5px solid var(--c-blue-glow)' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--r-md)',
                      padding: '1.25rem 1rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.22s ease',
                      boxShadow: isActive ? '0 10px 25px rgba(37, 99, 235, 0.35)' : 'none',
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                    }}>
                      <span style={{
                        fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.75rem',
                        fontWeight: 700, color: isActive ? 'white' : 'rgba(255,255,255,0.4)',
                      }}>
                        {ev.n}
                      </span>
                      <Icon size={16} color={isActive ? 'white' : ev.color} />
                    </div>

                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 700,
                      color: 'white', lineHeight: 1.25, marginBottom: '0.35rem',
                    }}>
                      {ev.title}
                    </div>

                    <div style={{
                      fontSize: '0.6875rem', color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
                      lineHeight: 1.4,
                    }}>
                      {ev.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Step Visual Detail Display */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--r-lg)', padding: '2rem',
              display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center',
              marginBottom: '1.5rem',
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    background: currentEvent.color, color: 'white',
                    fontSize: '0.6875rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: '4px',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {currentEvent.status}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'IBM Plex Mono, monospace' }}>
                    Etapa {currentEvent.n} de 07
                  </span>
                </div>

                <h4 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
                  {currentEvent.title}
                </h4>

                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, maxWidth: '780px' }}>
                  {currentEvent.desc}
                </p>
              </div>

              <button
                onClick={onOpenQuote}
                className="btn btn-primary"
                style={{ flexShrink: 0 }}
              >
                Solicitar Diagnóstico Técnico
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Caption Note */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <Info size={15} color="rgba(255,255,255,0.4)" />
              <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>
                Evento real ocorrido na Mina de Cauê – Itabira/MG, com o RADEC® Visão intertravado ao sistema de controle da Vale.
              </span>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .event-steps-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 640px) {
            .event-steps-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

