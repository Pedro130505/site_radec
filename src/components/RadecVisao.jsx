import React, { useState } from 'react';
import { Camera, ShieldCheck, Cpu, AlertTriangle, CheckCircle2, Info, Zap } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function RadecVisao({ onOpenQuote }) {
  const [selectedScenario, setSelectedScenario] = useState('normal');

  const scenarios = {
    normal: {
      name: 'Correia Normal',
      manifestation: 'Superfície e bordas com geometria preservada sem anomalias ópticas.',
      status: 'Normal (Operação Contínua)',
      statusColor: 'bg-emerald-600 text-white',
      plcSignal: 'Sinal OK (Relé Fechado / Modbus Bit 0: Normal)',
      action: 'Monitoramento contínuo sem necessidade de intervenção.'
    },
    borda: {
      name: 'Rasgo de Borda',
      manifestation: 'Descontinuidade ou fratura observada na borda lateral da correia.',
      status: 'Alerta / Proteção de Borda',
      statusColor: 'bg-amber-600 text-white',
      plcSignal: 'Alarme Borda + Bit Proteção Nível 2 enviado ao PLC',
      action: 'Notificação imediata no SCADA e preparação para intertravamento.'
    },
    abertura: {
      name: 'Rasgo com Abertura',
      manifestation: 'Abertura longitudinal visível com separação das faces do componente.',
      status: 'PROTEÇÃO ATIVA (Trip Recomendado)',
      statusColor: 'bg-rose-700 text-white animate-pulse',
      plcSignal: 'Comando de Intertravamento Imediato enviado ao PLC',
      action: 'Desarme automático do motor para conter o avanço do rasgo.'
    },
    sobreposicao: {
      name: 'Rasgo com Sobreposição',
      manifestation: 'Superposição de abas da borracha na linha de corte.',
      status: 'Alerta Nível 3 (Anomalia Estável)',
      statusColor: 'bg-orange-600 text-white',
      plcSignal: 'Alarme de Geometria enviado ao Sistema de Controle',
      action: 'Sinalização para inspeção preventiva na próxima parada.'
    },
    central: {
      name: 'Rasgo Central',
      manifestation: 'Linha de fratura central identificada pelas câmeras ópticas.',
      status: 'PROTEÇÃO ATIVA (Crítico)',
      statusColor: 'bg-rose-700 text-white animate-pulse',
      plcSignal: 'Comando de Parada de Emergência enviado ao PLC',
      action: 'Interrupção imediata da alimentação do transportador.'
    },
    desalinhamento: {
      name: 'Desalinhamento',
      manifestation: 'Deslocamento lateral do eixo central em relação aos roletes.',
      status: 'Alerta de Deslocamento Lateral',
      statusColor: 'bg-yellow-600 text-white',
      plcSignal: 'Registro de Tendência de Desalinhamento enviado ao SCADA',
      action: 'Alerta para atuação dos atuadores de alinhamento.'
    }
  };

  const currentScenario = scenarios[selectedScenario];

  return (
    <section id="radec-visao" className="scroll-mt-24 py-16 md:py-20 bg-white text-slate-800 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header (Pergunta 4 do PDF) */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="eyebrow">
            Inspeção Óptica & Video Analytics
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit']">
            RADEC® Visão — A correia é monitorada diretamente
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Sistema de inspeção óptica contínua para detecção precoce de alterações geométricas e danos estruturais sem contato mecânico.
          </p>
        </div>

        {/* 3 Main Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0356c5] flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#072752] font-['Outfit']">Visão computacional</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Monitora continuamente manifestações geométricas da correia transportadora por sensores de imagem de alta definição.
            </p>
          </div>

          <div className="card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0356c5] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#072752] font-['Outfit']">Monitoramento sem contato</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Não depende de contato mecânico com a correia para realizar a leitura, eliminando o desgaste e o risco de quebra física.
            </p>
          </div>

          <div className="card p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0356c5] flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#072752] font-['Outfit']">Integração industrial</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Informações de diagnóstico, alarme e proteção disponíveis em tempo real para o sistema de controle da planta via Modbus TCP e Relé.
            </p>
          </div>
        </div>

        {/* AI Validation Block */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#072752] text-white border border-slate-800 shadow-md mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-xs font-bold text-blue-200 uppercase tracking-widest">
              Algoritmo de Filtragem Inteligente
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-['Outfit'] text-white">
              Validação por Inteligência Artificial
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Uma camada de Inteligência Artificial auxilia na validação das condições ópticas observadas, aumentando a robustez do sistema frente a interferências ambientais, como determinadas variações de iluminação e presença de poeira suspensa.
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#0b1c36] p-4 rounded-xl border border-slate-700/70 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-white">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Confiabilidade Ante Falsos Disparos</span>
            </div>
            <p className="text-slate-300 font-normal leading-relaxed">
              Distingue sombras, sujeira inofensiva e vibrações normais de rasgos e desgarres estruturais reais.
            </p>
          </div>
        </div>

        {/* Real Technical Diagram & Photo */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <img 
              src={getAssetUrl('assets/photos/radec_visao_diagram.png')} 
              alt="Desenho Esquemático do RADEC Visão" 
              className="w-full h-auto rounded-xl object-contain bg-white border border-slate-200 p-2"
            />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-[#072752] font-['Outfit']">
              Esquema do Enclausuramento Óptico IP66
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Estrutura modular ajustável à largura da correia com iluminação própria e câmeras posicionadas para varredura contínua.
            </p>
            <div className="space-y-2.5 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Supervisão de Face e Contraface da lona</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instalável em qualquer ponto de interesse do transportador</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Grau de proteção IP66 para ambiente de poeira e umidade</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scenario Simulator (Honest / Clean Style) */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0356c5]">
              Demonstração Conceitual Interativa
            </span>
            <h3 className="text-2xl font-bold text-[#072752] font-['Outfit']">
              Simule como o RADEC® Visão interpreta a condição da correia
            </h3>
            <p className="text-slate-600 text-xs mt-1">
              Selecione o cenário abaixo para visualizar a resposta lógica do sistema e o sinal transmitido ao sistema de controle.
            </p>
          </div>

          {/* Scenario Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {Object.keys(scenarios).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedScenario(key)}
                className={`py-3 px-3 rounded-lg text-xs font-bold transition-all border text-center ${
                  selectedScenario === key
                    ? 'bg-[#072752] text-white border-[#072752] shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {scenarios[key].name}
              </button>
            ))}
          </div>

          {/* Display Output Card */}
          <div className="bg-[#0b1c36] text-white p-6 rounded-xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Cenário Selecionado:</span>
                <span className="text-lg font-bold text-white font-['Outfit']">{currentScenario.name}</span>
              </div>

              <span className={`px-3 py-1 rounded-md text-xs font-bold ${currentScenario.statusColor}`}>
                STATUS: {currentScenario.status}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#072752] p-4 rounded-lg border border-slate-700/60 space-y-1">
                <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Manifestação Observada:</span>
                <p className="text-slate-200 leading-relaxed font-normal">{currentScenario.manifestation}</p>
              </div>

              <div className="bg-[#072752] p-4 rounded-lg border border-slate-700/60 space-y-1">
                <span className="text-slate-400 font-bold uppercase block text-[10px] tracking-wider">Informação Enviada ao PLC:</span>
                <p className="text-white font-mono leading-relaxed font-bold">{currentScenario.plcSignal}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#072752] border border-slate-700 text-xs text-slate-200 flex items-center gap-3">
              <Info className="w-4 h-4 text-[#0356c5] shrink-0" />
              <div>
                <strong className="text-white font-bold">Ação Operacional do Sistema: </strong>
                <span>{currentScenario.action}</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-slate-500 text-center font-medium">
            * Demonstração interativa com fins ilustrativos.
          </p>
        </div>

      </div>
    </section>
  );
}
