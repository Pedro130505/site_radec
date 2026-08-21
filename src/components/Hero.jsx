import React from 'react';
import { ArrowRight, ShieldCheck, ChevronRight, Calculator, CheckCircle2 } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function Hero({ onOpenQuote, onNavigate }) {
  return (
    <section id="home" className="relative py-12 md:py-20 hero-technical-grid border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Directives Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Identification Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 text-[#0356c5] border border-blue-200 text-xs font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#0356c5]" />
              <span>RADEC® Visão + RADEC® Vibracional</span>
            </div>

            {/* Title from PDF Section 4.1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#072752] font-['Outfit'] leading-tight tracking-tight">
              Detecção de rasgos, tiras soltas e desalinhamentos em tempo real
            </h1>

            {/* Direct Text from PDF Section 4.1 */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
              Monitoramento contínuo sem partes móveis. O sistema RADEC® analisa a correia transportadora e envia sinais em tempo real ao sistema de controle da planta para apoiar a tomada de decisão e a proteção ativa do ativo.
            </p>

            {/* Two Differentiated CTAs from PDF Section 4.1 */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contato')}
                className="btn btn-primary btn-lg shadow-md flex items-center justify-center gap-2"
              >
                <span>Converse com nossa equipe técnica</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('roi')}
                className="btn btn-outline btn-lg flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5 text-[#0356c5]" />
                <span>Simule o impacto financeiro</span>
              </button>
            </div>

            {/* Small reassurance metrics */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sem contato mecânico com a lona</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Integração nativa via Modbus TCP & Relé</span>
              </div>
            </div>

          </div>

          {/* Right Column: Single Real Photography + Compact Case Vale Strip */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-3 shadow-xl border border-slate-200 relative group">
              
              {/* Single Equipment Photo */}
              <div className="relative rounded-xl overflow-hidden aspect-4/3 border border-slate-200">
                <img 
                  src={getAssetUrl('assets/photos/radec_visao_field.jpg')} 
                  alt="Sistema RADEC Instalado em Transportador de Correia" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#072752] text-white text-[11px] font-bold px-3 py-1 rounded shadow-xs">
                  Instalação em Campo • Mineração
                </div>
              </div>

              {/* PDF Section 4.1 Compact Case Vale Strip Incorporated Below Photo */}
              <div className="mt-3 bg-[#072752] text-white p-4 rounded-xl space-y-2.5">
                <div className="flex items-center justify-between border-b border-blue-900/80 pb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 block">
                      Case de Sucesso Homologado
                    </span>
                    <h3 className="text-xs font-bold text-white font-['Outfit']">
                      Vale | Mina de Cauê (Itabira/MG) • out/24 a abr/26
                    </h3>
                  </div>
                  <button
                    onClick={() => onNavigate('case-vale')}
                    className="text-[11px] font-bold text-white bg-[#0356c5] hover:bg-blue-600 px-3 py-1.5 rounded transition flex items-center gap-1 shrink-0"
                  >
                    <span>Ver Case</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#0b1c36] p-2.5 rounded-lg border border-slate-700/70">
                    <span className="text-[10px] text-slate-300 block font-medium">Paradas Evitadas</span>
                    <span className="text-sm font-bold text-emerald-400 font-['Outfit']">+45 horas</span>
                  </div>

                  <div className="bg-[#0b1c36] p-2.5 rounded-lg border border-slate-700/70">
                    <span className="text-[10px] text-slate-300 block font-medium">Retorno Financeiro</span>
                    <span className="text-sm font-bold text-emerald-400 font-['Outfit']">R$ 15 Milhões</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
