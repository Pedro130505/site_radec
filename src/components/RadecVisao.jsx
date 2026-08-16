import React, { useState } from 'react';
import { Eye, Shield, Cpu, CheckCircle2, Info, ArrowRight, Zap, Scan, RefreshCw } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const differentials = [
  {
    Icon: Eye,
    title: 'Visão Computacional & IA',
    desc: 'Monitora continuamente manifestações geométricas da correia por sensores de imagem de alta definição e algoritmos treinados.',
  },
  {
    Icon: Shield,
    title: 'Sensoriamento Óptico Sem Contato',
    desc: 'Não depende de contato físico ou cordas mecânicas com a correia, eliminando completamente desgaste e atritos.',
  },
  {
    Icon: Cpu,
    title: 'Integração Direta ao CLP',
    desc: 'Informações de diagnóstico e sinais de desarme instantâneo disponíveis via Modbus TCP e Relés ao sistema de controle.',
  },
];

const scenarios = {
  normal: {
    name: 'Correia Normal',
    manifestation: 'Superfície e bordas com geometria preservada, sem anomalias ópticas ou desgarres.',
    status: 'Operação Normal', statusType: 'ok',
    plcSignal: 'Bit 0: Normalidade | Relé de Segurança Fechado (Sinal OK)',
    action: 'Monitoramento contínuo sem necessidade de intervenção.',
  },
  borda: {
    name: 'Rasgo de Borda',
    manifestation: 'Descontinuidade ou fratura observada na borda lateral da correia transportadora.',
    status: 'Alerta de Borda (Nível 2)', statusType: 'warn',
    plcSignal: 'Alarme Borda enviado ao PLC + Sinalização SCADA',
    action: 'Alerta preventivo gerado e preparação para intertravamento automático.',
  },
  abertura: {
    name: 'Rasgo com Abertura',
    manifestation: 'Abertura longitudinal visível com separação e afastamento das faces da lona.',
    status: 'Proteção Ativa (Trip)', statusType: 'alert',
    plcSignal: 'Comando de Intertravamento Imediato enviado ao CLP (<1s)',
    action: 'Desarme automático do motor principal para conter o avanço do rasgo.',
  },
  sobreposicao: {
    name: 'Rasgo com Sobreposição',
    manifestation: 'Superposição de abas de borracha na linha de corte identificada por visão 3D.',
    status: 'Alerta Nível 3', statusType: 'warn',
    plcSignal: 'Alarme de Geometria enviado ao Sistema de Controle',
    action: 'Sinalização para inspeção preventiva na próxima parada programada.',
  },
  central: {
    name: 'Rasgo Central',
    manifestation: 'Linha de fratura central identificada pelas câmeras ópticas de alta taxa de quadros.',
    status: 'Proteção Crítica', statusType: 'alert',
    plcSignal: 'Abertura imediata do circuito de segurança do CLP',
    action: 'Interrupção imediata da alimentação do transportador.',
  },
  desalinhamento: {
    name: 'Desalinhamento',
    manifestation: 'Deslocamento lateral progressivo do eixo da correia em relação às guias.',
    status: 'Alerta de Deslocamento', statusType: 'warn',
    plcSignal: 'Registro de Tendência enviado ao Historiador / SCADA',
    action: 'Alerta em tela para atuação preventiva dos dispositivos de alinhamento.',
  },
};

