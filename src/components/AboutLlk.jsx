import React from 'react';
import { Building, Award, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export default function AboutLlk({ onOpenQuote }) {
  const awards = [
    { title: 'Boas Práticas na Mineração 2024', detail: '1º e 3º Lugar — Melhor PoC' },
    { title: 'Top 10 IndTechs do Brasil', detail: '4 anos consecutivos de premiação' },
    { title: 'MStart & MSpot', detail: 'Maior número de desafios vencidos (Ciclos 1, 2, 4 e 5)' }
  ];

  const complementarySolutions = [
    { name: 'SHM®', category: 'Proteção Estrutural', desc: 'Monitoramento contínuo de integridade estrutural em recuperadoras e máquinas de pátio.' },
    { name: 'Teor Online', category: 'Análise de Qualidade', desc: 'Análise química por visão hiperespectral do teor de Ferro e Sílica sem contato com a correia (60s).' },
    { name: 'V-Scan®', category: 'Controle de Processo', desc: 'Balança volumétrica óptica por triangulação laser sem necessidade de remover rolos.' },
    { name: 'V-Count®', category: 'Controle de Processo', desc: 'Contagem e classificação óptica de corpos moedores em tempo real.' },
    { name: 'Colorímetro®', category: 'Análise de Qualidade', desc: 'Controle contínuo de cor e dosagem de reagentes em aquadutos e correias.' }
  ];

  const partners = [
    'Mining Hub — Programa de Inovação Aberta em Mineração',
    'UFMG — Universidade Federal de Minas Gerais',
    'BHTec — Parque Tecnológico de Belo Horizonte'
  ];

  return (
    <section id="sobre-llk" className="scroll-mt-24 py-16 md:py-20 bg-slate-50 text-slate-800 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="eyebrow">
            Sobre a LLK Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit']">
            Especialistas em Eficiência Operacional para a Indústria 4.0
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Com 17 anos de atuação no mercado, a LLK é referência nacional na aplicação de visão computacional, inteligência artificial, análise de vibração e IoT para proteção de ativos nas Indústrias de Base.
          </p>
        </div>

        {/* Overview & Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Numbers & Ecosystem */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <span className="text-4xl font-black text-[#072752] font-['Outfit'] block">28</span>
                <span className="text-xs font-bold text-[#0356c5] uppercase tracking-wider block mt-1">Patentes INPI</span>
                <span className="text-[11px] text-slate-500 font-medium">Registradas no INPI</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <span className="text-4xl font-black text-[#0356c5] font-['Outfit'] block">+100</span>
                <span className="text-xs font-bold text-[#072752] uppercase tracking-wider block mt-1">Soluções</span>
                <span className="text-[11px] text-slate-500 font-medium">Desenvolvidas em Campo</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                <Building className="w-5 h-5 text-[#0356c5]" />
                <h3 className="text-base font-bold text-[#072752] font-['Outfit']">Ecossistema Institucional & Parcerias</h3>
              </div>

              <p className="text-slate-600 text-xs leading-relaxed">
                Desenvolvemos inovação em rede com os principais polos de tecnologia e mineração do país:
              </p>

              <div className="space-y-2 text-xs font-semibold text-slate-700">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#0356c5] shrink-0" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards Column */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-200">
                <Award className="w-5 h-5 text-[#0356c5]" />
                <h3 className="text-base font-bold text-[#072752] font-['Outfit']">Premiações de Destaque</h3>
              </div>

              <div className="space-y-3">
                {awards.map((a, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <span className="font-bold text-[#072752] block text-sm">{a.title}</span>
                    <span className="text-[#0356c5] font-semibold">{a.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={onOpenQuote}
                className="w-full bg-[#072752] hover:bg-[#0356c5] text-white py-3.5 px-6 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 transition shadow-xs"
              >
                <span>Solicitar Diagnóstico Institucional RADEC®</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Portfolio Table / Cards */}
        <div className="space-y-6 pt-4 border-t border-slate-200">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-bold uppercase text-[#0356c5] tracking-wider block">Portfólio Industrial LLK</span>
              <h3 className="text-2xl font-bold text-[#072752] font-['Outfit'] mt-1">Outras Tecnologias de Processo e Qualidade</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {complementarySolutions.map((sol, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2 flex flex-col justify-between hover:border-[#0356c5] transition">
                <div>
                  <span className="text-[10px] font-bold text-[#0356c5] uppercase block">{sol.category}</span>
                  <h4 className="text-lg font-extrabold text-[#072752] font-['Outfit'] mt-1">{sol.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
