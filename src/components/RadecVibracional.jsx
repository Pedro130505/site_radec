import React, { useState } from 'react';
import { Activity, CheckCircle2, Info, ArrowRight, ShieldCheck, Zap, Waves } from 'lucide-react';

const scenarios = {
  normal: {
    name: 'Correia Normal',
    eventType: 'Vibração padrão da estrutura do transportador sem choques transientes.',
    detection: 'Operação constante dentro do envelope de frequências normais.',
    status: 'Normalidade Mecânica', statusType: 'ok',
    plcSignal: 'Sinal Digital 1 (Normalidade) | Sem abertura de relé',
    action: 'Supervisão sem intervenção no acionamento.',
  },
  queda: {
    name: 'Queda de Material',
    eventType: 'Impacto rítmico ou atrito direto de blocos soltos na calha ou mesa de carga.',
    detection: 'Picos frequenciais de choque mecânico captados pelos acelerômetros industriais.',
    status: 'Alerta de Impacto', statusType: 'warn',
    plcSignal: 'Bit de Alerta de Impacto enviado via Modbus ao SCADA',
    action: 'Disparo de aviso sonoro/visual na sala de controle central.',
  },
  tira: {
    name: 'Tira Solta',
    eventType: 'Batimento cíclico de alta frequência de aba descolada batendo na estrutura.',
    detection: 'Assinatura espectral característica de impacto de tira solta identificada.',
    status: 'Proteção Ativa (Trip)', statusType: 'alert',
    plcSignal: 'Sinal de Desarme por Relé Digital enviado ao circuito do CLP (<1s)',
    action: 'Intertravamento automático para evitar arraste e destruição da camada.',
  },
  impacto: {
    name: 'Impacto Severo',
    eventType: 'Perfuração de bloco de rocha perfurante na lona durante o carregamento.',
    detection: 'Choque transiente de alta amplitude energética captado instantaneamente.',
    status: 'Proteção Crítica (Trip)', statusType: 'alert',
    plcSignal: 'Abertura imediata do contato de intertravamento de segurança',
    action: 'Parada instantânea do acionamento principal do transportador.',
  },
  sem_evento: {
    name: 'Sem Evento Mecânico',
    eventType: 'Avaria puramente óptica na superfície sem componente de impacto mecânico.',
    detection: 'Danos puramente visuais são cobertos em tempo real pelo RADEC® Visão.',
    status: 'Complementariedade', statusType: 'neutral',
    plcSignal: 'Sem alteração no relé vibracional (Monitoramento Óptico Ativo)',
    action: 'Monitoramento complementar contínuo efetuado pelo RADEC® Visão.',
  },
};

