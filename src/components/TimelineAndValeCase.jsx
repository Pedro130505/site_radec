import React from 'react';
import { 
  TrendingUp, ShieldCheck, CheckCircle2, Clock, DollarSign, 
  Search, Cpu, Shield, Target, Users, TrendingDown, Info 
} from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function TimelineAndValeCase({ onOpenQuote }) {
  const timelineSteps = [
    { title: 'Desenvolvimento com a Vale', desc: 'Parceria de P&D iniciada no ecossistema Mining Hub' },
    { title: 'Avaliação técnica', desc: 'Validação de algoritmos em bancada laboratorial' },
    { title: 'Testes operacionais', desc: 'Primeiros protótipos instalados em ambiente severo' },
    { title: 'Testes controlados em correia', desc: 'Aferição de acurácia com falhas induzidas em ambiente seguro' },
    { title: 'Integração com automação', desc: 'Conexão direta com os CLPs da planta via Modbus TCP' },
    { title: 'Operação assistida', desc: 'Acompanhamento em tempo real sem trip para validação' },
    { title: 'Intertravamento', desc: 'Ativação do desarme automático de segurança' },
    { title: 'Eventos reais em operação', desc: 'Detecção de rasgos reais e economia de milhões em campo' }
  ];

  const eventSteps = [
    {
      step: 1,
      title: 'Alteração na borda identificada',
      desc: 'O sistema identifica uma alteração geométrica na borda da correia.',
      icon: Search,
      tag: 'RADEC® Visão'
    },
    {
      step: 2,
      title: 'Alarme',
      desc: 'O sistema gera alarme conforme a condição detectada.',
      icon: TrendingUp,
      tag: 'Alerta Nível 1'
    },
    {
      step: 3,
      title: 'Nível configurado de proteção',
      desc: 'A condição atinge o nível configurado para atuação de proteção.',
      icon: Shield,
      tag: 'Proteção Ativada'
    },
    {
      step: 4,
      title: 'Parada automática pelo controle',
      desc: 'O intertravamento é acionado e o transportador é parado pelo CLP.',
      icon: Cpu,
      tag: 'Intertravamento'
    },
    {
      step: 5,
      title: 'Inspeção em campo',
      desc: 'A equipe de manutenção inspeciona a correia com o transportador parado.',
      icon: Users,
      tag: 'Segurança Operacional'
    },
    {
      step: 6,
      title: 'Rasgo confirmado',
      desc: 'O rasgo na borda é confirmado durante a inspeção.',
      icon: Target,
      tag: 'Dano Contido'
    },
    {
      step: 7,
      title: 'Correia reparada',
      desc: 'A correia é reparada e o transportador retorna à operação com segurança.',
      icon: CheckCircle2,
      tag: 'Operação Segura'
    }
  ];

  return (
    <section id="case-vale" className="scroll-mt-24 py-16 md:py-20 bg-white text-slate-800 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section 1 Header: Timeline (Pergunta 6 do PDF) */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <span className="eyebrow">
            Da Pesquisa à Operação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit']">
            Desenvolvido para sair do laboratório e operar na mineração
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Um histórico de validação rigorosa com a Vale para atingir confiabilidade industrial absoluta.
          </p>
        </div>

        {/* Timeline Horizontal / Grid Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {timelineSteps.map((t, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative shadow-xs">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-[#072752] text-white text-xs font-bold font-mono flex items-center justify-center">
                  0{idx + 1}
                </span>
                {idx === 7 && (
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 bg-emerald-100 text-emerald-800 rounded-md">
                    Fase Atual
                  </span>
                )}
              </div>
              <h4 className="text-sm font-bold text-[#072752] font-['Outfit']">{t.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Section 2: Main Case Study Vale Mina de Cauê */}
        <div className="border-t border-slate-200 pt-16">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <span className="eyebrow">
              Prova Comercial Definitiva
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit']">
              Resultados comprovados em operação
            </h3>
            <p className="text-slate-600 text-base font-semibold">
              Vale | Mina de Cauê — Itabira/MG
            </p>
          </div>

          {/* Real Mine Photo + Case Highlights */}
          <div className="mb-12 rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative aspect-21/9 hidden md:block">
            <img 
              src={getAssetUrl('assets/photos/vale_caue_mine.jpg')} 
              alt="Mina de Cauê Vale Itabira MG" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#072752]/90 via-[#072752]/60 to-transparent p-8 flex items-center">
              <div className="max-w-xl text-white space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded border border-emerald-700">
                  Operação em Campo Homologada
                </span>
                <h4 className="text-2xl font-bold font-['Outfit']">
                  Mina de Cauê — Itabira/MG
                </h4>
                <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
                  Aplicação contínua da linha RADEC® com intertravamento ao sistema de controle da planta, evitando danos severos por desgarre de lona.
                </p>
              </div>
            </div>
          </div>

          {/* Before vs After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
            
            {/* Before RADEC */}
            <div className="lg:col-span-6 bg-rose-50/70 p-6 md:p-8 rounded-2xl border border-rose-200 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800 bg-rose-100 px-3 py-1 rounded-md">
                    ANTES DO RADEC®
                  </span>
                  <span className="text-xs font-mono font-bold text-rose-700">out/2021 a set/2024</span>
                </div>

                <h4 className="text-lg font-bold text-rose-950 mb-4">
                  Operação Sem Intertravamento Automático
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-rose-200 shadow-xs">
                    <Clock className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-2xl font-bold text-rose-900 block font-['Outfit']">+40 horas</span>
                      <span className="text-xs font-semibold text-slate-700">de paradas não programadas por danos de rasgo</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-rose-200 shadow-xs">
                    <DollarSign className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-2xl font-bold text-rose-900 block font-['Outfit']">R$ 17 milhões</span>
                      <span className="text-xs font-semibold text-slate-700">de prejuízo financeiro estimado com trocas e lucros cessantes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After RADEC */}
            <div className="lg:col-span-6 bg-emerald-50/70 p-6 md:p-8 rounded-2xl border border-emerald-300 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-md">
                    DEPOIS DO RADEC® INTERTRAVADO
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700">out/2024 a abr/2026</span>
                </div>

                <h4 className="text-lg font-bold text-emerald-950 mb-4">
                  Proteção Ativa Intertravada ao Sistema de Controle
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-200 shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-2xl font-bold text-emerald-900 block font-['Outfit']">+45 horas</span>
                      <span className="text-xs font-semibold text-slate-700">de paradas não programadas totalmente evitadas em campo</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-200 shadow-xs">
                    <TrendingUp className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-2xl font-bold text-emerald-900 block font-['Outfit']">R$ 15 milhões</span>
                      <span className="text-xs font-semibold text-slate-700">de retorno financeiro estimado por atuações preventivas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Section 3: 7 Steps Infographic - Um Evento Real em Operação */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#072752] text-white border border-slate-800 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-700">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Documentação de Campo
                </span>
                <h4 className="text-2xl md:text-3xl font-bold font-['Outfit'] text-white mt-1">
                  Um evento real em operação — Vale | Mina de Cauê – Itabira/MG
                </h4>
              </div>
              <span className="text-xs font-bold bg-[#0356c5] text-white px-3 py-1.5 rounded-md shrink-0">
                Evento Real com RADEC® Visão
              </span>
            </div>

            {/* 7 Steps Horizontal Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 mb-10">
              {eventSteps.map((ev, idx) => {
                const EvIcon = ev.icon;
                return (
                  <div key={idx} className="bg-[#0b1c36] p-4 rounded-xl border border-slate-700/80 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="w-5 h-5 rounded bg-[#0356c5] text-white text-[11px] font-bold font-mono flex items-center justify-center">
                          {ev.step}
                        </span>
                        <EvIcon className="w-4 h-4 text-slate-300" />
                      </div>
                      <h5 className="text-xs font-bold text-white leading-snug">{ev.title}</h5>
                      <p className="text-[11px] text-slate-300 mt-1.5 leading-relaxed font-normal">{ev.desc}</p>
                    </div>
                    <span className="text-[9px] font-bold uppercase px-2 py-0.5 bg-[#072752] text-slate-200 rounded border border-slate-700 block text-center">
                      {ev.tag}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Impact Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6 border-t border-slate-700 text-xs">
              <div className="bg-[#0b1c36] p-3 rounded-lg border border-slate-700/60 flex items-start gap-2">
                <Shield className="w-4 h-4 text-[#0356c5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Proteção na prática:</strong>
                  <span className="text-slate-300 text-[11px] font-normal">Aciona nível configurado e atua automaticamente no sistema de controle.</span>
                </div>
              </div>

              <div className="bg-[#0b1c36] p-3 rounded-lg border border-slate-700/60 flex items-start gap-2">
                <Target className="w-4 h-4 text-[#0356c5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Detecção antecipada:</strong>
                  <span className="text-slate-300 text-[11px] font-normal">Identifica a alteração geométrica antes da evolução da falha.</span>
                </div>
              </div>

              <div className="bg-[#0b1c36] p-3 rounded-lg border border-slate-700/60 flex items-start gap-2">
                <Cpu className="w-4 h-4 text-[#0356c5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Atuação automática:</strong>
                  <span className="text-slate-300 text-[11px] font-normal">Parada ativada sem dependência da intervenção humana.</span>
                </div>
              </div>

              <div className="bg-[#0b1c36] p-3 rounded-lg border border-slate-700/60 flex items-start gap-2">
                <Users className="w-4 h-4 text-[#0356c5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Segurança da equipe:</strong>
                  <span className="text-slate-300 text-[11px] font-normal">Inspeção realizada com a correia totalmente parada.</span>
                </div>
              </div>

              <div className="bg-[#0b1c36] p-3 rounded-lg border border-slate-700/60 flex items-start gap-2">
                <TrendingDown className="w-4 h-4 text-[#0356c5] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Redução de prejuízos:</strong>
                  <span className="text-slate-300 text-[11px] font-normal">Evita desgarre total e paradas de longos dias.</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center mt-6 flex items-center justify-center gap-1.5 font-medium">
              <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Esquema de comunicação do caso. Evento real ocorrido na Mina de Cauê – Itabira/MG, com o RADEC® Visão intertravado ao sistema de controle da Vale.</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
