import React, { useState } from 'react';
import { Activity, ShieldCheck, Cpu, Anchor, ArrowDownRight, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function RadecVibracional({ onOpenQuote }) {
  const [activePos, setActivePos] = useState('tambor');

  const positionInfo = {
    tambor: {
      title: 'RADEC® Vibracional Tambor',
      location: 'Instalado nos tambores de acionamento e retorno',
      desc: 'Proteção crítica nos pontos de maior tensão e dobramento da correia transportadora, onde objetos perfurantes presos provocam cortes contínuos.',
      advantage: 'Alta sensibilidade a choques bruscos e atritos atípicos.',
      badge: 'Posição Primária'
    },
    retorno: {
      title: 'RADEC® Vibracional Retorno',
      location: 'Instalado na mesa de retorno descarregada',
      desc: 'Monitora a correia em sua fase de retorno, identificando descolamentos da borracha (tiras soltas) ou rasgos antes do reuso.',
      advantage: 'Substitui com 100% de eficácia as frágeis cordas mecânicas e bandejas.',
      badge: 'Elimina Cordas Mecânicas'
    },
    carga: {
      title: 'RADEC® Vibracional Carga',
      location: 'Sob a calha de carregamento e mesas de impacto',
      desc: 'Capta a vibração provocada pela queda e travamento de blocos de rocha pontiagudos perfurando o chassi da correia.',
      advantage: 'Impede a propagação do rasgo por centenas de metros.',
      badge: 'Proteção de Impacto'
    },
    inox: {
      title: 'Estrutura Especial em Aço Inox (IP68)',
      location: 'Desenvolvido para terminais marinhos (Ex.: Porto de Nacala - Moçambique)',
      desc: 'Gabinete reforçado em Aço Inoxidável resistente à maresia extrema, névoa salina e intempéries em ambiente offshore.',
      advantage: 'Durabilidade de longo prazo contra oxidação severa.',
      badge: 'Ambiente Marinho'
    }
  };

  const currentPos = positionInfo[activePos];

  return (
    <section id="radec-vibracional" className="scroll-mt-24 py-20 bg-[#072752] text-white border-b border-blue-900/60">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 bg-cyan-950 px-3 py-1 rounded border border-cyan-800">
            Sensoriamento de Vibração & IoT Industrial
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-['Outfit']">
            RADEC® Vibracional
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            Substitui definitivamente os frágeis sistemas mecânicos de cordas e bandejas. Resposta imediata por análise frequencial de sensores inteligentes.
          </p>
        </div>

        {/* Product Photo & Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Real Diagram Left Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#041d3d] p-4 rounded-2xl border border-blue-800 shadow-xl space-y-3">
              <img 
                src={getAssetUrl('assets/photos/radec_vibracional_diagram.png')} 
                alt="Posicionamento do RADEC Vibracional no Transportador" 
                className="w-full h-auto rounded-lg object-contain bg-white p-2"
              />
              <div className="text-xs text-slate-300 font-medium">
                Desenho Esquemático: Posicionamento no Tambor, Retorno e Carga
              </div>
            </div>

            <div className="bg-[#041d3d] p-5 rounded-2xl border border-blue-800 space-y-2 text-xs">
              <span className="font-bold text-cyan-300 uppercase block">Principais Falhas Detectadas:</span>
              <ul className="space-y-1.5 text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Descolamento de Camada / Tira Solta</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Rasgo Central com Queda de Material</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Danificação da Carcaça Interna da Correia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Position Tab Column */}
          <div className="lg:col-span-7 bg-[#041d3d] p-6 md:p-8 rounded-2xl border border-blue-800 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mb-2">
                Arquitetura de Aplicação em Campo
              </span>
              <h3 className="text-2xl font-extrabold font-['Outfit'] mb-6">
                Posicionamento Personalizado no Transportador
              </h3>

              {/* Position Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                <button
                  onClick={() => setActivePos('tambor')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold transition border ${
                    activePos === 'tambor'
                      ? 'bg-[#0356c5] text-white border-blue-400 shadow'
                      : 'bg-[#072752] text-slate-300 border-blue-900 hover:bg-[#031633]'
                  }`}
                >
                  1. Tambor
                </button>
                <button
                  onClick={() => setActivePos('retorno')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold transition border ${
                    activePos === 'retorno'
                      ? 'bg-[#0356c5] text-white border-blue-400 shadow'
                      : 'bg-[#072752] text-slate-300 border-blue-900 hover:bg-[#031633]'
                  }`}
                >
                  2. Retorno
                </button>
                <button
                  onClick={() => setActivePos('carga')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold transition border ${
                    activePos === 'carga'
                      ? 'bg-[#0356c5] text-white border-blue-400 shadow'
                      : 'bg-[#072752] text-slate-300 border-blue-900 hover:bg-[#031633]'
                  }`}
                >
                  3. Carga
                </button>
                <button
                  onClick={() => setActivePos('inox')}
                  className={`py-2.5 px-3 rounded-lg text-xs font-bold transition border ${
                    activePos === 'inox'
                      ? 'bg-emerald-600 text-white border-emerald-400 shadow'
                      : 'bg-[#072752] text-slate-300 border-blue-900 hover:bg-[#031633]'
                  }`}
                >
                  4. Aço Inox
                </button>
              </div>

              {/* Detail Card */}
              <div className="bg-[#072752] p-6 rounded-xl border border-blue-700/60 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold text-cyan-300 bg-blue-950 px-2.5 py-1 rounded border border-blue-800 inline-block mb-2">
                      {currentPos.badge}
                    </span>
                    <h4 className="text-xl font-bold text-white">{currentPos.title}</h4>
                    <p className="text-xs text-slate-300 font-mono mt-1">{currentPos.location}</p>
                  </div>
                </div>

                <p className="text-slate-200 text-sm leading-relaxed">
                  {currentPos.desc}
                </p>

                <div className="p-3.5 rounded-lg bg-blue-950/80 border border-blue-800 text-xs text-blue-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold text-white">Vantagem Operacional: </span>
                    {currentPos.advantage}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-800 flex items-center justify-between text-xs text-slate-300 font-mono">
              <span>Sinal Digital: TCP/IP & Relé Desarme</span>
              <span className="text-emerald-400 font-bold">Tempo de Resposta: &lt; 50ms</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
