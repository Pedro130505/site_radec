import React, { useState } from 'react';
import { Eye, Search, Bell, Cpu, ShieldAlert, ArrowRight, Zap, CheckCircle2, Timer } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const pipelineStages = [
  {
    step: '01',
    time: '0 ms',
    title: 'Ocorrência do Dano',
    sub: 'Rasgo ou Impacto de Rocha',
    desc: 'Um perfurante ou faca de minério rasga a lona da correia em alta velocidade.',
    Icon: ShieldAlert,
    badgeColor: '#F87171',
    detail: 'Manifestação física inicial na lona da correia transportadora.',
    action: 'Gatilho de sensoriamento contínuo ativado.',
  },
  {
    step: '02',
    time: '&lt; 100 ms',
    title: 'Detecção Óptica & Vibracional',
    sub: 'Câmeras 4K & Acelerômetros',
    desc: 'Câmeras IP66 e acelerômetros captam a alteração na geometria e o choque mecânico.',
    Icon: Eye,
    badgeColor: '#FBBF24',
    detail: 'Captação instantânea de quadros em 60 FPS e frequência vibracional.',
    action: 'Envio para a unidade de processamento local.',
  },
  {
    step: '03',
    time: '&lt; 300 ms',
    title: 'Validação por IA',
    sub: 'Filtragem Neuronal',
    desc: 'A inteligência artificial analisa o padrão e confirma a falha real, descartando poeira e sombras.',
    Icon: Search,
    badgeColor: '#60A5FA',
    detail: 'Imunidade total a falsos disparos provocados por sol ou sujeira.',
    action: 'Confirmação de alarme de nível crítico.',
  },
  {
    step: '04',
    time: '&lt; 500 ms',
    title: 'Sinal ao CLP da Planta',
    sub: 'Modbus TCP & Relé Digital',
    desc: 'Transmissão em tempo real da mensagem de desarme e bit de status ao sistema SCADA.',
    Icon: Cpu,
    badgeColor: '#34D399',
    detail: 'Comunicação via protocolo industrial nativo com o painel principal.',
    action: 'Abertura de relé de segurança dedicado.',
  },
  {
    step: '05',
    time: '&lt; 1.0 s',
    title: 'Intertravamento Total',
    sub: 'Desarme Ativo do Motor',
    desc: 'Abertura imediata do contator de potência do motor principal, contendo o avanço do rasgo.',
    Icon: Timer,
    badgeColor: '#A78BFA',
    detail: 'Parada imediata do acionamento do transportador.',
    action: 'Economia estimada de milhares de metros de correia rasgada.',
  },
];