const statusStyle = {
  ok:      { background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', border: '1px solid rgba(16, 185, 129, 0.3)' },
  warn:    { background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', border: '1px solid rgba(245, 158, 11, 0.3)' },
  alert:   { background: 'rgba(239, 68, 68, 0.15)', color: '#F87171', border: '1px solid rgba(239, 68, 68, 0.3)' },
  neutral: { background: 'rgba(148, 163, 184, 0.15)', color: '#CBD5E1', border: '1px solid rgba(148, 163, 184, 0.3)' },
};

export default function RadecVibracional({ onOpenQuote }) {
  const [selected, setSelected] = useState('normal');
  const current = scenarios[selected];

  return (
    <section id="radec-vibracional" className="section-wrapper-slate">
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <div className="eyebrow eyebrow-dark">
            <Waves size={14} />
            Sensoriamento Frequencial de Choque Mecânico
          </div>
          <h2 className="title-h1" style={{ marginBottom: '0.75rem', color: 'white' }}>
            RADEC® Vibracional
          </h2>
          <p className="lead lead-white" style={{ fontSize: '1.375rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            Detecção de eventos por choque mecânico
          </p>
          <p className="lead lead-white" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)' }}>
            Detecta manifestações mecânicas associadas a rasgos, queda de material e tiras soltas, complementando a proteção óptica.
          </p>
        </div>

        {/* Product Overview + Capabilities Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem',
        }}>
          {/* Left: Overview */}
          <div className="card-dark" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                width: '48px', height: '48px', background: 'rgba(37, 99, 235, 0.15)',
                border: '1px solid rgba(37, 99, 235, 0.3)',
                borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: '1.5rem',
              }}>
                <Activity size={24} color="var(--c-cyan-glow)" />
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 800,
                color: 'white', marginBottom: '0.875rem',
              }}>
                Substituição Definitiva de Cordas e Bandejas Mecânicas
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                Supera definitivamente os problemas de falso trip e quebras frequentes dos sistemas mecânicos ultrapassados. Sensores com grau de proteção **IP69K** instalados nos pontos de travamento garantem atuação direta na lógica do CLP.
              </p>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="card-dark" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--c-cyan-glow)',
            }}>
              Capacidades de Detecção Mecânica
            </div>

            {[
              'Queda de material e atritos anômalos na zona de carga',
              'Tiras soltas e abas descoladas em alta velocidade',
              'Choque mecânico transiente por travamento de rocha perfurante',
              'Batimentos estruturais em roletes e guias laterais',
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem',
                padding: '1rem 1.25rem', background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'var(--r-md)',
              }}>
                <CheckCircle2 size={20} color="var(--c-green)" />
                <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'white' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scenario Simulator */}
        <div style={{
          background: 'var(--c-navy-card)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 'var(--r-xl)', overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
        }}>
          {/* Simulator Header */}
          <div style={{
            padding: '1.75rem 2.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(0,0,0,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div className="eyebrow eyebrow-dark" style={{ marginBottom: '0.25rem' }}>Demonstração Conceitual Interativa</div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                color: 'white', letterSpacing: '-0.015em',
              }}>
                Simule como o RADEC® Vibracional responde a eventos de choque
              </h3>
            </div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px', padding: '0.4rem 0.85rem',
            }}>
              Simulador em Tempo Real
            </span>
          </div>

          {/* Scenario Tabs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(0,0,0,0.1)',
          }}>
            {Object.entries(scenarios).map(([key, sc]) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                style={{
                  padding: '1rem 1.5rem',
                  fontSize: '0.875rem', fontWeight: selected === key ? 800 : 500,
                  color: selected === key ? 'white' : 'rgba(255,255,255,0.5)',
                  background: selected === key ? 'var(--c-blue)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {sc.name}
              </button>
            ))}
          </div>

          {/* Output Panel */}
          <div style={{ padding: '2.5rem', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                padding: '1.75rem', background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem',
                }}>
                  Tipo de Evento Mecânico Observado
                </div>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  {current.eventType}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--c-green)', fontWeight: 700 }}>
                  ✓ {current.detection}
                </p>
              </div>

              <div style={{
                padding: '1.75rem', background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem',
                }}>
                  Sinal Enviado ao Sistema de Controle
                </div>
                <p style={{
                  fontSize: '0.9375rem', fontFamily: 'IBM Plex Mono, monospace',
                  color: 'var(--c-cyan-glow)', lineHeight: 1.65, fontWeight: 700,
                }}>
                  {current.plcSignal}
                </p>
              </div>
            </div>

            {/* Status + Action Row */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.25rem 1.5rem', background: 'rgba(0,0,0,0.4)',
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: 'var(--r-lg)',
              gap: '1.5rem', flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{
                  ...statusStyle[current.statusType],
                  fontSize: '0.75rem', fontWeight: 800,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '0.4rem 1rem', borderRadius: '6px',
                }}>
                  {current.status}
                </span>
                <span style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                  {current.action}
                </span>
              </div>

              <button
                onClick={onOpenQuote}
                className="btn btn-primary"
                style={{ flexShrink: 0 }}
              >
                Falar com Engenharia LLK
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

