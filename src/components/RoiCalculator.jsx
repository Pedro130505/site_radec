import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

const fmt = (v) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(v);

export default function RoiCalculator({ onOpenQuote }) {
  const [cost, setCost] = useState(50000);
  const [hours, setHours] = useState(12);
  const [repair, setRepair] = useState(150000);
  const [count, setCount] = useState(2);

  const perEvent = (cost * hours) + repair;
  const annual = perEvent * count;
  const saving = annual * 0.85;

  const sliders = [
    { label: 'Custo da parada por hora', min: 10000, max: 200000, step: 5000, value: cost, onChange: setCost, display: `${fmt(cost)}/h` },
    { label: 'Horas de parada por ocorrência', min: 2, max: 48, step: 1, value: hours, onChange: setHours, display: `${hours} horas` },
    { label: 'Custo estimado de reparo / correia', min: 20000, max: 500000, step: 10000, value: repair, onChange: setRepair, display: fmt(repair) },
    { label: 'Ocorrências por ano', min: 1, max: 10, step: 1, value: count, onChange: setCount, display: `${count} ocorrência${count > 1 ? 's' : ''}` },
  ];

  return (
    <section id="calculadora-roi" style={{
      background: 'var(--c-gray-00)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
          <div className="eyebrow">Estimativa Comercial Ilustrativa</div>
          <h2 className="title-h2" style={{ marginBottom: '1rem' }}>
            Estimativa de impacto financeiro
          </h2>
          <p className="lead" style={{ fontSize: '1rem' }}>
            Avalie o prejuízo financeiro causado por rasgos e paradas não programadas no seu transportador.
          </p>
        </div>

        {/* Calculator Layout */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', maxWidth: '960px', margin: '0 auto',
        }}>

          {/* Inputs */}
          <div className="card">
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              paddingBottom: '1.25rem', marginBottom: '1.5rem',
              borderBottom: '1px solid var(--c-gray-01)',
            }}>
              <div style={{
                width: '40px', height: '40px', background: 'rgba(21,87,212,0.08)',
                borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <Calculator size={18} color="var(--c-blue)" />
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.0625rem', fontWeight: 700,
                color: 'var(--c-navy)',
              }}>
                Parâmetros da Operação
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {sliders.map((s, i) => (
                <div key={i}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: '0.5rem',
                  }}>
                    <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--c-gray-05)' }}>
                      {s.label}
                    </label>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.8125rem',
                      fontWeight: 700, color: 'var(--c-blue)',
                    }}>
                      {s.display}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={s.min} max={s.max} step={s.step} value={s.value}
                    onChange={e => s.onChange(Number(e.target.value))}
                    style={{
                      width: '100%', height: '4px', appearance: 'none',
                      background: `linear-gradient(to right, var(--c-blue) ${((s.value - s.min) / (s.max - s.min)) * 100}%, var(--c-gray-01) 0%)`,
                      borderRadius: '2px', outline: 'none', cursor: 'pointer',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div style={{
            background: 'var(--c-navy)', borderRadius: 'var(--r-xl)', padding: '2rem',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
              marginBottom: '0.5rem',
            }}>
              Resultado da Estimativa
            </div>
            <h3 style={{
              fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 700,
              color: 'white', marginBottom: '2rem',
            }}>
              Impacto Estimado na Planta
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <div style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--r-lg)', padding: '1.25rem',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.375rem' }}>
                  Impacto estimado por ocorrência
                </div>
                <div style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 800,
                  color: '#FCD34D', letterSpacing: '-0.02em',
                }}>
                  {fmt(perEvent)}
                </div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--r-lg)', padding: '1.25rem',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginBottom: '0.375rem' }}>
                  Impacto estimado por ano
                </div>
                <div style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 800,
                  color: '#FCA5A5', letterSpacing: '-0.02em',
                }}>
                  {fmt(annual)}
                </div>
              </div>

              <div style={{
                background: 'rgba(22, 163, 74, 0.12)', border: '1px solid rgba(22, 163, 74, 0.2)',
                borderRadius: 'var(--r-lg)', padding: '1.25rem',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.375rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Comparativo com RADEC®
                </div>
                <div style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                  color: '#4ADE80', letterSpacing: '-0.02em', marginBottom: '0.375rem',
                }}>
                  ~{fmt(saving)} economizados/ano
                </div>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                  Via desarme automático e proteção ativa de correias.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn btn-primary"
              style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center', background: 'var(--c-blue)' }}
            >
              Solicitar Estudo para Minha Planta
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          marginTop: '1.5rem',
        }}>
          <Info size={13} color="var(--c-gray-03)" />
          <span style={{ fontSize: '0.75rem', color: 'var(--c-gray-03)' }}>
            Cálculo ilustrativo, baseado em valores informados pelo usuário.
          </span>
        </div>

      </div>
    </section>
  );
}
