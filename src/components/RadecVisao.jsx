import React, { useState } from 'react';
import { Eye, Shield, Cpu, CheckCircle, Info, ArrowRight, Zap } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const differentials = [
  {
    Icon: Eye,
    title: 'Visão computacional',
    desc: 'Monitora continuamente manifestações geométricas da correia por sensores de imagem de alta definição.',
  },
  {
    Icon: Shield,
    title: 'Monitoramento sem contato',
    desc: 'Não depende de contato mecânico com a correia, eliminando desgaste e risco de quebra física.',
  },
  {
    Icon: Cpu,
    title: 'Integração industrial',
    desc: 'Informações de diagnóstico, alarme e proteção disponíveis via Modbus TCP e Relé ao sistema de controle.',
  },
];

const scenarios = {
  normal: {
    name: 'Correia Normal',
    manifestation: 'Superfície e bordas com geometria preservada, sem anomalias ópticas.',
    status: 'Normal', statusType: 'ok',
    plcSignal: 'Sinal OK — Relé Fechado / Modbus Bit 0: Normal',
    action: 'Monitoramento contínuo sem necessidade de intervenção.',
  },
  borda: {
    name: 'Rasgo de Borda',
    manifestation: 'Descontinuidade ou fratura observada na borda lateral da correia.',
    status: 'Alerta de Borda', statusType: 'warn',
    plcSignal: 'Alarme Borda + Bit de Proteção Nível 2 enviado ao PLC',
    action: 'Notificação no SCADA e preparação para intertravamento.',
  },
  abertura: {
    name: 'Rasgo com Abertura',
    manifestation: 'Abertura longitudinal visível com separação das faces da lona.',
    status: 'Proteção Ativa', statusType: 'alert',
    plcSignal: 'Comando de Intertravamento Imediato enviado ao PLC',
    action: 'Desarme automático do motor para conter o avanço do rasgo.',
  },
  sobreposicao: {
    name: 'Rasgo com Sobreposição',
    manifestation: 'Superposição de abas da borracha na linha de corte.',
    status: 'Alerta Nível 3', statusType: 'warn',
    plcSignal: 'Alarme de Geometria enviado ao Sistema de Controle',
    action: 'Sinalização para inspeção preventiva na próxima parada.',
  },
  central: {
    name: 'Rasgo Central',
    manifestation: 'Linha de fratura central identificada pelas câmeras ópticas.',
    status: 'Proteção Ativa (Crítico)', statusType: 'alert',
    plcSignal: 'Comando de Parada de Emergência enviado ao PLC',
    action: 'Interrupção imediata da alimentação do transportador.',
  },
  desalinhamento: {
    name: 'Desalinhamento',
    manifestation: 'Deslocamento lateral do eixo da correia em relação aos roletes.',
    status: 'Alerta de Deslocamento', statusType: 'warn',
    plcSignal: 'Registro de Tendência de Desalinhamento enviado ao SCADA',
    action: 'Alerta para atuação dos dispositivos de alinhamento.',
  },
};

export default function RadecVisao({ onOpenQuote }) {
  const [selected, setSelected] = useState('normal');
  const current = scenarios[selected];

  const statusStyle = {
    ok:    { background: '#DCFCE7', color: '#14532D' },
    warn:  { background: '#FEF3C7', color: '#78350F' },
    alert: { background: '#FEE2E2', color: '#7F1D1D' },
  };
  const st = statusStyle[current.statusType];

  return (
    <section id="radec-visao" style={{
      background: 'var(--c-white)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
          <div className="eyebrow">Visão Computacional & Video Analytics</div>
          <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
            RADEC® Visão — A correia é monitorada diretamente
          </h2>
          <p className="lead" style={{ fontSize: '1rem' }}>
            Sistema de inspeção óptica contínua para detecção precoce de alterações geométricas e danos estruturais na correia transportadora.
          </p>
        </div>

        {/* Differentials Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--c-gray-01)',
          border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-xl)',
          overflow: 'hidden', marginBottom: '3rem',
        }}>
          {differentials.map((d, i) => {
            const Icon = d.Icon;
            return (
              <div key={i} style={{
                background: 'var(--c-white)', padding: '2rem',
              }}>
                <div style={{
                  width: '44px', height: '44px', background: 'rgba(21, 87, 212, 0.08)',
                  borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '1.25rem',
                }}>
                  <Icon size={20} color="var(--c-blue)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 600,
                  color: 'var(--c-navy)', marginBottom: '0.5rem',
                }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--c-gray-04)', lineHeight: 1.65 }}>
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* AI Validation Banner */}
        <div style={{
          background: 'var(--c-navy)', borderRadius: 'var(--r-xl)',
          padding: '2rem 2.5rem', marginBottom: '3rem',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center',
        }}>
          <div>
            <div style={{
              fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.625rem',
            }}>
              Algoritmo de Filtragem Inteligente
            </div>
            <h3 style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 700,
              color: 'white', marginBottom: '0.75rem', letterSpacing: '-0.02em',
            }}>
              Validação por Inteligência Artificial
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: '560px' }}>
              Uma camada de IA auxilia na validação das condições ópticas observadas, aumentando a robustez frente a interferências ambientais como variações de iluminação e presença de poeira suspensa.
            </p>
          </div>
          <div style={{
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 'var(--r-lg)', padding: '1.25rem 1.5rem', minWidth: '220px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Zap size={14} color="#FCD34D" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
                Robustez Operacional
              </span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
              Distingue sombras, sujeira inofensiva e vibrações normais de rasgos e desgarres estruturais reais.
            </p>
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
            background: 'var(--c-gray-00)',
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
                Simule como o RADEC® Visão interpreta a condição da correia
              </h3>
            </div>
            <span style={{
              fontSize: '0.6875rem', fontWeight: 600, color: 'var(--c-gray-03)',
              background: 'var(--c-white)', border: '1px solid var(--c-gray-01)',
              borderRadius: '4px', padding: '0.375rem 0.75rem',
            }}>
              Fins ilustrativos
            </span>
          </div>

          {/* Scenario Tabs */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0',
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
                  background: 'transparent',
                  border: 'none',
                  borderBottom: selected === key ? '2px solid var(--c-blue)' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {sc.name}
              </button>
            ))}
          </div>

          {/* Output Panel */}
          <div style={{ padding: '2rem', background: 'var(--c-white)' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                padding: '1.5rem', background: 'var(--c-gray-00)',
                border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--c-gray-03)', marginBottom: '0.625rem',
                }}>
                  Manifestação Observada
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--c-gray-05)', lineHeight: 1.65 }}>
                  {current.manifestation}
                </p>
              </div>
              <div style={{
                padding: '1.5rem', background: 'var(--c-gray-00)',
                border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
              }}>
                <div style={{
                  fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
                  textTransform: 'uppercase', color: 'var(--c-gray-03)', marginBottom: '0.625rem',
                }}>
                  Informação Enviada ao Sistema de Controle
                </div>
                <p style={{
                  fontSize: '0.875rem', fontFamily: 'IBM Plex Mono, monospace',
                  color: 'var(--c-navy)', lineHeight: 1.65, fontWeight: 600,
                }}>
                  {current.plcSignal}
                </p>
              </div>
            </div>

            {/* Status + Action Row */}
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
