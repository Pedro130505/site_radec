import React from 'react';
import { useScrollReveal, revealStyle } from '../utils/scrollReveal';

const clients = [
  'Vale', 'Vale Base Metals', 'Hydro', 'MRN', 'CSN', 'CSN Cimentos',
  'Ternium', 'Usiminas', 'CMOC', 'Mosaic', 'ArcelorMittal', 'Kinross',
  'Lundin Mining', 'Nacala Logistics'
];

export default function TrustBar() {
  const [ref, visible] = useScrollReveal();
  return (
    <section style={{
      background: 'var(--c-gray-00)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: '2.5rem 0',
    }}>
      <div className="container" ref={ref} style={revealStyle(visible)}>

        {/* Label */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: '1.75rem',
        }}>
          <div style={{
            width: '3px', height: '20px',
            background: 'var(--c-blue)', borderRadius: '2px',
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-gray-04)',
          }}>
            Tecnologia desenvolvida e homologada com a Vale e o Mining Hub — operações industriais de referência
          </span>
        </div>

        {/* Logos row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          {clients.map((c, i) => (
            <div key={i} style={{
              padding: '0.5rem 1.125rem',
              background: 'var(--c-white)',
              border: '1px solid var(--c-gray-01)',
              borderRadius: 'var(--r-md)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--c-gray-05)',
              letterSpacing: '-0.01em',
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--c-gray-02)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--c-gray-01)'}
            >
              {c}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
