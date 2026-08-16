import React, { useState } from 'react';
import { Eye, Network, Cpu, Bell, CheckCircle2, ShieldCheck, Activity, ShieldAlert, Server } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

const telemetryTabs = [
  {
    id: 'optica',
    title: 'Condição Óptica & Lentes',
    Icon: Eye,
    status: 'ONLINE · 100% OK',
    color: '#10B981',
    desc: 'Supervisão automatizada de nitidez, poeira acumulada na lente e variação de iluminação LED.',
    items: ['Autolimpeza e controle térmico dos gabinetes IP66', 'Alertas de obstrução parcial da visão', 'Compensação automática de contraste solar'],
    pdfVisual: getAssetUrl('assets/photos/Apresentao_p8_38.png'),
  },
  {
    id: 'comunicacao',
    title: 'Integridade de Rede & Modbus',
    Icon: Network,
    status: 'MODBUS TCP · ATIVO',
    color: '#3B82F6',
    desc: 'Validação contínua da pulsação de heartbeat e integridade do cabo de fibra/ethernet industrial.',
    items: ['Detecção instantânea de ruptura de cabo de rede', 'Watchdog timer com fail-safe ativado', 'Envio simultâneo para SCADA local e servidor Cloud'],
    pdfVisual: getAssetUrl('assets/photos/Apresentao_p16_74.png'),
  },
  {
    id: 'hardware',
    title: 'Saúde de Câmeras & Acelerômetros',
    Icon: Cpu,
    status: 'SENSORES IP69K · OK',
    color: '#8B5CF6',
    desc: 'Diagnóstico de temperatura interna do gabinete, alimentação 24VDC e integridade física dos coxins.',
    items: ['Monitoramento térmico e sensores de umidade interna', 'Verificação de alimentação de backup (Nobreak)', 'Detecção de vibração parasita no suporte'],
    pdfVisual: getAssetUrl('assets/photos/radec_vibracional_diagram.png'),
  },
];

export default function SelfDiagnosisSection() {
  const [activeTab, setActiveTab] = useState('optica');
  const current = telemetryTabs.find(t => t.id === activeTab);

  return (
    <section id="autodiagnostico" className="section-wrapper-light">
      <div className="container">

        {/* Asymmetric Left-Aligned Header (Eliminating Centered Squished Layout) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '3.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--c-gray-01)',
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>
              <ShieldCheck size={14} />
              Confiabilidade & Autodiagnóstico Integrado
            </div>
            <h2 className="title-h1" style={{ color: 'var(--c-navy-deep)', lineHeight: 1.08 }}>
              Proteção também exige saber<br />
              <span style={{ color: 'var(--c-blue)' }}>quando o sistema precisa de atenção</span>
            </h2>
          </div>

          <div>
            <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--c-gray-04)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              O RADEC disponibiliza estados de diagnóstico relacionados ao próprio sistema e à validade das informações utilizadas no monitoramento.
            </p>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              background: 'var(--c-navy-deep)', color: 'white',
              padding: '0.75rem 1.25rem', borderRadius: 'var(--r-lg)',
              boxShadow: '0 4px 14px rgba(6,19,41,0.2)',
            }}>
              <Bell size={18} color="var(--c-cyan-glow)" />
              <span style={{ fontSize: '0.875rem', fontWeight: 800 }}>
                Mais de 30 canais de alarme configuráveis no SCADA / CLP
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Telemetry Dashboard (Replacing Static Boxes & Centered Blocks) */}
        <div style={{
          background: 'var(--c-white)',
          border: '1px solid var(--c-gray-01)',
          borderRadius: 'var(--r-xl)',
          boxShadow: '0 10px 35px rgba(0,0,0,0.04)',
          overflow: 'hidden',
        }}>
          {/* Tab Navigation */}
          <div style={{
            display: 'flex', borderBottom: '1px solid var(--c-gray-01)',
            background: 'var(--c-gray-00)', flexWrap: 'wrap',
          }}>
            {telemetryTabs.map(t => {
              const Icon = t.Icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  style={{
                    flex: 1, padding: '1.25rem 1.75rem', minWidth: '220px',
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    background: isActive ? 'var(--c-white)' : 'transparent',
                    border: 'none',
                    borderBottom: isActive ? '3px solid var(--c-blue)' : '3px solid transparent',
                    cursor: 'pointer', transition: 'all 0.18s ease',
                  }}
                >
                  <div style={{
                    width: '36px', height: '36px',
                    background: isActive ? 'rgba(21, 87, 212, 0.1)' : 'var(--c-gray-01)',
                    borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={18} color={isActive ? 'var(--c-blue)' : 'var(--c-gray-04)'} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{
                      fontFamily: 'Outfit, sans-serif', fontSize: '0.9375rem', fontWeight: 800,
                      color: isActive ? 'var(--c-navy-deep)' : 'var(--c-gray-04)',
                    }}>
                      {t.title}
                    </div>
                    <span style={{ fontSize: '0.6875rem', fontFamily: 'IBM Plex Mono, monospace', fontWeight: 700, color: t.color }}>
                      {t.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Content Showcase with Authentic Technical Diagram */}
          <div style={{
            padding: '3rem',
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem', alignItems: 'center',
          }}>
            {/* Left: Telemetry Details */}
            <div>
              <div style={{
                display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '6px',
                fontSize: '0.75rem', fontWeight: 800, color: '#059669', marginBottom: '1rem',
                textTransform: 'uppercase', letterSpacing: '0.08em',
              }}>
                Canal de Diagnóstico Ativo
              </div>

              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 800,
                color: 'var(--c-navy-deep)', marginBottom: '1rem', letterSpacing: '-0.025em',
              }}>
                {current.title}
              </h3>

              <p style={{ fontSize: '1rem', color: 'var(--c-gray-05)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {current.desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {current.items.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.875rem',
                    padding: '1rem 1.25rem', background: 'var(--c-gray-00)',
                    border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-md)',
                  }}>
                    <CheckCircle2 size={20} color="var(--c-blue)" />
                    <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--c-gray-06)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: PDF Technical Asset Visual */}
            <div style={{
              borderRadius: 'var(--r-xl)', overflow: 'hidden',
              border: '1px solid var(--c-gray-01)', boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
              position: 'relative', background: 'var(--c-gray-00)',
            }}>
              <img
                src={current.pdfVisual}
                alt={current.title}
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem',
                background: 'rgba(6, 19, 41, 0.9)', backdropFilter: 'blur(8px)',
                padding: '0.875rem 1.25rem', borderRadius: 'var(--r-md)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: '0.8125rem', color: 'white', fontWeight: 700 }}>
                  Telemetria de Campo — Documentação Técnica LLK
                </span>
                <span style={{ fontSize: '0.75rem', fontFamily: 'IBM Plex Mono, monospace', color: 'var(--c-cyan-glow)', fontWeight: 800 }}>
                  STATUS 100% OK
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

