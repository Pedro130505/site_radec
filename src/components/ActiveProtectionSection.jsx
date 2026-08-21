import React from 'react';
import { Eye, Search, Bell, Cpu, ShieldAlert, ArrowRight, Settings } from 'lucide-react';

export default function ActiveProtectionSection() {
  const steps = [
    {
      num: '01',
      title: 'MONITORA',
      desc: 'Acompanha continuamente a correia e suas condições observáveis.',
      icon: Eye,
      color: 'bg-[#0356c5]'
    },
    {
      num: '02',
      title: 'IDENTIFICA A CONDIÇÃO',
      desc: 'Reconhece rasgos, desalinhamentos ou eventos associados ao dano.',
      icon: Search,
      color: 'bg-[#0356c5]'
    },
    {
      num: '03',
      title: 'GERA ALARMES',
      desc: 'Disponibiliza estados de alarme e diagnóstico conforme a condição identificada.',
      icon: Bell,
      color: 'bg-amber-600'
    },
    {
      num: '04',
      title: 'INTEGRA AO PLC',
      desc: 'Transmite informações ao sistema de controle da planta.',
      icon: Cpu,
      color: 'bg-[#0356c5]'
    },
    {
      num: '05',
      title: 'PODE ATUAR NA PROTEÇÃO',
      desc: 'Permite estratégias de intertravamento e proteção automática da operação.',
      icon: ShieldAlert,
      color: 'bg-emerald-600'
    }
  ];

  return (
    <section id="protecao-ativa" className="scroll-mt-24 py-16 md:py-20 bg-[#072752] text-white border-b border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header (Pergunta 2 do PDF) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="eyebrow eyebrow-white">
            Como Funciona a Proteção Ativa
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-white">
            Mais que monitoramento. Proteção ativa.
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            O RADEC® monitora continuamente a correia, disponibiliza informações de diagnóstico e proteção ao sistema de controle e permite configurar estratégias de alarme e intertravamento de acordo com a criticidade da aplicação.
          </p>
        </div>

        {/* 5 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative mb-12">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx}
                className="bg-[#0b1c36] p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between relative group hover:border-[#0356c5] transition-all shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {step.num}
                    </span>
                    <div className={`w-9 h-9 rounded-xl ${step.color} text-white flex items-center justify-center shadow-xs`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs font-bold font-['Outfit'] uppercase tracking-wider text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight Banner */}
        <div className="bg-[#041126] p-6 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left shadow-lg">
          <div className="w-9 h-9 rounded-xl bg-[#0356c5]/20 text-[#0356c5] flex items-center justify-center shrink-0 border border-[#0356c5]/40">
            <Settings className="w-5 h-5 text-[#0356c5]" />
          </div>
          <span className="text-base font-bold font-['Outfit'] text-white">
            Do monitoramento à proteção integrada da operação.
          </span>
        </div>

      </div>
    </section>
  );
}
