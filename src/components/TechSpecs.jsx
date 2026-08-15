import React from 'react';
import { Cpu, ShieldCheck, ArrowRight, FileText } from 'lucide-react';

const specs = {
  visao: [
    { label: 'Alimentação Elétrica', value: '127/220 VAC (Monofásico)' },
    { label: 'Comunicação / Automação', value: 'Modbus TCP / Ethernet Industrial' },
    { label: 'Grau de Proteção', value: 'IP66 Industrial Enclosure' },
    { label: 'Enclausuramento Estrutural', value: 'Variável conforme largura da correia (800mm a 2400mm)' },
    { label: 'Escopo de Fornecimento', value: 'Câmeras ópticas, painel de processamento e iluminação LED' },
  ],
  vibracional: [
    { label: 'Alimentação Elétrica', value: '127/220 VAC / 24 VDC' },
    { label: 'Comunicação / Automação', value: 'Saída Digital / Contato de Relé de Segurança' },
    { label: 'Grau de Proteção', value: 'IP69K (Imersão e Alta Pressão)' },
    { label: 'Enclausuramento Estrutural', value: 'Suportes modulares para mesa de impacto' },
    { label: 'Escopo de Fornecimento', value: 'Acelerômetros industriais, painel de relés e coxins' },
  ],
};

function SpecCard({ title, label, Icon, specsData, idealFor }) {
  return (
    <div className="card-light" style={{ display: 'flex', flexDirection: 'column', padding: '2.5rem' }}>
      <div style={{
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        paddingBottom: '1.5rem', marginBottom: '1.5rem',
        borderBottom: '1px solid var(--c-gray-01)',
      }}>
        <div>
          <span style={{
            fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-blue)',
            display: 'block', marginBottom: '0.35rem',
          }}>
            {label}
          </span>
          <h3 style={{
            fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
            color: 'var(--c-navy-deep)', letterSpacing: '-0.025em',
          }}>
            {title}
          </h3>
        </div>
        <div style={{
          width: '48px', height: '48px', background: 'var(--c-navy-deep)',
          borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
          justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 12px rgba(6,19,41,0.15)',
        }}>
          <Icon size={22} color="white" />
        </div>
      </div>

      {/* Specs List */}
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.75rem', flex: 1 }}>
        {specsData.map((spec, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
            padding: '1rem 0', gap: '1.5rem',
            borderBottom: i < specsData.length - 1 ? '1px solid var(--c-gray-01)' : 'none',
          }}>
            <span style={{ fontSize: '0.875rem', color: 'var(--c-gray-04)', fontWeight: 600 }}>
              {spec.label}
            </span>
            <span style={{
              fontSize: '0.875rem', fontFamily: 'IBM Plex Mono, monospace',
              fontWeight: 700, color: 'var(--c-navy-deep)', textAlign: 'right',
            }}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Ideal For */}
      <div style={{
        background: 'var(--c-gray-00)', border: '1px solid var(--c-gray-01)',
        borderRadius: 'var(--r-lg)', padding: '1.25rem',
        fontSize: '0.875rem', color: 'var(--c-gray-05)', lineHeight: 1.65,
      }}>
        <span style={{ fontWeight: 800, color: 'var(--c-navy-deep)', display: 'block', marginBottom: '0.35rem' }}>
          Ideal para a seguinte aplicação:
        </span>
        {idealFor}
      </div>
    </div>
  );
}

export default function TechSpecs({ onOpenQuote }) {
  return (
    <section id="especificacoes" className="section-wrapper-white">
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <div className="eyebrow" style={{ margin: '0 auto 1.25rem' }}>
            <FileText size={14} />
            Ficha Técnica Oficial
          </div>
          <h2 className="title-h1" style={{ marginBottom: '1rem', color: 'var(--c-gray-06)' }}>
            Especificações Técnicas RADEC®
          </h2>
          <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--c-gray-04)' }}>
            Parâmetros elétricos, protocolos de rede industrial e grau de proteção dos gabinetes.
          </p>
        </div>

        {/* 2-Column Datasheet */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', marginBottom: '3.5rem',
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
            Solicitar Especificação Completa para Minha Planta
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

