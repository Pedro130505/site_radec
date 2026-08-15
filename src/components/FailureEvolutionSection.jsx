import React from 'react';
import { CheckCircle, AlertTriangle, Eye, Activity, Layers, Cable } from 'lucide-react';
import { useScrollReveal, revealStyle } from '../utils/scrollReveal';

const matrix = [
  {
    condition: 'Desalinhamento',
    visao:       { type: 'direct', label: 'Direto' },
    vibracional: { type: 'none',   label: '—' },
    bandeja:     { type: 'none',   label: '—' },
    ripcord:     { type: 'none',   label: '—' },
  },
  {
    condition: 'Rasgo com sobreposição',
    visao:       { type: 'direct',      label: 'Direto' },
    vibracional: { type: 'none',        label: '—' },
    bandeja:     { type: 'none',        label: '—' },
    ripcord:     { type: 'none',        label: '—' },
  },
  {
    condition: 'Rasgo com abertura',
    visao:       { type: 'direct',      label: 'Direto' },
    vibracional: { type: 'conditional', label: 'Condicional' },
    bandeja:     { type: 'contact',     label: 'Depende de contato' },
    ripcord:     { type: 'none',        label: '—' },
  },
  {
    condition: 'Rasgo com tiras soltas',
    visao:       { type: 'none',        label: '—' },
    vibracional: { type: 'direct',      label: 'Direto' },
    bandeja:     { type: 'none',        label: '—' },
    ripcord:     { type: 'contact',     label: 'Depende de contato' },
  },
  {
    condition: 'Rasgo sem abertura',
    visao:       { type: 'direct',      label: 'Direto' },
    vibracional: { type: 'none',        label: '—' },
    bandeja:     { type: 'none',        label: '—' },
    ripcord:     { type: 'none',        label: '—' },
  },
  {
    condition: 'Queda de material',
    visao:       { type: 'none',        label: '—' },
    vibracional: { type: 'direct',      label: 'Direto' },
    bandeja:     { type: 'contact',     label: 'Depende de contato' },
    ripcord:     { type: 'none',        label: '—' },
  },
];

function Cell({ item }) {
  const styles = {
    direct:      { color: '#14532D', background: '#DCFCE7', border: '#BBF7D0' },
    conditional: { color: '#78350F', background: '#FEF3C7', border: '#FDE68A' },
    contact:     { color: '#7C2D12', background: '#FFEDD5', border: '#FED7AA' },
    none:        { color: '#9AA3B2', background: 'transparent', border: 'transparent' },
  };
  const s = styles[item.type] || styles.none;
  if (item.type === 'none') {
    return <span style={{ color: '#D1D5DB', fontSize: '1rem' }}>—</span>;
  }
  return (
    <span style={{
      display: 'inline-block',
      fontSize: '0.6875rem',
      fontWeight: 700,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      color: s.color,
      background: s.background,
      border: `1px solid ${s.border}`,
      borderRadius: '4px',
      padding: '0.3rem 0.625rem',
      whiteSpace: 'nowrap',
    }}>
      {item.label}
    </span>
  );
}

export default function FailureEvolutionSection() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [tableRef, tableVisible] = useScrollReveal({ threshold: 0.05 });
  const cols = [
    { label: 'RADEC® Visão', icon: Eye, key: 'visao', highlight: true },
    { label: 'RADEC® Vibracional', icon: Activity, key: 'vibracional', highlight: true },
    { label: 'Sistema de Bandeja', icon: Layers, key: 'bandeja', highlight: false },
    { label: 'Ripcord / Monocord', icon: Cable, key: 'ripcord', highlight: false },
  ];

  return (
    <section id="evolucao-falhas" style={{
      background: 'var(--c-white)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: '3rem', maxWidth: '680px', ...revealStyle(headerVisible) }}>
          <div className="eyebrow">Matriz de Detecção</div>
          <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
            Um rasgo não começa necessariamente com uma correia destruída
          </h2>
          <p className="lead" style={{ fontSize: '1rem' }}>
            Diferentes falhas produzem diferentes manifestações físicas. A solução de proteção eficaz precisa cobrir os modos de falha específicos da sua aplicação.
          </p>
        </div>

        {/* Table */}
        <div ref={tableRef} style={{
          border: '1px solid var(--c-gray-01)',
          borderRadius: 'var(--r-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
          ...revealStyle(tableVisible, 150),
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ minWidth: '720px' }}>
              <thead>
                <tr>
                  <th style={{ width: '28%', padding: '1rem 1.5rem' }}>
                    Condição / Manifestação
                  </th>
                  {cols.map((col) => {
                    const Icon = col.icon;
                    return (
                      <th key={col.key} style={{
                        padding: '1rem 1.25rem',
                        background: col.highlight ? 'rgba(21, 87, 212, 0.04)' : undefined,
                        borderLeft: '1px solid var(--c-gray-01)',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Icon size={13} color={col.highlight ? 'var(--c-blue)' : 'var(--c-gray-03)'} />
                          <span style={{ color: col.highlight ? 'var(--c-navy)' : undefined }}>
                            {col.label}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i}>
                    <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--c-gray-06)' }}>
                      {row.condition}
                    </td>
                    {cols.map(col => (
                      <td key={col.key} style={{
                        padding: '1rem 1.25rem',
                        textAlign: 'center',
                        background: col.highlight ? 'rgba(21, 87, 212, 0.02)' : undefined,
                        borderLeft: '1px solid var(--c-gray-01)',
                      }}>
                        <Cell item={row[col.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div style={{
            padding: '1rem 1.5rem',
            background: 'var(--c-gray-00)',
            borderTop: '1px solid var(--c-gray-01)',
            display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
          }}>
            {[
              { color: '#14532D', bg: '#DCFCE7', label: 'Direto: detecta a condição diretamente' },
              { color: '#78350F', bg: '#FEF3C7', label: 'Condicional: depende da manifestação associada' },
              { color: '#7C2D12', bg: '#FFEDD5', label: 'Depende de contato: requer contato físico com a falha' },
            ].map((l, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{
                  width: '10px', height: '10px', borderRadius: '2px',
                  background: l.bg, border: '1px solid ' + l.color,
                  flexShrink: 0,
                }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--c-gray-04)' }}>{l.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <p style={{
          marginTop: '2rem',
          fontSize: '0.9375rem',
          fontWeight: 600,
          color: 'var(--c-gray-05)',
          textAlign: 'center',
        }}>
          A família RADEC® combina diferentes princípios de detecção para ampliar a proteção da correia.
        </p>

      </div>
    </section>
  );
}
