import React from 'react';
import { CheckCircle2, AlertTriangle, Minus, Info, Eye, Activity, Box, Cable } from 'lucide-react';

export default function FailureEvolutionSection() {
  const matrixData = [
    {
      condition: 'Desalinhamento',
      visao: { type: 'direto', text: 'Direto' },
      vibracional: { type: 'secundario', text: 'Não é a função principal' },
      bandeja: { type: 'secundario', text: 'Não é a função principal' },
      ripcord: { type: 'secundario', text: 'Não é a função principal' },
    },
    {
      condition: 'Rasgo com sobreposição',
      visao: { type: 'direto', text: 'Direto' },
      vibracional: { type: 'secundario', text: 'Não é a função principal' },
      bandeja: { type: 'secundario', text: 'Não é a função principal' },
      ripcord: { type: 'secundario', text: 'Não é a função principal' },
    },
    {
      condition: 'Rasgo com abertura',
      visao: { type: 'direto', text: 'Direto' },
      vibracional: { type: 'condicional', text: 'Condicional' },
      bandeja: { type: 'contato', text: 'Depende de contato' },
      ripcord: { type: 'secundario', text: 'Não é a função principal' },
    },
    {
      condition: 'Rasgo com tiras soltas',
      visao: { type: 'secundario', text: 'Não é a função principal' },
      vibracional: { type: 'direto', text: 'Direto' },
      bandeja: { type: 'secundario', text: 'Não é a função principal' },
      ripcord: { type: 'contato', text: 'Depende de contato' },
    },
    {
      condition: 'Rasgo sem abertura',
      visao: { type: 'direto', text: 'Direto' },
      vibracional: { type: 'secundario', text: 'Não é a função principal' },
      bandeja: { type: 'secundario', text: 'Não é a função principal' },
      ripcord: { type: 'secundario', text: 'Não é a função principal' },
    },
    {
      condition: 'Furo com queda de material',
      visao: { type: 'secundario', text: 'Não é a função principal' },
      vibracional: { type: 'direto', text: 'Direto' },
      bandeja: { type: 'contato', text: 'Depende de contato / queda de material' },
      ripcord: { type: 'secundario', text: 'Não é a função principal' },
    },
  ];

  const renderBadge = (item) => {
    if (item.type === 'direto') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Direto</span>
        </span>
      );
    }
    if (item.type === 'condicional') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Condicional</span>
        </span>
      );
    }
    if (item.type === 'contato') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-50 text-orange-900 text-xs font-bold border border-orange-200">
          <AlertTriangle className="w-3.5 h-3.5 text-orange-600 shrink-0" />
          <span>{item.text}</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-slate-400 text-xs font-normal">
        <Minus className="w-3.5 h-3.5 text-slate-300 shrink-0" />
        <span>Não é a função principal</span>
      </span>
    );
  };

  return (
    <section id="comparativo" className="scroll-mt-24 py-16 md:py-20 bg-slate-50 text-slate-800 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header (Pergunta 5 do PDF) */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <span className="eyebrow">
            Comparativo Técnico Objetivo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#072752] font-['Outfit'] leading-tight">
            Um rasgo não começa necessariamente com uma correia destruída
          </h2>
          <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto">
            Diferentes falhas produzem diferentes manifestações ao longo de sua evolução. Alterações geométricas, abertura de rasgos, tiras soltas, queda de material e desalinhamento podem surgir em momentos diferentes.
          </p>
          <div className="pt-1">
            <p className="text-slate-700 text-xs md:text-sm font-semibold max-w-2xl mx-auto bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
              Por isso, diferentes tecnologias de proteção dependem de diferentes condições físicas para detectar ou atuar.
            </p>
          </div>
        </div>

        {/* Matrix Table Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 mb-8">
          <div className="p-6 bg-[#072752] text-white border-b border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold font-['Outfit']">
                Matriz comparativa de resposta física por falha
              </h3>
              <p className="text-slate-300 text-xs">
                Respostas das tecnologias de inspeção frente às manifestações físicas no transportador.
              </p>
            </div>
            <span className="text-xs font-semibold bg-slate-800 text-slate-200 px-3 py-1 rounded-md border border-slate-700 self-start md:self-auto">
              Esquema Conceitual de Proteção
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-xs font-bold text-[#072752] uppercase tracking-wider">
                  <th className="p-4 w-1/4">Condição</th>
                  <th className="p-4 w-1/5 bg-blue-50/70 border-x border-blue-100 text-[#0356c5]">
                    <div className="flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-[#0356c5]" />
                      <span>RADEC® Visão</span>
                    </div>
                  </th>
                  <th className="p-4 w-1/5 bg-slate-50 border-r border-slate-200 text-[#072752]">
                    <div className="flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-[#072752]" />
                      <span>RADEC® Vibracional</span>
                    </div>
                  </th>
                  <th className="p-4 w-1/5 text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Box className="w-4 h-4 text-slate-500" />
                      <span>Sistema de bandeja</span>
                    </div>
                  </th>
                  <th className="p-4 w-1/5 text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Cable className="w-4 h-4 text-slate-500" />
                      <span>Ripcord / monocord</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs md:text-sm bg-white">
                {matrixData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-[#072752] bg-slate-50/60">
                      {row.condition}
                    </td>
                    <td className="p-4 bg-blue-50/20 border-x border-blue-100">
                      {renderBadge(row.visao)}
                    </td>
                    <td className="p-4 bg-slate-50/30 border-r border-slate-200">
                      {renderBadge(row.vibracional)}
                    </td>
                    <td className="p-4">
                      {renderBadge(row.bandeja)}
                    </td>
                    <td className="p-4">
                      {renderBadge(row.ripcord)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Legend */}
          <div className="p-4 md:p-5 bg-slate-50 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong className="text-slate-800">Direto:</strong> detecta diretamente a condição</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong className="text-slate-800">Condicional:</strong> depende da manifestação associada</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0" />
              <span><strong className="text-slate-800">Depende de contato:</strong> atuação condicionada a contato físico</span>
            </div>
            <div className="flex items-center gap-2">
              <Minus className="w-4 h-4 text-slate-400 shrink-0" />
              <span><strong className="text-slate-800">Não é a função principal:</strong> tecnologia não dedicada</span>
            </div>
          </div>
        </div>

        {/* Closing Disclaimer */}
        <div className="max-w-3xl mx-auto text-center space-y-2 pt-2">
          <p className="text-base font-bold text-[#072752] font-['Outfit']">
            A família RADEC® combina diferentes princípios de detecção para ampliar a proteção da correia.
          </p>
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 font-medium">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Esquema conceitual para apoio comercial. A detecção depende da manifestação física da falha e da configuração de instalação.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
