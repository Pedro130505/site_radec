import React from 'react';
import { Eye, Activity, CheckCircle2, ArrowRight, Camera, ShieldCheck } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function RadecFamilyOverview({ onOpenQuote, onNavigate }) {
  return (
    <section id="solucoes" className="scroll-mt-24 py-16 md:py-20 bg-white text-slate-800 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header (Pergunta 1 & 3 do PDF) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="eyebrow">
            O que o RADEC® Entrega
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit']">
            Uma família de proteção. Dois princípios de detecção.
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Combinação de algoritmos de visão computacional inteligente e sensoriamento frequencial de alta sensibilidade para cobrir diferentes estágios de manifestação da falha.
          </p>
        </div>

        {/* 2 Main Product Overview Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: RADEC Visão */}
          <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-between border border-slate-200 hover:border-[#0356c5] transition-all shadow-sm group">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0356c5] bg-blue-100/70 px-3 py-1 rounded">
                  Inspeção Óptica & IA
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#0356c5] text-white flex items-center justify-center shadow-xs">
                  <Camera className="w-5 h-5" />
                </div>
              </div>

              {/* Photo preview */}
              <div className="rounded-xl overflow-hidden aspect-16/9 border border-slate-200 relative">
                <img 
                  src={getAssetUrl('assets/photos/radec_visao_field.jpg')} 
                  alt="RADEC Visão em campo" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-[#072752]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded backdrop-blur-xs">
                  Monitoramento direto sem contato
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#072752] font-['Outfit']">
                  RADEC® Visão
                </h3>
                <p className="text-sm font-semibold text-[#0356c5] mt-1">
                  Monitoramento geométrico e óptico direto da correia
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Supervisiona continuamente a superfície e as bordas do transportador por câmeras de alta definição, identificando rasgos e desgarres antes da destruição.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Manifestações Monitoradas:
                </span>
                <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Rasgos de borda e fraturas laterais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Rasgos centrais e desgarres com abertura</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Rasgos com sobreposição de abas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Desalinhamento do eixo do transportador</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-8 mt-6 border-t border-slate-200">
              <button
                onClick={() => onNavigate('radec-visao')}
                className="w-full bg-[#072752] hover:bg-[#0356c5] text-white py-3.5 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-xs transition"
              >
                <span>Ver detalhes do RADEC® Visão</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: RADEC Vibracional */}
          <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-between border border-slate-200 hover:border-[#072752] transition-all shadow-sm group">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#072752] bg-slate-200 px-3 py-1 rounded">
                  Sensoriamento Mecânico
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#072752] text-white flex items-center justify-center shadow-xs">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              {/* Photo preview */}
              <div className="rounded-xl overflow-hidden aspect-16/9 border border-slate-200 relative">
                <img 
                  src={getAssetUrl('assets/photos/radec_sensor.jpg')} 
                  alt="RADEC Vibracional em campo" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 bg-[#072752]/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded backdrop-blur-xs">
                  Sensores frequenciais IP69K
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#072752] font-['Outfit']">
                  RADEC® Vibracional
                </h3>
                <p className="text-sm font-semibold text-[#072752] mt-1">
                  Detecção de eventos por choque mecânico e impacto
                </p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Detecta choques e vibrações anômalas resultantes de queda de material, tiras soltas batendo e travamento de blocos de rocha.
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Manifestações Monitoradas:
                </span>
                <ul className="space-y-2 text-xs md:text-sm text-slate-700 font-semibold">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Queda de material e atritos anômalos na calha</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Tiras soltas e descolamento de abas em movimento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Impacto severo por travamento de rocha perfurante</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-8 mt-6 border-t border-slate-200">
              <button
                onClick={() => onNavigate('radec-vibracional')}
                className="w-full bg-[#0356c5] hover:bg-[#072752] text-white py-3.5 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-xs transition"
              >
                <span>Ver detalhes do RADEC® Vibracional</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
