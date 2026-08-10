import React from 'react';
import { Eye, Network, Cpu, Bell, CheckCircle, ShieldCheck } from 'lucide-react';

const blocks = [
  {
    title: 'Condição óptica',
    desc: 'Verifica se a informação visual está adequada para o monitoramento.',
    Icon: Eye,
    items: ['Qualidade das imagens', 'Iluminação e contraste', 'Obstrução ou sujeira nas lentes'],
  },
  {
    title: 'Comunicação',
    desc: 'Monitora continuamente a comunicação entre os componentes do sistema.',
    Icon: Network,
    items: ['Status da rede e protocolos', 'Conexões e integridade dos dados', 'Falhas ou perda de comunicação'],
  },
  {
    title: 'Estado dos dispositivos',
    desc: 'Acompanha o estado dos equipamentos e seus componentes.',
    Icon: Cpu,
    items: ['Câmeras e sensores', 'Processamento e armazenamento', 'Temperatura e alimentação'],
  },
];

export default function SelfDiagnosisSection() {
  return (
    <section id="autodiagnostico" style={{
      background: 'var(--c-white)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow">Confiabilidade Integrada</div>
          <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
            Proteção também exige saber quando o sistema precisa de atenção
          </h2>
          <p className="lead" style={{ fontSize: '1rem' }}>
            O RADEC® disponibiliza estados de diagnóstico relacionados ao próprio sistema e à validade das informações utilizadas no monitoramento.
          </p>
        </div>

        {/* Diagnostic Blocks Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--c-gray-01)',
          border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-xl)',
          overflow: 'hidden', marginBottom: '2rem',
        }}>
          {blocks.map((block, i) => {
            const Icon = block.Icon;
            return (
              <div key={i} style={{ background: 'var(--c-white)', padding: '2.25rem 2rem' }}>
                <div style={{
                  width: '44px', height: '44px',
                  background: 'rgba(21, 87, 212, 0.08)',
                  borderRadius: 'var(--r-md)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  <Icon size={20} color="var(--c-blue)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.0625rem', fontWeight: 700,
                  color: 'var(--c-navy)', marginBottom: '0.375rem',
                }}>
                  {block.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--c-gray-04)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
                  {block.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {block.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={13} color="var(--c-blue)" />
                      <span style={{ fontSize: '0.8125rem', color: 'var(--c-gray-05)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 30+ Alarms Banner */}
        <div style={{
          background: 'var(--c-navy)',
          borderRadius: 'var(--r-xl)',
          padding: '2rem 2.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '52px', height: '52px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: 'var(--r-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.08)',
              flexShrink: 0,
            }}>
              <Bell size={22} color="rgba(255,255,255,0.7)" />
            </div>
            <div>
              <h4 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 700,
                color: 'white', letterSpacing: '-0.02em', marginBottom: '0.25rem',
              }}>
                Mais de 30 alarmes configuráveis
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
                Alarmes ajustáveis de acordo com a criticidade da operação e a estratégia de proteção da planta.
              </p>
            </div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 'var(--r-lg)', padding: '0.875rem 1.375rem',
            flexShrink: 0,
          }}>
            <ShieldCheck size={16} color="rgba(255,255,255,0.5)" />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(255,255,255,0.7)' }}>
              Integrado ao PLC / SCADA
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
