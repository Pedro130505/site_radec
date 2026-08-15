import React, { useState } from 'react';
import { Calculator, ArrowRight, Info, DollarSign } from 'lucide-react';

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
    { label: 'Custo estimado da parada por hora', min: 10000, max: 200000, step: 5000, value: cost, onChange: setCost, display: `${fmt(cost)}/h` },
    { label: 'Horas médias de parada por evento', min: 2, max: 48, step: 1, value: hours, onChange: setHours, display: `${hours} horas` },
    { label: 'Custo estimado de reparo / emenda de correia', min: 20000, max: 500000, step: 10000, value: repair, onChange: setRepair, display: fmt(repair) },
    { label: 'Ocorrências estimadas por ano', min: 1, max: 10, step: 1, value: count, onChange: setCount, display: `${count} ocorrência${count > 1 ? 's' : ''}` },
  ];

  return (
    <section id="calculadora-roi" className="section-wrapper-light">
      <div className="container">

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <div className="eyebrow" style={{ margin: '0 auto 1.25rem' }}>
            <DollarSign size={14} />
            Estimativa Comercial Ilustrativa
          </div>
          <h2 className="title-h1" style={{ marginBottom: '1rem', color: 'var(--c-gray-06)' }}>
            Calculadora de Retorno & Impacto Financeiro
          </h2>
          <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--c-gray-04)' }}>
            Calcule o prejuízo financeiro direto provocado por rasgos de correia e paradas não programadas no seu fluxo de produção.
          </p>
        </div>

        {/* Calculator Layout */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto',
        }}>

          {/* Inputs */}
          <div className="card-light" style={{ padding: '2.5rem' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.875rem',
              paddingBottom: '1.5rem', marginBottom: '2rem',
              borderBottom: '1px solid var(--c-gray-01)',
            }}>
              <div style={{
                width: '44px', height: '44px', background: 'rgba(21,87,212,0.1)',
                borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexShrink: 0,
              }}>
                <Calculator size={20} color="var(--c-blue)" />
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.25rem', fontWeight: 800,
                color: 'var(--c-navy-deep)',
              }}>
                Parâmetros da Operação da Planta
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {sliders.map((s, i) => (
                <div key={i}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    marginBottom: '0.625rem',
                  }}>
                    <label style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--c-gray-05)' }}>
                      {s.label}
                    </label>
                    <span style={{
                      fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.9375rem',
                      fontWeight: 800, color: 'var(--c-blue)',
                    }}>
                      {s.display}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={s.min} max={s.max} step={s.step} value={s.value}
                    onChange={e => s.onChange(Number(e.target.value))}
                    style={{
                      width: '100%', height: '6px', appearance: 'none',
                      background: `linear-gradient(to right, var(--c-blue) ${((s.value - s.min) / (s.max - s.min)) * 100}%, var(--c-gray-01) 0%)`,
                      borderRadius: '3px', outline: 'none', cursor: 'pointer',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="card-dark" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--c-cyan-glow)',
                marginBottom: '0.5rem',
              }}>
                Resultado da Estimativa
              </div>
              <h3 style={{
                fontFamily: 'Outfit, sans-serif', fontSize: '1.5rem', fontWeight: 800,
                color: 'white', marginBottom: '2rem', letterSpacing: '-0.02em',
              }}>
                Impacto Estimado na Produção
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                }}>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Prejuízo estimado por ocorrência
                  </div>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '2rem', fontWeight: 900,
                    color: '#FCD34D', letterSpacing: '-0.02em',
                  }}>
                    {fmt(perEvent)}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                }}>
                  <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Impacto acumulado por ano
                  </div>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '2.25rem', fontWeight: 900,
                    color: '#FCA5A5', letterSpacing: '-0.02em',
                  }}>
                    {fmt(annual)}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: 'var(--r-lg)', padding: '1.5rem',
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#34D399', marginBottom: '0.4rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Economia Estimada com RADEC®
                  </div>
                  <div style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1.875rem', fontWeight: 900,
                    color: '#34D399', letterSpacing: '-0.02em', marginBottom: '0.35rem',
                  }}>
                    ~{fmt(saving)} economizados/ano
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                    Obtida pelo desarme automático em menos de 1 segundo e contenção de avanço do rasgo.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Solicitar Estudo de Viabilidade para Minha Planta
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
          marginTop: '2.5rem',
        }}>
          <Info size={14} color="var(--c-gray-03)" />
          <span style={{ fontSize: '0.8125rem', color: 'var(--c-gray-03)', fontWeight: 500 }}>
            Cálculo ilustrativo, baseado em valores informados pelo usuário.
          </span>
        </div>

      </div>
    </section>
  );
}

