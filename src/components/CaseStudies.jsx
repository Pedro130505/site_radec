import React from 'react';
import { Award, MapPin, Building2, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

export default function CaseStudies({ onOpenQuote }) {
  const cases = [
    {
      client: 'Vale S.A.',
      location: 'Mina de Cauê — Itabira / MG',
      segment: 'Mineração de Ferro',
      solution: 'RADEC® Visão',
      details: 'Instalado em correia de peneiramento de minério de ferro para detecção contínua de rasgos e desalinhamentos severos em ambiente de alta poeira.',
      image: '/assets/photos/Apresentao_p10_45.jpg',
      badge: 'Mineração'
    },
    {
      client: 'Vale S.A. Moçambique',
      location: 'Porto de Nacala — Moçambique',
      segment: 'Terminal Portuário',
      solution: 'RADEC® Vibracional (Aço Inox)',
      details: 'Estrutura fabricada em Aço Inoxidável IP68 resistente à maresia de altíssima corrosividade marinha.',
      image: '/assets/photos/Apresentao_p5_25.jpg',
      badge: 'Portuário'
    },
    {
      client: 'CSN (Companhia Siderúrgica Nacional)',
      location: 'Usina de Volta Redonda / RJ',
      segment: 'Siderurgia',
      solution: 'RADEC® Visão',
      details: 'Instalado na linha principal de alimentação da usina siderúrgica em correia singela inclinada crítica de grande extensão.',
      image: '/assets/photos/Apresentao_p11_172.jpg',
      badge: 'Siderurgia'
    },
    {
      client: 'LafargeHolcim',
      location: 'Fábrica de Barroso / MG',
      segment: 'Cimentos & Agregados',
      solution: 'RADEC® Vibracional',
      details: 'Instalação de alta complexidade em correia suspensa (Flying Belt) de longa distância.',
      image: '/assets/photos/Apresentao_p5_26.jpg',
      badge: 'Cimentos'
    },
    {
      client: 'Ternium Brasil',
      location: 'Complexo de Santa Cruz / RJ',
      segment: 'Siderurgia',
      solution: 'RADEC® Vibracional',
      details: 'Instalado no circuito das correias mais críticas da usina para garantir a máxima disponibilidade contínua de sinterização.',
      image: '/assets/photos/Apresentao_p5_27.jpg',
      badge: 'Siderurgia'
    },
    {
      client: 'MRN (Mineração Rio do Norte)',
      location: 'Porto Trombetas / PA',
      segment: 'Mineração de Bauxita',
      solution: 'RADEC® Visão',
      details: 'Proteção direta do TCLD no sistema de britagem primária de bauxita sob umidade amazônica severa.',
      image: '/assets/photos/Apresentao_p5_28.png',
      badge: 'Mineração'
    }
  ];

  return (
    <section id="casos-reais" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0356c5] bg-blue-50 px-3 py-1 rounded border border-blue-200">
            Aplicações Comprovadas em Campo
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#072752] font-['Outfit']">
            Casos de Sucesso nas Maiores Indústrias
          </h2>
          <p className="text-slate-600 text-base">
            Instalações reais operando com alta confiabilidade nas principais mineradoras, siderúrgicas e cimenteiras do Brasil e do exterior.
          </p>
        </div>

        {/* Real Field Photo Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <div key={idx} className="industrial-card rounded-2xl overflow-hidden flex flex-col justify-between">
              
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100 border-b border-slate-200">
                  <img 
                    src={c.image} 
                    alt={`Aplicação RADEC na ${c.client}`} 
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white bg-[#072752] px-2.5 py-1 rounded shadow">
                    {c.badge}
                  </span>
                  <span className="absolute bottom-3 right-3 text-xs font-extrabold text-white bg-[#0356c5] px-2.5 py-1 rounded shadow">
                    {c.solution}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-extrabold text-[#072752]">{c.client}</h3>
                  
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#0356c5] shrink-0" />
                    <span>{c.location}</span>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {c.details}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-[#0356c5] font-bold">
                <span>Operação Contínua Reativa</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>

            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-[#072752] text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold font-['Outfit']">
              Agende uma Apresentação Técnica com Nossos Engenheiros
            </h3>
            <p className="text-blue-200 text-sm">
              Analisamos as especificações da sua correia transportadora e apresentamos os estudos de viabilidade.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="bg-[#0356c5] hover:bg-[#02449e] text-white font-bold px-7 py-3.5 rounded-lg shadow transition flex items-center gap-2 shrink-0"
          >
            <span>Falar com Especialista RADEC®</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
