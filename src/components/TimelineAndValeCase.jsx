import React from 'react';
import { Clock, DollarSign, ShieldCheck, TrendingUp, Search, AlertTriangle, Shield, Cpu, Users, Target, TrendingDown, Info } from 'lucide-react';

const timelineSteps = [
  { title: 'Desenvolvimento com a Vale', desc: 'Parceria de P&D iniciada no ecossistema Mining Hub' },
  { title: 'Avaliação técnica', desc: 'Validação de algoritmos em bancada laboratorial' },
  { title: 'Testes operacionais', desc: 'Protótipos instalados em ambiente severo' },
  { title: 'Testes em correia real', desc: 'Aferição de acurácia com falhas induzidas' },
  { title: 'Integração com automação', desc: 'Conexão com CLPs da planta via Modbus TCP' },
  { title: 'Operação assistida', desc: 'Monitoramento em tempo real sem trip para validação' },
  { title: 'Intertravamento', desc: 'Ativação do desarme automático de segurança' },
  { title: 'Eventos reais em operação', desc: 'Detecção de rasgos reais e resultados financeiros comprovados' },
];

const eventSteps = [
  { n: '01', title: 'Alteração na borda', desc: 'Sistema identifica alteração geométrica na borda da correia.', Icon: Search },
  { n: '02', title: 'Alarme gerado', desc: 'Sistema gera alarme conforme condição detectada.', Icon: AlertTriangle },
  { n: '03', title: 'Nível de proteção', desc: 'Condição atinge o nível configurado para atuação.', Icon: Shield },
  { n: '04', title: 'Parada automática', desc: 'Intertravamento acionado pelo CLP automaticamente.', Icon: Cpu },
  { n: '05', title: 'Inspeção em campo', desc: 'Equipe inspeciona a correia com transportador parado.', Icon: Users },
  { n: '06', title: 'Rasgo confirmado', desc: 'Rasgo na borda confirmado durante inspeção física.', Icon: Target },
  { n: '07', title: 'Correia reparada', desc: 'Correia reparada e operação retomada com segurança.', Icon: ShieldCheck },
];

