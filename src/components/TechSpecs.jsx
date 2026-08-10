import React from 'react';
import { Cpu, ShieldCheck, ArrowRight } from 'lucide-react';

const specs = {
  visao: [
    { label: 'Alimentação', value: '127/220 VAC' },
    { label: 'Comunicação', value: 'Modbus TCP' },
    { label: 'Grau de Proteção', value: 'IP66' },
    { label: 'Enclausuramento', value: 'Variável conforme largura da correia' },
    { label: 'Escopo de Fornecimento', value: 'Câmeras, painel e enclausuramento' },
  ],
  vibracional: [
    { label: 'Alimentação', value: '127/220 VAC' },
    { label: 'Comunicação', value: 'Saída digital / relé' },
    { label: 'Grau de Proteção', value: 'IP69K' },
    { label: 'Enclausuramento', value: 'Variável conforme largura da correia' },
    { label: 'Escopo de Fornecimento', value: 'Estrutura, painel elétrico e coxins' },
  ],
};

function SpecCard({ title, label, Icon, specsData, idealFor }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        paddingBottom: '1.25rem', marginBottom: '1.25rem',
        borderBottom: '1px solid var(--c-gray-01)',
      }}>
        <div>
          <span style={{
            fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--c-blue)',
            display: 'block', marginBottom: '0.375rem',
          }}>
            {label}
          </span>
          <h3 style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 700,
            color: 'var(--c-navy)', letterSpacing: '-0.02em',
          }}>
            {title}
          </h3>
        </div>
        <div style={{
          width: '44px', height: '44px', background: 'var(--c-navy)',
          borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon size={20} color="white" />
        </div>
      </div>

      {/* Specs List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '1.25rem', flex: 1 }}>
        {specsData.map((spec, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
            padding: '0.875rem 0', gap: '1rem',
            borderBottom: i < specsData.length - 1 ? '1px solid var(--c-gray-01)' : 'none',
          }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--c-gray-04)', fontWeight: 500 }}>
              {spec.label}
            </span>
            <span style={{
              fontSize: '0.8125rem', fontFamily: 'IBM Plex Mono, monospace',
              fontWeight: 600, color: 'var(--c-navy)', textAlign: 'right',
            }}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Ideal For */}
      <div style={{
        background: 'var(--c-gray-00)', border: '1px solid var(--c-gray-01)',
        borderRadius: 'var(--r-lg)', padding: '1rem',
        fontSize: '0.8125rem', color: 'var(--c-gray-04)', lineHeight: 1.65,
      }}>
        <span style={{ fontWeight: 700, color: 'var(--c-gray-05)', display: 'block', marginBottom: '0.25rem' }}>
          Ideal para:
        </span>
        {idealFor}
      </div>
    </div>
  );
}

export default function TechSpecs({ onOpenQuote }) {
  return (
    <section id="especificacoes" style={{
      background: 'var(--c-white)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow">Ficha Técnica Oficial</div>
          <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
            Especificações Técnicas RADEC®
          </h2>
          <p className="lead" style={{ fontSize: '1rem' }}>
            Parâmetros elétricos, protocolos de rede e grau de proteção dos gabinetes industriais.
          </p>
        </div>

        {/* 2-Column Datasheet */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem',
        }}>
          <SpecCard
            title="RADEC® Visão"
            label="Inspeção Óptica"
            Icon={Cpu}
            specsData={specs.visao}
            idealFor="Detecção direta de rasgos de borda, centrais, com abertura, sobreposição e desalinhamento geométrico sem contato físico."
          />
          <SpecCard
            title="RADEC® Vibracional"
            label="Sensoriamento Mecânico"
            Icon={ShieldCheck}
            specsData={specs.vibracional}
            idealFor="Detecção direta de queda de material, tiras soltas descoladas e eventos de choque mecânico severo no transportador."
          />
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <button onClick={onOpenQuote} className="btn btn-primary btn-lg">
            Solicitar Especificação para Minha Planta
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
