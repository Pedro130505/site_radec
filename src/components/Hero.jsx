import React from 'react';
import { ShieldCheck, Cpu, Zap, Activity, ChevronRight, Award, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const stats = [
    { label: 'Anos de Mercado', value: '17+', desc: 'Tradição e Inovação em IndTech' },
    { label: 'Patentes Registradas', value: '28', desc: 'Propriedade Intelectual Própria' },
    { label: 'Principais Clientes', value: '+50', desc: 'Vale, CSN, Ternium, Holcim, Samarco' },
    { label: 'Prêmios de Inovação', value: '15', desc: 'Top 10 IndTechs (4x Seguidas)' },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#072752] text-white overflow-hidden border-b border-blue-900/60">
      
      {/* Background Industrial Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/assets/photos/Apresentao_p2_3.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#072752] via-[#072752]/95 to-[#072752]/80 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Corporate Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#0356c5] text-white text-xs font-bold uppercase tracking-wider shadow">
              <Award className="w-4 h-4 text-amber-300" />
              <span>LLK Soluções • Boas Práticas na Mineração 2024</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Outfit'] leading-[1.15]">
              RADEC®: Detecção Automática de Rasgos e Desalinhamento
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Monitoramento contínuo em tempo real para correias transportadoras. Proteção de ativos de alta disponibilidade utilizando <strong className="text-white font-semibold">Visão Computacional (IA)</strong> e <strong className="text-white font-semibold">Análise de Vibração</strong>.
            </p>

            {/* Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Desarme automático do CLP em ms</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Gabinetes industriais IP67 sem partes móveis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Instalável em qualquer trecho do transportador</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Comunicação Modbus, TCP/IP e Relé</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="bg-[#0356c5] hover:bg-[#02449e] text-white px-8 py-4 rounded-lg font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 group"
              >
                <span>Solicitar Proposta Técnica</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#radec-visao"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-lg font-semibold text-base transition-all text-center"
              >
                Conhecer Tecnologias RADEC®
              </a>
            </div>

          </div>

          {/* Right Column: Grounded Product Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 p-4 md:p-6 rounded-2xl shadow-2xl border border-slate-200">
              
              <div className="relative rounded-xl overflow-hidden mb-4 border border-slate-200">
                <img 
                  src="/assets/photos/Apresentao_p6_32.jpg" 
                  alt="RADEC Visão Instalado em Campo na Mineração" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#072752] text-white text-[11px] font-bold px-3 py-1 rounded shadow">
                  Instalação em Campo • Mineração
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#072752] font-['Outfit']">
                  RADEC® Visão em Operação Real
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Sistema de alta resistência (IP67) projetado para operar com confiabilidade extrema em atmosferas de alta poeira e umidade.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Tecnologia de IA Patenteada</span>
                  <span className="text-[#0356c5]">100% Projetado no Brasil</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Strip (Sandvik / Sotreq Style Clean White Panel) */}
        <div className="mt-16 bg-white text-slate-900 p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-left space-y-1 border-l-4 border-[#0356c5] pl-4">
              <span className="text-3xl md:text-4xl font-extrabold text-[#072752] font-['Outfit'] block">
                {stat.value}
              </span>
              <p className="text-sm font-bold text-slate-800">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
