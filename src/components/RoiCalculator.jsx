import React, { useState } from 'react';
import { DollarSign, TrendingUp, AlertOctagon, CheckCircle, ArrowRight, Calculator } from 'lucide-react';

export default function RoiCalculator({ onOpenQuote }) {
  const [downtimeHours, setDowntimeHours] = useState(12);
  const [hourlyCost, setHourlyCost] = useState(45000);
  const [beltMeters, setBeltMeters] = useState(150);
  const [meterCost, setMeterCost] = useState(650);
  const [incidentsYear, setIncidentsYear] = useState(2);

  const downtimeLoss = downtimeHours * hourlyCost * incidentsYear;
  const beltReplacementCost = beltMeters * meterCost * incidentsYear;
  const totalAnnualLoss = downtimeLoss + beltReplacementCost;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculadora-roi" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
            Análise Financeira & Retorno de Investimento (ROI)
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#072752] font-['Outfit']">
            Calculadora de Prejuízo Evitado
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Estime o impacto financeiro de paradas não programadas provocadas por rasgos na correia transportadora da sua unidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Slider Controls Container */}
          <div className="lg:col-span-7 industrial-card p-6 md:p-8 rounded-2xl space-y-6">
            <div className="flex items-center gap-2 text-[#072752] font-bold text-sm uppercase border-b border-slate-200 pb-3">
              <Calculator className="w-5 h-5 text-[#0356c5]" />
              <span>Parâmetros de Operação da Sua Planta</span>
            </div>

            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Horas Médias de Parada por Incidente:</span>
                <span className="text-[#0356c5] font-mono text-sm">{downtimeHours} horas</span>
              </div>
              <input
                type="range"
                min="2"
                max="48"
                step="1"
                value={downtimeHours}
                onChange={(e) => setDowntimeHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
              />
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Custo por Hora de Planta Parada:</span>
                <span className="text-emerald-700 font-mono text-sm">{formatCurrency(hourlyCost)}/h</span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={hourlyCost}
                onChange={(e) => setHourlyCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
              />
            </div>

            {/* Slider 3 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Metros de Correia Danificados por Evento:</span>
                <span className="text-[#0356c5] font-mono text-sm">{beltMeters} metros</span>
              </div>
              <input
                type="range"
                min="20"
                max="800"
                step="10"
                value={beltMeters}
                onChange={(e) => setBeltMeters(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
              />
            </div>

            {/* Slider 4 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Custo por Metro de Correia:</span>
                <span className="text-[#0356c5] font-mono text-sm">{formatCurrency(meterCost)}/m</span>
              </div>
              <input
                type="range"
                min="200"
                max="3000"
                step="50"
                value={meterCost}
                onChange={(e) => setMeterCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
              />
            </div>

            {/* Slider 5 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Frequência Estimada de Incidentes por Ano sem RADEC®:</span>
                <span className="text-amber-700 font-mono text-sm">{incidentsYear} acidentes / ano</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={incidentsYear}
                onChange={(e) => setIncidentsYear(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
              />
            </div>

          </div>

          {/* Results Container */}
          <div className="lg:col-span-5 bg-[#072752] text-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-rose-300 uppercase tracking-widest block mb-1">
                  Risco Financeiro Total
                </span>
                <h3 className="text-2xl font-extrabold font-['Outfit']">
                  Perda Potencial sem Proteção
                </h3>
              </div>

              {/* Total Display */}
              <div className="bg-[#041d3d] p-6 rounded-xl border border-rose-500/40 text-center space-y-1">
                <span className="text-xs font-bold text-slate-300 uppercase">Prejuízo Anual Estimado:</span>
                <p className="text-3xl md:text-4xl font-extrabold text-rose-400 font-['Outfit']">
                  {formatCurrency(totalAnnualLoss)}
                </p>
                <span className="text-[11px] text-slate-400 font-mono block">
                  (Lucro Cessante + Custo de Substituição de Material)
                </span>
              </div>

              <div className="space-y-2 text-xs font-medium">
                <div className="flex justify-between p-3 rounded bg-[#041d3d] border border-blue-900">
                  <span className="text-slate-300">Custo com Planta Parada:</span>
                  <span className="font-bold text-amber-300 font-mono">{formatCurrency(downtimeLoss)}</span>
                </div>
                <div className="flex justify-between p-3 rounded bg-[#041d3d] border border-blue-900">
                  <span className="text-slate-300">Custo de Correias Danificadas:</span>
                  <span className="font-bold text-cyan-300 font-mono">{formatCurrency(beltReplacementCost)}</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="font-bold text-white block">Payback Estimado:</span>
                  <span>O investimento no RADEC® é amortizado no primeiro evento grave evitado.</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="w-full bg-[#0356c5] hover:bg-[#02449e] text-white font-bold py-4 rounded-lg shadow transition flex items-center justify-center gap-2"
            >
              <span>Solicitar Estudo Financeiro Personalizado</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
