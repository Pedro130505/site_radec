import React, { useState } from 'react';
import { Eye, Shield, Camera, AlertTriangle, CheckCircle2, Sliders, Cpu, Activity, Info, Zap, ArrowRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function RadecVisao({ onOpenQuote }) {
  const [alertLevel, setAlertLevel] = useState(3);
  const [defectType, setDefectType] = useState('abertura');

  const alertDetails = {
    1: { level: 'Nível 1', range: '50% - 62,5% da Largura Crítica', severity: 'Alerta Inicial (Informativo)', color: 'bg-yellow-500', text: 'text-yellow-700', border: 'border-yellow-300' },
    2: { level: 'Nível 2', range: '62,5% - 75,0% da Largura Crítica', severity: 'Atenção Operacional', color: 'bg-amber-500', text: 'text-amber-700', border: 'border-amber-300' },
    3: { level: 'Nível 3', range: '75,0% - 87,5% da Largura Crítica', severity: 'Alerta de Manutenção', color: 'bg-orange-500', text: 'text-orange-700', border: 'border-orange-300' },
    4: { level: 'Nível 4', range: '87,5% - 100% da Largura Crítica', severity: 'Alerta Crítico Pré-Desarme', color: 'bg-red-500', text: 'text-red-700', border: 'border-red-300' },
    5: { level: 'Nível 5', range: 'Acima de 100% da Largura Crítica', severity: 'DESARME IMEDIATO DO CLP!', color: 'bg-rose-700', text: 'text-rose-700', border: 'border-rose-500' },
  };

  const currentAlert = alertDetails[alertLevel];

  return (
    <section id="radec-visao" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0356c5] bg-blue-50 px-3 py-1 rounded border border-blue-200">
              Visão Computacional & Video Analytics
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#072752] font-['Outfit']">
              RADEC® Visão
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Sistema patenteado de monitoramento óptico contínuo por inteligência artificial para detecção precoce de rasgos longitudinais e desalinhamento de correias.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="bg-[#072752] hover:bg-[#0356c5] text-white px-6 py-3 rounded-lg font-bold transition shadow flex items-center gap-2"
          >
            <span>Solicitar Catálogo Técnico</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Real Product Image & Feature Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Real Diagram Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="industrial-card p-4 rounded-2xl overflow-hidden">
              <img 
                src={getAssetUrl('assets/photos/Apresentao_p8_38.png')} 
                alt="Desenho Esquemático do RADEC Visão" 
                className="w-full h-auto rounded-xl object-contain bg-white border border-slate-200 p-2"
              />
              <div className="mt-3 flex items-center justify-between text-xs font-semibold text-slate-600 px-1">
                <span>Esquema de Posicionamento Câmeras Face e Contraface</span>
                <span className="text-[#0356c5]">Gabinete Robusto IP67</span>
              </div>
            </div>
          </div>

          {/* Feature List Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="industrial-card p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0356c5] flex items-center justify-center font-bold">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#072752]">Inspeção Dupla Face & Contraface</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Monitora tanto a superfície carregada (Face) quanto o dorso inferior da correia (Contraface) utilizando iluminação laser dedicada.
              </p>
            </div>

            <div className="industrial-card p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0356c5] flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#072752]">Estrutura IP67 Sem Partes Móveis</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Desenvolvido para ambientes severos com alta poeira, vibração e umidade. Dispensa manutenção mecânica periódica.
              </p>
            </div>

            <div className="industrial-card p-6 rounded-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0356c5] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#072752]">5 Níveis de Alerta Configuráveis</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Algoritmo de mensuração da largura crítica (%) para evitar disparos falsos e permitir atuação preventiva da equipe de manutenção.
              </p>
            </div>
          </div>

        </div>

        {/* Industrial HMI / SCADA Interactive Simulator */}
        <div className="industrial-card p-6 md:p-8 rounded-2xl border-2 border-slate-300">
          
          <div className="border-b border-slate-200 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-[#0356c5] uppercase tracking-wider">Painel de Supervisão Industrial SCADA</span>
              <h3 className="text-2xl font-extrabold text-[#072752] font-['Outfit']">Simulador HMI do Algoritmo RADEC® Visão</h3>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded border border-slate-300">
              CLP MODBUS TCP: ONLINE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Control Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 uppercase">Selecione o Tipo de Anomalia:</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setDefectType('abertura')}
                    className={`py-2 px-3 text-xs font-bold rounded border transition ${
                      defectType === 'abertura'
                        ? 'bg-[#072752] text-white border-[#072752]'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Rasgo Abertura
                  </button>
                  <button
                    onClick={() => setDefectType('sobreposicao')}
                    className={`py-2 px-3 text-xs font-bold rounded border transition ${
                      defectType === 'sobreposicao'
                        ? 'bg-[#072752] text-white border-[#072752]'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Sobreposição
                  </button>
                  <button
                    onClick={() => setDefectType('desalinhamento')}
                    className={`py-2 px-3 text-xs font-bold rounded border transition ${
                      defectType === 'desalinhamento'
                        ? 'bg-[#072752] text-white border-[#072752]'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    Desalinhado
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-3 bg-slate-100 p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">Severidade do Danos (% Largura Crítica):</span>
                  <span className={`px-2 py-0.5 rounded text-white ${currentAlert.color}`}>
                    {currentAlert.level}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="5"
                  value={alertLevel}
                  onChange={(e) => setAlertLevel(Number(e.target.value))}
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#0356c5]"
                />

                <div className="flex justify-between text-[11px] text-slate-600 font-mono">
                  <span>50%</span>
                  <span>75%</span>
                  <span>&gt;100%</span>
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs">
                  <span className="text-slate-500 block">Faixa de Tolerância:</span>
                  <span className="font-bold text-[#072752]">{currentAlert.range}</span>
                </div>
              </div>

              {/* Status Relay Card */}
              <div className={`p-4 rounded-xl border ${currentAlert.border} bg-white shadow-sm space-y-2`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600 uppercase">Sinal de Intertravamento:</span>
                  <span className={`text-xs font-bold uppercase px-2.5 py-0.5 rounded ${alertLevel === 5 ? 'bg-red-600 text-white animate-pulse' : 'bg-blue-100 text-[#0356c5]'}`}>
                    {alertLevel === 5 ? 'RELÉ TRIP ATIVADO' : 'SINAL NORMAL'}
                  </span>
                </div>
                <p className="text-sm font-extrabold text-slate-800">
                  {currentAlert.severity}
                </p>
                <p className="text-xs text-slate-600">
                  {alertLevel === 5 
                    ? 'Comando de parada de emergência do motor enviado ao CLP em menos de 50 milissegundos.'
                    : 'Monitoramento contínuo sem necessidade de intervenção operacional.'}
                </p>
              </div>

            </div>

            {/* Industrial SCADA Visualizer Display */}
            <div className="lg:col-span-7 scada-screen p-6 rounded-xl text-slate-200 flex flex-col justify-between relative overflow-hidden font-mono text-xs">
              
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-400 font-bold">RADEC_CAM_FACE_01</span>
                </div>
                <span className="text-slate-400">STATUS: CAM_OK | FPS: 60</span>
              </div>

              <div className="my-8 relative h-48 flex items-center justify-center scada-grid border border-slate-800 rounded">
                <div className="w-full max-w-md h-32 bg-slate-900 border-2 border-slate-700 relative overflow-hidden flex items-center justify-center shadow-inner">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#1e293b_0px,#1e293b_15px,#0f172a_15px,#0f172a_30px)] opacity-70 animate-belt" />

                  <div className="absolute top-0 inset-x-0 h-2 bg-slate-600" />
                  <div className="absolute bottom-0 inset-x-0 h-2 bg-slate-600" />

                  {defectType === 'abertura' && (
                    <div className="relative z-10 flex flex-col items-center">
                      <div 
                        className={`h-2 transition-all duration-300 rounded ${currentAlert.color}`}
                        style={{ width: `${alertLevel * 35}px`, height: `${alertLevel * 5}px` }}
                      />
                      <span className="text-[10px] text-red-400 mt-2 bg-black/90 px-2 py-0.5 rounded border border-red-500/50">
                        ANOMALIA: RASGO CENTRAL (A={alertLevel * 15}mm)
                      </span>
                    </div>
                  )}

                  {defectType === 'sobreposicao' && (
                    <div className="relative z-10 flex flex-col items-center">
                      <div 
                        className="h-3 border-2 border-amber-400 bg-amber-500/50 rounded"
                        style={{ width: `${alertLevel * 40}px` }}
                      />
                      <span className="text-[10px] text-amber-300 mt-2 bg-black/90 px-2 py-0.5 rounded border border-amber-500/50">
                        ANOMALIA: SOBREPOSIÇÃO
                      </span>
                    </div>
                  )}

                  {defectType === 'desalinhamento' && (
                    <div 
                      className="relative z-10 transition-all duration-300 flex flex-col items-center"
                      style={{ transform: `translateY(${alertLevel * 8}px)` }}
                    >
                      <div className="w-48 h-20 border border-rose-500 bg-rose-500/10 rounded flex items-center justify-center">
                        <span className="text-[10px] text-rose-400 bg-black/90 px-2 py-0.5 rounded border border-rose-500">
                          DESALINHAMENTO LATERAL (+{alertLevel * 12}mm)
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              <div className="flex justify-between items-center border-t border-slate-800 pt-3 text-[11px] text-slate-400">
                <span>RESOLUÇÃO: HD INDUSTRIAL</span>
                <span>COMUNICAÇÃO: MODBUS TCP</span>
                <span className="text-emerald-400 font-bold">LATÊNCIA: &lt; 15ms</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
