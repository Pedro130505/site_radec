import React, { useState } from 'react';
import { Activity, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const scenarios = {
  normal: {
    name: 'Correia Normal',
    eventType: 'Vibração padrão da estrutura sem choques de impacto.',
    detection: 'Operação dentro do envelope de frequências normais.',
    status: 'Normal', statusType: 'ok',
    plcSignal: 'Sinal Digital 1 (Normalidade) enviado ao PLC',
    action: 'Supervisão sem intervenção.',
  },
  queda: {
    name: 'Queda de Material',
    eventType: 'Impacto rítmico de blocos soltos na calha ou mesa.',
    detection: 'Picos frequenciais de choque mecânico captados pelos sensores.',
    status: 'Alerta de Impacto', statusType: 'warn',
    plcSignal: 'Bit de Alerta de Impacto enviado ao Sistema de Controle',
    action: 'Disparo de aviso sonoro/visual na sala de controle.',
  },
  tira: {
    name: 'Tira Solta',
    eventType: 'Batimento cíclico de alta frequência de aba descolada.',
    detection: 'Frequência característica de impacto de tira solta identificada.',
    status: 'Proteção Ativa', statusType: 'alert',
    plcSignal: 'Sinal de Desarme por Relé Digital enviado ao PLC',
    action: 'Intertravamento automático para evitar arraste da camada.',
  },
  impacto: {
    name: 'Impacto Severo',
    eventType: 'Perfuração de bloco de rocha de grande porte na lona.',
    detection: 'Choque transiente de alta amplitude energética captado.',
    status: 'Proteção Ativa (Trip)', statusType: 'alert',
    plcSignal: 'Abertura imediata do contato de intertravamento',
    action: 'Parada instantânea do acionamento principal.',
  },
  sem_evento: {
    name: 'Sem Evento Mecânico',
    eventType: 'Avaria puramente óptica sem componente de impacto.',
    detection: 'Não — danos sem manifestação vibracional são cobertos pelo RADEC® Visão.',
    status: 'Sem Disparo Vibracional', statusType: 'neutral',
    plcSignal: 'Sem alteração no relé vibracional',
    action: 'Monitoramento complementar efetuado pelo RADEC® Visão.',
  },
};

const statusStyle = {
  ok:      { background: '#DCFCE7', color: '#14532D' },
  warn:    { background: '#FEF3C7', color: '#78350F' },
  alert:   { background: '#FEE2E2', color: '#7F1D1D' },
  neutral: { background: '#F1F5F9', color: '#475569' },
};

export default function RadecVibracional({ onOpenQuote }) {
  const [selected, setSelected] = useState('normal');
  const current = scenarios[selected];

  return (
    <section id="radec-vibracional" style={{
      background: 'var(--c-gray-00)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', maxWidth: '680px' }}>
          <div className="eyebrow">Sensoriamento Frequencial de Choque Mecânico</div>
          <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
            RADEC® Vibracional
          </h2>
          <p className="lead" style={{ fontSize: '1rem' }}>
            Detecta manifestações mecânicas associadas a rasgos, queda de material e tiras soltas, complementando a proteção óptica.
          </p>
        </div>

        {/* Product Overview + Capabilities */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem',
        }}>
          {/* Left: Overview */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{
              width: '44px', height: '44px', background: 'var(--c-navy)',
              borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Activity size={20} color="white" />
            </div>
            <div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 700,
                color: 'var(--c-navy)', marginBottom: '0.5rem',
              }}>
                Substituição Definitiva de Cordas e Bandejas
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--c-gray-04)', lineHeight: 1.7 }}>
                Supera as limitações dos sistemas mecânicos tradicionais. Sensores IP69K instalados nos pontos de travamento reduzem falsas paradas e garantem atuação direta.
              </p>
            </div>
          </div>

          {/* Right: Capabilities */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--c-gray-03)',
            }}>
              Capacidades de Detecção
            </div>
            {[
              'Queda de material e atritos anômalos',
              'Tiras soltas em alta velocidade',
              'Choque por travamento de rocha perfurante',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <CheckCircle size={15} color="var(--c-green)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--c-gray-05)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Scenario Simulator */}
        <div style={{
          border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-xl)', overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
        }}>
          {/* Simulator Header */}
          <div style={{
            padding: '1.5rem 2rem',
            borderBottom: '1px solid var(--c-gray-01)',
            background: 'var(--c-white)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div style={{
                fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--c-gray-03)', marginBottom: '0.25rem',
              }}>
                Demonstração Conceitual Interativa
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 700,
                color: 'var(--c-navy)', letterSpacing: '-0.015em',
              }}>
                Simule como o RADEC® Vibracional responde a eventos mecânicos
              </h3>
            </div>
            <span style={{
              fontSize: '0.6875rem', fontWeight: 600, color: 'var(--c-gray-03)',
              background: 'var(--c-gray-00)', border: '1px solid var(--c-gray-01)',
              borderRadius: '4px', padding: '0.375rem 0.75rem',
            }}>
              Fins ilustrativos
            </span>
          </div>

          {/* Scenario Tabs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            borderBottom: '1px solid var(--c-gray-01)',
            background: 'var(--c-white)',
          }}>
            {Object.entries(scenarios).map(([key, sc]) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                style={{
                  padding: '0.875rem 1.25rem',
                  fontSize: '0.8125rem', fontWeight: selected === key ? 600 : 500,
                  color: selected === key ? 'var(--c-navy)' : 'var(--c-gray-04)',
                  background: 'transparent', border: 'none',
                  borderBottom: selected === key ? '2px solid var(--c-blue)' : '2px solid transparent',
                  cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap',
                }}
              >
                {sc.name}
              </button>
            ))}
          </div>

          {/* Output Panel */}
          <div style={{ padding: '2rem', background: 'var(--c-white)' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem',
            }}>
              <div style={{
                padding: '1.5rem', background: 'var(--c-gray-00)',
                border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--c-gray-03)', marginBottom: '0.625rem',
                }}>Tipo de Evento Mecânico</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--c-gray-05)', lineHeight: 1.65, marginBottom: '0.625rem' }}>
                  {current.eventType}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--c-green)', fontWeight: 600 }}>
                  {current.detection}
                </p>
              </div>
              <div style={{
                padding: '1.5rem', background: 'var(--c-gray-00)',
                border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--c-gray-03)', marginBottom: '0.625rem',
                }}>Enviado ao Sistema de Controle</div>
                <p style={{
                  fontSize: '0.875rem', fontFamily: 'IBM Plex Mono, monospace',
                  color: 'var(--c-navy)', lineHeight: 1.65, fontWeight: 600,
                }}>
                  {current.plcSignal}
                </p>
              </div>
            </div>

            {/* Status Row */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1rem 1.25rem', background: 'var(--c-gray-00)',
              border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
              gap: '1rem', flexWrap: 'wrap',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <span style={{
                  ...statusStyle[current.statusType],
                  fontSize: '0.6875rem', fontWeight: 700,
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  padding: '0.375rem 0.875rem', borderRadius: '4px',
                }}>
                  {current.status}
                </span>
                <span style={{ fontSize: '0.875rem', color: 'var(--c-gray-04)' }}>
                  {current.action}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <Info size={13} color="var(--c-gray-03)" />
                <span style={{ fontSize: '0.75rem', color: 'var(--c-gray-03)' }}>
                  Demonstração interativa com fins ilustrativos.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