export default function TimelineAndValeCase({ onOpenQuote }) {
  return (
    <section id="pesquisa-operacao" style={{
      background: 'var(--c-gray-00)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* ======== Section 1: Timeline ======== */}
        <div style={{ marginBottom: '5rem' }}>
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <div className="eyebrow">Da Pesquisa à Operação</div>
            <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
              Desenvolvido para sair do laboratório e operar na mineração
            </h2>
            <p className="lead" style={{ fontSize: '1rem' }}>
              Um histórico de validação rigorosa com a Vale para atingir confiabilidade industrial absoluta.
            </p>
          </div>

          {/* Timeline Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px',
            background: 'var(--c-gray-01)', border: '1px solid var(--c-gray-01)',
            borderRadius: 'var(--r-xl)', overflow: 'hidden',
          }}>
            {timelineSteps.map((t, i) => (
              <div key={i} style={{
                background: 'var(--c-white)',
                padding: '1.5rem',
              }}>
                <div style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '0.6875rem', fontWeight: 600,
                  color: i === 7 ? 'var(--c-blue)' : 'var(--c-gray-03)',
                  letterSpacing: '0.06em', marginBottom: '0.75rem',
                }}>
                  0{i + 1} {i === 7 && '— Atual'}
                </div>
                <h4 style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '0.9375rem', fontWeight: 700,
                  color: 'var(--c-navy)', marginBottom: '0.375rem',
                }}>
                  {t.title}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: 'var(--c-gray-04)', lineHeight: 1.6 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ======== Section 2: Vale Case ======== */}
        <div>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem' }}>
            <div className="eyebrow">Prova Comercial Definitiva</div>
            <h2 className="title-h2" style={{ marginBottom: '0.75rem' }}>
              Resultados comprovados em operação
            </h2>
            <p style={{
              fontSize: '1rem', fontWeight: 600, color: 'var(--c-gray-04)',
            }}>
              Vale | Mina de Cauê — Itabira/MG
            </p>
          </div>

          {/* Before / After */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem',
          }}>
            {/* Before */}
            <div style={{
              background: '#FFF5F5', border: '1px solid #FECACA',
              borderRadius: 'var(--r-xl)', padding: '2rem',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: '#991B1B',
                  background: '#FEE2E2', padding: '0.375rem 0.75rem', borderRadius: '4px',
                }}>
                  Antes do RADEC®
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9AA3B2', fontFamily: 'IBM Plex Mono, monospace' }}>
                  out/2021 a set/2024
                </span>
              </div>
              <h4 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700,
                color: '#7F1D1D', marginBottom: '1.25rem',
              }}>
                Operação Sem Intertravamento Automático
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { Icon: Clock, value: '+40 horas', label: 'de paradas não programadas por danos de rasgo' },
                  { Icon: DollarSign, value: 'R$ 17 milhões', label: 'de prejuízo financeiro estimado' },
                ].map(({ Icon, value, label }, i) => (
                  <div key={i} style={{
                    background: 'white', border: '1px solid #FECACA',
                    borderRadius: 'var(--r-lg)', padding: '1.25rem',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', background: '#FEE2E2',
                      borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={18} color="#DC2626" />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 800,
                        color: '#991B1B', letterSpacing: '-0.02em',
                      }}>
                        {value}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#6B7280' }}>{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div style={{
              background: '#F0FDF4', border: '1px solid #BBF7D0',
              borderRadius: 'var(--r-xl)', padding: '2rem',
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}>
                <span style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: '#14532D',
                  background: '#DCFCE7', padding: '0.375rem 0.75rem', borderRadius: '4px',
                }}>
                  Depois do RADEC® Intertravado
                </span>
                <span style={{ fontSize: '0.75rem', color: '#9AA3B2', fontFamily: 'IBM Plex Mono, monospace' }}>
                  out/2024 a abr/2026
                </span>
              </div>
              <h4 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 700,
                color: '#14532D', marginBottom: '1.25rem',
              }}>
                Proteção Ativa Intertravada ao Sistema de Controle
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { Icon: ShieldCheck, value: '+45 horas', label: 'de paradas não programadas evitadas em campo' },
                  { Icon: TrendingUp, value: 'R$ 15 milhões', label: 'de retorno financeiro estimado por atuações preventivas' },
                ].map(({ Icon, value, label }, i) => (
                  <div key={i} style={{
                    background: 'white', border: '1px solid #BBF7D0',
                    borderRadius: 'var(--r-lg)', padding: '1.25rem',
                    display: 'flex', alignItems: 'center', gap: '1rem',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', background: '#DCFCE7',
                      borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Icon size={18} color="#16A34A" />
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 800,
                        color: '#14532D', letterSpacing: '-0.02em',
                      }}>
                        {value}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: '#6B7280' }}>{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 7 Steps Event Infographic */}
          <div style={{
            background: 'var(--c-navy)', borderRadius: 'var(--r-xl)', padding: '2.5rem',
          }}>
            <div style={{
              display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
              gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap',
            }}>
              <div>
                <div style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem',
                }}>
                  Documentação de Campo
                </div>
                <h4 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 700,
                  color: 'white', letterSpacing: '-0.02em',
                }}>
                  Um evento real em operação — Vale | Mina de Cauê, Itabira/MG
                </h4>
              </div>
              <span style={{
                background: 'var(--c-blue)', color: 'white',
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', padding: '0.5rem 1rem', borderRadius: '4px',
                flexShrink: 0,
              }}>
                RADEC® Visão
              </span>
            </div>

            {/* 7 event steps */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '1px', background: 'rgba(255,255,255,0.06)',
              borderRadius: 'var(--r-lg)', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: '1.5rem',
            }}>
              {eventSteps.map((ev, i) => {
                const Icon = ev.Icon;
                return (
                  <div key={i} style={{ background: 'var(--c-navy-mid)', padding: '1.5rem 1.25rem' }}>
                    <div style={{
                      fontFamily: 'IBM Plex Mono, monospace',
                      fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', marginBottom: '0.75rem',
                    }}>
                      {ev.n}
                    </div>
                    <Icon size={16} color="rgba(255,255,255,0.4)" style={{ marginBottom: '0.75rem' }} />
                    <h5 style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '0.875rem', fontWeight: 700,
                      color: 'white', marginBottom: '0.375rem', lineHeight: 1.3,
                    }}>
                      {ev.title}
                    </h5>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.55 }}>
                      {ev.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom caption */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Info size={13} color="rgba(255,255,255,0.25)" />
              <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.35)' }}>
                Evento real ocorrido na Mina de Cauê – Itabira/MG, com o RADEC® Visão intertravado ao sistema de controle da Vale.
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
