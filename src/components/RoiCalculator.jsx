import React, { useState } from 'react';
import { Calculator, ArrowRight, Info, ShieldCheck, DollarSign } from 'lucide-react';

const formatCurrency = (val) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(val);
};

export default function RoiCalculator({ onOpenQuote }) {
  const [costPerHour, setCostPerHour] = useState(50000);
  const [downtimeHours, setDowntimeHours] = useState(12);
  const [repairCost, setRepairCost] = useState(150000);
  const [eventsPerYear, setEventsPerYear] = useState(2);

  // Financial Calculations
  const costPerEvent = (costPerHour * downtimeHours) + repairCost;
  const annualLoss = costPerEvent * eventsPerYear;
  const estimatedSavings = annualLoss * 0.85; // 85% conservative prevention rate

  return (
    <section id="roi" className="scroll-mt-24 py-16 md:py-20 bg-slate-50 text-slate-800 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header (Pergunta 7 do PDF) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="eyebrow">
            Estimativa Comercial Ilustrativa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit']">
            Estimativa de impacto financeiro
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Avalie o impacto financeiro provocado por rasgos e paradas não programadas no seu transportador.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 p-6 md:p-8 space-y-6">
            
            <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0356c5] flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#072752] font-['Outfit']">
                  Parâmetros Operacionais do Transportador
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Ajuste os valores de acordo com a sua planta industrial.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              
              {/* Slider 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#072752] uppercase">Custo da Parada por Hora:</label>
                  <span className="text-[#0356c5] font-mono text-sm">{formatCurrency(costPerHour)}/h</span>
                </div>
                <input 
                  type="range"
                  min="10000"
                  max="200000"
                  step="5000"
                  value={costPerHour}
                  onChange={(e) => setCostPerHour(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>R$ 10.000/h</span>
                  <span>R$ 200.000/h</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#072752] uppercase">Horas de Parada por Ocorrência:</label>
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
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>2 horas</span>
                  <span>48 horas</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#072752] uppercase">Custo Estimado de Reparo / Troca de Correia:</label>
                  <span className="text-[#0356c5] font-mono text-sm">{formatCurrency(repairCost)}</span>
                </div>
                <input 
                  type="range"
                  min="20000"
                  max="500000"
                  step="10000"
                  value={repairCost}
                  onChange={(e) => setRepairCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>R$ 20.000</span>
                  <span>R$ 500.000</span>
                </div>
              </div>

              {/* Slider 4 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <label className="text-[#072752] uppercase">Ocorrências por Ano:</label>
                  <span className="text-[#0356c5] font-mono text-sm">{eventsPerYear} ocorrência{eventsPerYear > 1 ? 's' : ''}</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={eventsPerYear}
                  onChange={(e) => setEventsPerYear(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                  <span>1 ocorrência</span>
                  <span>10 ocorrências</span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Calculated Results */}
          <div className="lg:col-span-5 bg-[#072752] text-white p-6 md:p-8 flex flex-col justify-between space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-1">
                Resultado da Estimativa
              </span>
              <h4 className="text-xl font-bold font-['Outfit'] text-white">
                Impacto Estimado na Operação
              </h4>

              <div className="mt-6 space-y-4">
                
                <div className="bg-[#0b1c36] p-4 rounded-xl border border-slate-700/80">
                  <span className="text-xs text-slate-400 font-medium block mb-1">Prejuízo Estimado por Ocorrência:</span>
                  <span className="text-2xl font-black text-amber-400 font-['Outfit']">{formatCurrency(costPerEvent)}</span>
                </div>

                <div className="bg-[#0b1c36] p-4 rounded-xl border border-slate-700/80">
                  <span className="text-xs text-slate-400 font-medium block mb-1">Impacto Anual Acumulado:</span>
                  <span className="text-2xl font-black text-rose-400 font-['Outfit']">{formatCurrency(annualLoss)}</span>
                </div>

                <div className="bg-[#041126] p-4 rounded-xl border border-emerald-500/40">
                  <div className="flex items-center justify-between text-xs text-emerald-300 font-bold mb-1">
                    <span>Retorno Estimado com RADEC®:</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-3xl font-black text-emerald-400 font-['Outfit']">
                    ~{formatCurrency(estimatedSavings)} /ano
                  </span>
                  <p className="text-[11px] text-slate-300 mt-1 leading-relaxed font-normal">
                    Calculado com base no desarme automático e na prevenção de paradas catastróficas.
                  </p>
                </div>

              </div>
            </div>

            <div>
              <button
                onClick={onOpenQuote}
                className="w-full bg-[#0356c5] hover:bg-blue-600 text-white font-bold py-3.5 px-6 rounded-xl transition flex items-center justify-center gap-2 shadow-md text-sm"
              >
                <span>Solicitar Estudo Personalizado para Minha Planta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Disclaimer as required by PDF */}
        <div className="max-w-xl mx-auto text-center mt-6">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Cálculo ilustrativo, baseado em valores informados pelo usuário.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
