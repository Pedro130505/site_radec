import React from 'react';
import { Cpu, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function TechSpecs({ onOpenQuote }) {
  const visaoSpecs = [
    { label: 'Alimentação Elétrica', value: '127 / 220 VAC' },
    { label: 'Comunicação com PLC', value: 'Modbus TCP' },
    { label: 'Grau de Proteção', value: 'IP66' },
    { label: 'Enclausuramento Módulo', value: 'Variável conforme largura da correia' },
    { label: 'Escopo de Fornecimento', value: 'Câmeras, painel elétrico e enclausuramento' },
  ];

  const vibracionalSpecs = [
    { label: 'Alimentação Elétrica', value: '127 / 220 VAC' },
    { label: 'Comunicação com PLC', value: 'Saída digital / Relé' },
    { label: 'Grau de Proteção', value: 'IP69K' },
    { label: 'Enclausuramento Módulo', value: 'Variável conforme largura da correia' },
    { label: 'Escopo de Fornecimento', value: 'Estrutura, painel elétrico e coxins de absorção' },
  ];

  return (
    <section id="fichas-tecnicas" className="scroll-mt-24 py-16 md:py-20 bg-white text-slate-800 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header (Pergunta 8 do PDF) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="eyebrow">
            Fichas Técnicas Oficiais da Linha
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit']">
            Especificações Técnicas RADEC®
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Parâmetros elétricos, protocolos de rede e grau de proteção dos gabinetes industriais.
          </p>
        </div>

        {/* 2 Column Datasheet Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* RADEC Visão Technical Datasheet */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-[#0356c5] bg-blue-100/70 px-2.5 py-1 rounded">
                    Inspeção Óptica & Video Analytics
                  </span>
                  <h3 className="text-2xl font-bold text-[#072752] font-['Outfit'] mt-1">
                    RADEC® Visão
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#0356c5] text-white flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3">
                {visaoSpecs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-200 text-xs md:text-sm gap-1">
                    <span className="font-semibold text-slate-600">{spec.label}</span>
                    <span className="font-bold text-[#072752] sm:text-right font-mono bg-white px-2.5 py-1 rounded border border-slate-200">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-500 font-bold uppercase block mb-1.5">Ideal para:</span>
                <p className="text-xs text-slate-700 bg-blue-50/70 p-3 rounded-lg border border-blue-200 leading-relaxed font-medium">
                  Detecção direta de rasgos de borda, rasgos centrais, rasgos com abertura, sobreposição e desalinhamento geométrico sem contato físico.
                </p>
              </div>

            </div>
          </div>

          {/* RADEC Vibracional Technical Datasheet */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-[#072752] bg-slate-200 px-2.5 py-1 rounded">
                    Sensoriamento Mecânico & Frequencial
                  </span>
                  <h3 className="text-2xl font-bold text-[#072752] font-['Outfit'] mt-1">
                    RADEC® Vibracional
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#072752] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-3">
                {vibracionalSpecs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-200 text-xs md:text-sm gap-1">
                    <span className="font-semibold text-slate-600">{spec.label}</span>
                    <span className="font-bold text-[#072752] sm:text-right font-mono bg-white px-2.5 py-1 rounded border border-slate-200">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <span className="text-xs text-slate-500 font-bold uppercase block mb-1.5">Ideal para:</span>
                <p className="text-xs text-slate-700 bg-slate-200/60 p-3 rounded-lg border border-slate-300 leading-relaxed font-medium">
                  Detecção direta de queda de material, tiras soltas descoladas e eventos de choque mecânico severo no transportador.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={onOpenQuote}
            className="bg-[#0356c5] hover:bg-[#072752] text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition inline-flex items-center gap-2"
          >
            <span>Solicitar Especificação de Projeto para Minha Planta</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