export default function RadecVisao({ onOpenQuote }) {
  const [selected, setSelected] = useState('normal');
  const current = scenarios[selected];

  const statusStyle = {
    ok:    { background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', border: '1px solid rgba(16, 185, 129, 0.3)' },
    warn:  { background: 'rgba(245, 158, 11, 0.15)', color: '#FBBF24', border: '1px solid rgba(245, 158, 11, 0.3)' },
    alert: { background: 'rgba(239, 68, 68, 0.15)', color: '#F87171', border: '1px solid rgba(239, 68, 68, 0.3)' },
  };

  return (
    <section id="radec-visao" className="section-wrapper-navy">
      <div className="container">

        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4rem' }}>
          <div className="eyebrow eyebrow-dark">
            <Scan size={14} />
            Inspeção Óptica Contínua & Video Analytics
          </div>
          <h2 className="title-h1" style={{ marginBottom: '1.25rem', color: 'white' }}>
            RADEC® Visão — Monitoramento direto da geometria da correia
          </h2>
          <p className="lead lead-white" style={{ fontSize: '1.125rem' }}>
            Sistema de visão computacional projetado para ambientes industriais severos. Detecta descontinuidade e danos estruturais antes da propagação catastrófica.
          </p>
        </div>

        {/* 3 Differential Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem', marginBottom: '4rem',
        }}>
          {differentials.map((d, i) => {
            const Icon = d.Icon;
            return (
              <div key={i} className="card-dark">
                <div style={{
                  width: '48px', height: '48px', background: 'rgba(37, 99, 235, 0.15)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '1.5rem',
                }}>
                  <Icon size={24} color="var(--c-cyan-glow)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                  color: 'white', marginBottom: '0.75rem',
                }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Continuous Flow: Video Stream & AI Neural Filter Pipeline (Replacing Generic Static Boxes) */}
        <div style={{
          background: 'linear-gradient(135deg, var(--c-navy-card) 0%, #0B1D36 100%)',
          borderRadius: 'var(--r-xl)',
          padding: '3rem', marginBottom: '4rem',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div className="eyebrow eyebrow-dark" style={{ marginBottom: '0.35rem' }}>Fluxo de Processamento em Tempo Real</div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                color: 'white', letterSpacing: '-0.02em',
              }}>
                Pipeline de Análise Óptica & Filtragem por IA
              </h3>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.3)',
              borderRadius: '100px', padding: '0.5rem 1.25rem',
            }}>
              <RefreshCw size={14} color="var(--c-cyan-glow)" className="spin-slow" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--c-cyan-glow)', letterSpacing: '0.05em' }}>
                PROCESSAMENTO EM TEMPO REAL
              </span>
            </div>
          </div>

          {/* 3-Step Continuous Pipeline Row with Real PDF Asset Visual */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'stretch',
          }}>
            {/* Step 1: Video Capture */}
            <div style={{
              background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-lg)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, color: 'var(--c-cyan-glow)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ background: 'var(--c-blue)', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>1</span>
                  Captura Óptica em Campo
                </div>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', height: '160px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <img
                    src={getAssetUrl('assets/photos/radec_visao_diagram.png')}
                    alt="Diagrama do RADEC Visao em Operação"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.7)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.6875rem', color: 'white', fontWeight: 700 }}>
                    Câmeras IP66 4K
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Iluminação LED pulsada de alto contraste e enclausuramento sob medida para captação contínua da lona.
                </p>
              </div>
            </div>

            {/* Step 2: Neural AI Matrix */}
            <div style={{
              background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.25)',
              borderRadius: 'var(--r-lg)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, color: 'var(--c-cyan-glow)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ background: 'var(--c-blue)', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>2</span>
                  Filtragem Neuronal de IA
                </div>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', height: '160px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <img
                    src={getAssetUrl('assets/photos/radec_ai_neural_vision.jpg')}
                    alt="Visão Computacional & Matriz Neuronal IA"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', background: 'rgba(16, 185, 129, 0.9)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.6875rem', color: 'white', fontWeight: 800 }}>
                    Imune a Poeira & Sol
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Distingue instantaneamente sujeiras inofensivas de rasgos e fraturas estruturais reais.
                </p>
              </div>
            </div>

            {/* Step 3: Direct PLC Trip */}
            <div style={{
              background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-lg)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, color: '#34D399',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ background: '#10B981', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>3</span>
                  Intertravamento em CLP (&lt;1s)
                </div>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', height: '160px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <img
                    src={getAssetUrl('assets/photos/Apresentao_p10_170.png')}
                    alt="Integração de Automação com CLP"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', background: 'rgba(239, 68, 68, 0.9)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.6875rem', color: 'white', fontWeight: 800 }}>
                    Relé de Desarme Ativo
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Sinal digital direto ao circuito de emergência do transportador para contenção imediata.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Differential Cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem', marginBottom: '4rem',
        }}>
          {differentials.map((d, i) => {
            const Icon = d.Icon;
            return (
              <div key={i} className="card-dark">
                <div style={{
                  width: '48px', height: '48px', background: 'rgba(37, 99, 235, 0.15)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', marginBottom: '1.5rem',
                }}>
                  <Icon size={24} color="var(--c-cyan-glow)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                  color: 'white', marginBottom: '0.75rem',
                }}>
                  {d.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.65 }}>
                  {d.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Continuous Flow: Video Stream & AI Neural Filter Pipeline (Replacing Generic Static Boxes) */}
        <div style={{
          background: 'linear-gradient(135deg, var(--c-navy-card) 0%, #0B1D36 100%)',
          borderRadius: 'var(--r-xl)',
          padding: '3rem', marginBottom: '4rem',
          border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <div>
              <div className="eyebrow eyebrow-dark" style={{ marginBottom: '0.35rem' }}>Fluxo de Processamento em Tempo Real</div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                color: 'white', letterSpacing: '-0.02em',
              }}>
                Pipeline de Análise Óptica & Filtragem por IA
              </h3>
            </div>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.3)',
              borderRadius: '100px', padding: '0.5rem 1.25rem',
            }}>
              <RefreshCw size={14} color="var(--c-cyan-glow)" className="spin-slow" />
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: 'var(--c-cyan-glow)', letterSpacing: '0.05em' }}>
                FLUXO ATIVO · 60 FPS
              </span>
            </div>
          </div>

          {/* 3-Step Continuous Pipeline Row with Real PDF Asset Visual */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'stretch',
          }}>
            {/* Step 1: Video Capture */}
            <div style={{
              background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-lg)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, color: 'var(--c-cyan-glow)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ background: 'var(--c-blue)', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>1</span>
                  Captura Óptica em Campo
                </div>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', height: '160px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <img
                    src={getAssetUrl('assets/photos/radec_visao_diagram.png')}
                    alt="Diagrama do RADEC Visao em Operação"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0.5rem', right: '0.5rem', background: 'rgba(0,0,0,0.7)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.6875rem', color: 'white', fontWeight: 700 }}>
                    Câmeras IP66 4K
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Iluminação LED pulsada de alto contraste e enclausuramento sob medida para captação contínua da lona.
                </p>
              </div>
            </div>

            {/* Step 2: Neural AI Matrix */}
            <div style={{
              background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.25)',
              borderRadius: 'var(--r-lg)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, color: 'var(--c-cyan-glow)',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ background: 'var(--c-blue)', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>2</span>
                  Filtragem Neuronal de IA
                </div>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', height: '160px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <img
                    src={getAssetUrl('assets/photos/Apresentao_p12_124.png')}
                    alt="Processamento Neuronal de Imagem"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', background: 'rgba(16, 185, 129, 0.9)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.6875rem', color: 'white', fontWeight: 800 }}>
                    Imune a Poeira & Sol
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Distingue instantaneamente sujeiras inofensivas de rasgos e fraturas estruturais reais.
                </p>
              </div>
            </div>

            {/* Step 3: Direct PLC Trip */}
            <div style={{
              background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-lg)', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            }}>
              <div>
                <div style={{
                  fontSize: '0.75rem', fontWeight: 800, color: '#34D399',
                  letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}>
                  <span style={{ background: '#10B981', color: 'white', width: '22px', height: '22px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>3</span>
                  Intertravamento em CLP (&lt;1s)
                </div>
                <div style={{ borderRadius: 'var(--r-md)', overflow: 'hidden', height: '160px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                  <img
                    src={getAssetUrl('assets/photos/Apresentao_p10_170.png')}
                    alt="Integração de Automação com CLP"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', bottom: '0.5rem', left: '0.5rem', background: 'rgba(239, 68, 68, 0.9)', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.6875rem', color: 'white', fontWeight: 800 }}>
                    Relé de Desarme Ativo
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  Sinal digital direto ao circuito de emergência do transportador para contenção imediata.
                </p>
              </div>
            </div>
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
                Simule como o RADEC® Visão interpreta a condição da correia
              </h3>
            </div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '6px', padding: '0.4rem 0.85rem',
            }}>
              Demonstração interativa com fins ilustrativos.
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
                  Manifestação Óptica Observada
                </div>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65 }}>
                  {current.manifestation}
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
                  Resposta Enviada ao CLP da Planta
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Info size={15} color="rgba(255,255,255,0.4)" />
                <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.4)' }}>
                  Intertravamento via rede Modbus TCP e Saída Digital de Segurança.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
