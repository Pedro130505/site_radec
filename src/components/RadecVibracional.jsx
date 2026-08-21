import React, { useState } from 'react';
import { Activity, ShieldCheck, CheckCircle2, Info } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function RadecVibracional({ onOpenQuote }) {
  const [selectedScenario, setSelectedScenario] = useState('normal');

  const scenarios = {
    normal: {
      name: 'Correia Normal',
      eventType: 'Vibração padrão contínua da estrutura sem choques de impacto.',
      detection: 'Operação dentro do envelope de frequências normais.',
      status: 'Normal (Operação OK)',
      statusColor: 'bg-emerald-600 text-white',
      plcSignal: 'Sinal Digital 1 (Normalidade) enviado ao PLC',
      action: 'Supervisão sem intervenção.'
    },
    queda: {
      name: 'Queda de Material',
      eventType: 'Impacto rítmico ou atrito direto de blocos soltos na calha/mesa.',
      detection: 'SIM — Picos frequenciais de choque mecânico captados pelos sensores.',
      status: 'Alerta / Detecção Vibracional',
      statusColor: 'bg-amber-600 text-white',
      plcSignal: 'Bit de Alerta de Impacto enviado ao Sistema de Controle',
      action: 'Disparo de aviso sonoro/visual na sala de controle.'
    },
    tira: {
      name: 'Tira Solta / Descolamento',
      manifestation: 'Aba de borracha descolada batendo contra a estrutura mecânica.',
      eventType: 'Batimento cíclico de alta frequência repetitiva.',
      detection: 'SIM (Especialidade) — Frequência característica de impacto de tira solta.',
      status: 'PROTEÇÃO ATIVA (Alerta Crítico)',
      statusColor: 'bg-rose-700 text-white animate-pulse',
      plcSignal: 'Sinal de Desarme por Relé Digital enviado ao PLC',
      action: 'Intertravamento automático para evitar arraste da camada.'
    },
    impacto: {
      name: 'Evento de Impacto Severo',
      eventType: 'Perfuração de bloco de rocha de grande porte na lona.',
      detection: 'SIM — Choque transiente de alta amplitude energética.',
      status: 'PROTEÇÃO ATIVA (Trip Imediato)',
      statusColor: 'bg-rose-700 text-white animate-pulse',
      plcSignal: 'Abertura imediata do contato de intertravamento',
      action: 'Parada instantânea do acionamento principal.'
    },
    sem_evento: {
      name: 'Situação Sem Evento Detectável',
      eventType: 'Avaria puramente óptica sem componente de impacto mecânico.',
      detection: 'NÃO — Danos sem manifestação vibracional são cobertos pela proteção óptica Visão.',
      status: 'Sem Disparo Vibracional',
      statusColor: 'bg-slate-700 text-slate-200',
      plcSignal: 'Sem alteração no relé vibracional',
      action: 'Monitoramento complementar efetuado pelo RADEC® Visão.'
    }
  };

  const currentScenario = scenarios[selectedScenario];

  return (
    <section id="radec-vibracional" className="scroll-mt-24 py-16 md:py-20 bg-[#072752] text-white border-b border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header (Pergunta 4 do PDF) */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="eyebrow eyebrow-white">
            Sensoriamento Frequencial de Choque Mecânico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-white">
            RADEC® Vibracional — Atuação em eventos de impacto
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            Detecta manifestações mecânicas associadas a rasgos, queda de material e tiras soltas, complementando a proteção óptica.
          </p>
        </div>

        {/* Real Product Image & Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <div className="bg-[#0b1c36] p-4 rounded-2xl border border-slate-700 shadow-md space-y-3">
              <img 
                src={getAssetUrl('assets/photos/radec_vibracional_diagram.png')} 
                alt="Desenho Esquemático do RADEC Vibracional" 
                className="w-full h-auto rounded-xl object-contain bg-white p-2"
              />
              <div className="text-xs text-slate-300 font-medium">
                Desenho Esquemático: Posicionamento no Tambor, Retorno e Carga
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#0b1c36] p-6 rounded-2xl border border-slate-700 shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0356c5] text-white flex items-center justify-center font-bold">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-['Outfit'] text-white">
                  Substituição Definitiva de Cordas e Bandejas
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Supera as limitações dos frágeis sistemas mecânicos tradicionais. Sensores IP69K instalados nos pontos de travamento reduzem falsas paradas e garantem atuação direta.
              </p>
            </div>

            <div className="bg-[#0b1c36] p-5 rounded-2xl border border-slate-700 space-y-2 text-xs">
              <span className="font-bold text-slate-300 uppercase block tracking-wider">Capacidades de Detecção Frequencial:</span>
              <ul className="space-y-2 text-slate-200 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Queda de material e atritos anômalos na calha</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Descolamento de camada / Tiras soltas em alta velocidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Choque por travamento de rocha perfurante</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Scenario Simulator (Honest / Clean Style) */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#0b1c36] border border-slate-700 shadow-md space-y-6">
          <div className="border-b border-slate-700/80 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Demonstração Conceitual Interativa
            </span>
            <h3 className="text-2xl font-bold font-['Outfit'] mt-1 text-white">
              Simule como o RADEC® Vibracional responde a eventos mecânicos
            </h3>
            <p className="text-slate-300 text-xs mt-1 font-normal">
              Selecione o evento mecânico abaixo para entender a lógica de detecção vibracional e a transmissão de sinal.
            </p>
          </div>

          {/* Scenario Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {Object.keys(scenarios).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedScenario(key)}
                className={`py-3 px-3 rounded-lg text-xs font-bold transition border text-center ${
                  selectedScenario === key
                    ? 'bg-[#0356c5] text-white border-[#0356c5] shadow-xs'
                    : 'bg-[#072752] text-slate-300 border-slate-700 hover:bg-[#072752]/80'
                }`}
              >
                {scenarios[key].name}
              </button>
            ))}
          </div>

          {/* Output Box */}
          <div className="bg-[#072752] p-6 rounded-xl border border-slate-700/80 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700 pb-3">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Cenário Mecânico:</span>
                <span className="text-lg font-bold text-white font-['Outfit']">{currentScenario.name}</span>
              </div>

              <span className={`px-3 py-1 rounded-md text-xs font-bold ${currentScenario.statusColor}`}>
                STATUS: {currentScenario.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#0b1c36] p-4 rounded-lg border border-slate-700/60 space-y-1">
                <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Tipo de Evento Mecânico:</span>
                <p className="text-slate-200 leading-relaxed font-normal">{currentScenario.eventType}</p>
                <p className="text-emerald-400 font-semibold pt-1">{currentScenario.detection}</p>
              </div>

              <div className="bg-[#0b1c36] p-4 rounded-lg border border-slate-700/60 space-y-1">
                <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Enviado ao Sistema de Controle:</span>
                <p className="text-white font-mono leading-relaxed font-bold">{currentScenario.plcSignal}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#0b1c36] border border-slate-700 text-xs text-slate-200 flex items-center gap-3">
              <Info className="w-4 h-4 text-[#0356c5] shrink-0" />
              <div>
                <strong className="text-white font-bold">Atuação Recomendada: </strong>
                <span>{currentScenario.action}</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 text-center font-medium">
            * Demonstração interativa com fins ilustrativos.
          </p>
        </div>

      </div>
    </section>
  );
}