export default function ActiveProtectionSection() {
  const [activeStageIndex, setActiveStageIndex] = useState(2);
  const currentStage = pipelineStages[activeStageIndex];

  return (
    <section id="protecao-ativa" className="section-wrapper-navy">
      <div className="container">

        {/* Asymmetric Header (Eliminating Centered Layout) */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3.5rem', alignItems: 'center', marginBottom: '4rem',
          paddingBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          <div>
            <div className="eyebrow eyebrow-dark" style={{ marginBottom: '1rem' }}>
              <Zap size={14} />
              Intertravamento & Automação em &lt;1 Segundo
            </div>
            <h2 className="title-h1" style={{ color: 'white', lineHeight: 1.05 }}>
              Mais que monitoramento.<br />
              <span style={{ color: 'var(--c-cyan-glow)' }}>Proteção ativa instantânea.</span>
            </h2>
          </div>

          <div>
            <p className="lead lead-white" style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Um fluxo de resposta sequencial ultra-rápido projetado para atuar no circuito de emergência do CLP em menos de 1 segundo, contendo o dano antes de causar paradas de dias.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                padding: '0.625rem 1.125rem', borderRadius: 'var(--r-md)',
                fontSize: '0.8125rem', fontWeight: 800, color: 'white',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <Timer size={16} color="var(--c-cyan-glow)" />
                Atuação no CLP em &lt;1000ms
              </div>

              <div style={{
                background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '0.625rem 1.125rem', borderRadius: 'var(--r-md)',
                fontSize: '0.8125rem', fontWeight: 800, color: '#34D399',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <CheckCircle2 size={16} color="#34D399" />
                Fail-Safe Garantido
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Sequential Flow Visual Bar (Fast Visual Association) */}
        <div style={{
          background: 'var(--c-navy-card)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 'var(--r-xl)', padding: '2.5rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
          marginBottom: '3rem',
        }}>
          <div style={{
            fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem',
          }}>
            Clique em cada etapa para visualizar a sequência de telemetria em tempo real:
          </div>

          {/* Interactive Pipeline Steps */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem',
            position: 'relative', marginBottom: '2.5rem',
          }}>
            {pipelineStages.map((st, i) => {
              const Icon = st.Icon;
              const isActive = activeStageIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => setActiveStageIndex(i)}
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #1E40AF 0%, #1557D4 100%)' : 'rgba(255,255,255,0.03)',
                    border: isActive ? '1px solid var(--c-cyan-glow)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--r-lg)', padding: '1.5rem 1.25rem',
                    textAlign: 'left', cursor: 'pointer', transition: 'all 0.2s ease',
                    boxShadow: isActive ? '0 10px 25px rgba(21, 87, 212, 0.4)' : 'none',
                    transform: isActive ? 'translateY(-3px)' : 'none',
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem',
                  }}>
                    <span style={{
                      fontSize: '0.75rem', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800,
                      color: isActive ? 'white' : 'rgba(255,255,255,0.4)',
                    }}>
                      PASSO {st.step}
                    </span>
                    <span style={{
                      fontSize: '0.75rem', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 800,
                      color: st.badgeColor, background: 'rgba(0,0,0,0.3)', padding: '0.2rem 0.5rem', borderRadius: '4px',
                    }}>
                      {st.time}
                    </span>
                  </div>

                  <div style={{
                    width: '38px', height: '38px',
                    background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.05)',
                    borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem',
                  }}>
                    <Icon size={20} color={isActive ? 'white' : st.badgeColor} />
                  </div>

                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1rem', fontWeight: 800,
                    color: 'white', lineHeight: 1.2, marginBottom: '0.35rem',
                  }}>
                    {st.title}
                  </h3>

                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                    {st.sub}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Telemetry Display Card */}
          <div style={{
            background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 'var(--r-lg)', padding: '2rem 2.5rem',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center',
          }}>
            <div>
              <div style={{
                fontSize: '0.75rem', fontWeight: 800, color: currentStage.badgeColor,
                letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem',
                fontFamily: 'IBM Plex Mono, monospace',
              }}>
                TELEMETRIA PASSO {currentStage.step} · TEMPO DE RESPOSTA: {currentStage.time}
              </div>

              <h4 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800,
                color: 'white', marginBottom: '0.875rem',
              }}>
                {currentStage.title} — {currentStage.sub}
              </h4>

              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, marginBottom: '1rem' }}>
                {currentStage.desc}
              </p>
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 'var(--r-md)', padding: '1.5rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                Ação no Sistema da Planta
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'white', fontWeight: 700, lineHeight: 1.5, marginBottom: '0.75rem' }}>
                ✓ {currentStage.action}
              </p>
              <span style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)' }}>
                {currentStage.detail}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Direct Guarantee Card */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.2) 0%, rgba(16, 185, 129, 0.2) 100%)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 'var(--r-lg)',
          padding: '1.75rem 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Zap size={24} color="var(--c-cyan-glow)" />
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 800, color: 'white' }}>
                Garantia de Atendimento & Intertravamento Imediato
              </div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                Do sensoriamento sem contato à atuação no contator do motor em fração de segundo.
              </div>
            </div>
          </div>

          <a href="#contato" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Solicitar Análise para Minha Planta
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

