import React from 'react';
import { getAssetUrl } from '../utils/assets';

// Authentic Client Logos Extracted Directly from LLK Portfolio PDF
const clientLogos = [
  { name: 'Vale', img: getAssetUrl('assets/logos/vale.png') },
  { name: 'Vale Base Metals', img: getAssetUrl('assets/logos/vale_base_metals.png') },
  { name: 'Samarco', img: getAssetUrl('assets/logos/samarco.png') },
  { name: 'Anglo American', img: getAssetUrl('assets/logos/anglo_american.png') },
  { name: 'Mosaic', img: getAssetUrl('assets/logos/mosaic.png') },
  { name: 'Ternium', img: getAssetUrl('assets/logos/ternium.png') },
  { name: 'Usiminas', img: getAssetUrl('assets/logos/usiminas.png') },
  { name: 'MRN', img: getAssetUrl('assets/logos/mrn.png') },
  { name: 'Gerdau', img: getAssetUrl('assets/logos/gerdau.png') },
  { name: 'Nexa', img: getAssetUrl('assets/logos/nexa.png') },
  { name: 'Kinross', img: getAssetUrl('assets/logos/kinross.png') },
];

export default function TrustBar() {
  // Duplicate array for seamless infinite looping
  const marqueeList = [...clientLogos, ...clientLogos];

  return (
    <section style={{
      background: 'var(--c-gray-00)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: '2.25rem 0',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
        }}>
          <div style={{
            width: '4px', height: '22px',
            background: 'var(--c-blue)', borderRadius: '2px',
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--c-gray-04)',
          }}>
            Tecnologia desenvolvida e homologada com a Vale e o Mining Hub — operações industriais de referência
          </span>
        </div>
      </div>

      {/* Infinite Marquee Track using Exact PDF Logo Images */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {marqueeList.map((client, i) => (
            <div key={i} className="logo-card">
              <img
                src={client.img}
                alt={client.name}
                style={{ height: '36px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          display: flex;
          align-items: center;
          gap: 2rem;
          white-space: nowrap;
          animation: logoMarquee 35s linear infinite;
          will-change: transform;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.75rem;
          background: var(--c-white);
          border: 1px solid var(--c-gray-01);
          border-radius: var(--r-lg);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          transition: all 0.2s ease;
          flex-shrink: 0;
          height: 64px;
        }
        .logo-card:hover {
          border-color: var(--c-blue);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(21, 87, 212, 0.12);
        }
        @keyframes logoMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}


