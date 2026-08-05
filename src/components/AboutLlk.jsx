import React from 'react';
import { Shield, Award, Cpu, Sparkles, Building, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutLlk({ onOpenQuote }) {
  const awards = [
    { title: 'Boas Práticas na Mineração 2024', detail: '1º e 3º Lugar - Melhor PoC' },
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

  return (
    <section id="sobre-llk" className="py-20 bg-slate-100 text-slate-800 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0356c5] bg-blue-50 px-3 py-1 rounded border border-blue-200">
              Sobre a LLK Soluções
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-[#072752] font-['Outfit'] leading-tight">
              Especialistas em Eficiência Operacional para a Indústria 4.0
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Com 17 anos de atuação no mercado, a LLK é referência nacional na aplicação de visão computacional, inteligência artificial, análise de vibração e IoT para proteção de ativos nas Indústrias de Base.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="industrial-card p-4 rounded-xl border border-slate-200">
                <span className="text-3xl font-extrabold text-[#072752] font-['Outfit'] block">28 Patentes</span>
                <span className="text-xs font-semibold text-slate-500">Registradas no INPI</span>
              </div>
              <div className="industrial-card p-4 rounded-xl border border-slate-200">
                <span className="text-3xl font-extrabold text-[#0356c5] font-['Outfit'] block">+100 Soluções</span>
                <span className="text-xs font-semibold text-slate-500">Desenvolvidas em Campo</span>
              </div>
            </div>
          </div>

          {/* Innovation Hub Panel */}
          <div className="lg:col-span-6 industrial-card p-8 rounded-2xl border border-slate-200 space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <Building className="w-5 h-5 text-[#0356c5]" />
              <h3 className="text-lg font-bold text-[#072752] font-['Outfit']">Ecossistema Institucional & Parcerias</h3>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Desenvolvemos inovação em rede com os principais polos de tecnologia e mineração do país:
            </p>

            <div className="space-y-3 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0356c5] shrink-0" />
                <span>Mining Hub — Programa de Inovação Aberta em Mineração</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0356c5] shrink-0" />
                <span>UFMG — Universidade Federal de Minas Gerais</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0356c5] shrink-0" />
                <span>BHTec — Parque Tecnológico de Belo Horizonte</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <span className="text-xs font-bold text-[#072752] uppercase block">Premiações de Destaque:</span>
              {awards.map((a, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-800">{a.title}</span>
                  <span className="text-[#0356c5] font-semibold">{a.detail}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Portfolio Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-end border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-extrabold uppercase text-[#0356c5]">Portfólio Industrial LLK</span>
              <h3 className="text-2xl font-bold text-[#072752] font-['Outfit']">Outras Tecnologias de Processo e Qualidade</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {complementarySolutions.map((sol, idx) => (
              <div key={idx} className="industrial-card p-5 rounded-xl space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#0356c5] uppercase block">{sol.category}</span>
                  <h4 className="text-lg font-extrabold text-[#072752] font-['Outfit']">{sol.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
