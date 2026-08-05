import React, { useState } from 'react';
import { Check, X, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ComparisonMatrix({ onOpenQuote }) {
  const [env, setEnv] = useState('padrao');
  const [risk, setRisk] = useState('rasgo');

  const getRecommendation = () => {
    if (env === 'marinho') return 'RADEC® Vibracional (Gabinetes em Aço Inox IP68)';
    if (risk === 'desalinhamento') return 'RADEC® Visão (Câmeras Face/Contraface IP67)';
    if (risk === 'tira') return 'RADEC® Vibracional (Sensoriamento Frequencial)';
    return 'RADEC® Combo (Proteção Total Redundante Visão + Vibracional)';
  };

  return (
    <section id="comparativo" className="py-20 bg-slate-100 text-slate-800 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0356c5] bg-blue-50 px-3 py-1 rounded border border-blue-200">
            Matriz Técnica de Especificações
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#072752] font-['Outfit']">
            Comparativo Técnico de Soluções
          </h2>
          <p className="text-slate-600 text-base">
            Análise detalhada entre RADEC® Visão, RADEC® Vibracional e métodos mecânicos tradicionais.
          </p>
        </div>

        {/* Technical Data Table */}
        <div className="overflow-x-auto mb-16 industrial-card rounded-2xl shadow-sm border border-slate-200">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-slate-200 bg-[#072752] text-white">
                <th className="p-4 text-xs font-bold uppercase tracking-wider">Parâmetro Técnico</th>
                <th className="p-4 text-sm font-extrabold text-blue-200 bg-[#0356c5]">RADEC® Visão</th>
                <th className="p-4 text-sm font-extrabold text-cyan-200 bg-[#02449e]">RADEC® Vibracional</th>
                <th className="p-4 text-xs font-bold text-slate-300 bg-slate-800">Métodos Mecânicos Tradicionais</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs md:text-sm text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#072752] bg-slate-50">Princípio Tecnológico</td>
                <td className="p-4 font-semibold text-[#0356c5]">Visão Computacional & IA (IP67)</td>
                <td className="p-4 font-semibold text-blue-900">Análise Frequencial de Vibração</td>
                <td className="p-4 text-slate-500">Contato mecânico por atrito</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#072752] bg-slate-50">Detecção de Desalinhamento</td>
                <td className="p-4 text-emerald-700 font-bold flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Sim (Precisão milimétrica)</td>
                <td className="p-4 text-slate-600">Indireta</td>
                <td className="p-4 text-rose-600 font-bold flex items-center gap-1.5"><X className="w-4 h-4 text-rose-600" /> Não detecta</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#072752] bg-slate-50">Detecção de Tira Solta</td>
                <td className="p-4 text-slate-600">Secundária</td>
                <td className="p-4 text-emerald-700 font-bold flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-600" /> Sim (Especialidade)</td>
                <td className="p-4 text-rose-600 font-bold flex items-center gap-1.5"><X className="w-4 h-4 text-rose-600" /> Não detecta</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#072752] bg-slate-50">Partes Móveis Mecânicas</td>
                <td className="p-4 text-emerald-700 font-bold">Zero partes móveis</td>
                <td className="p-4 text-emerald-700 font-bold">Zero partes móveis</td>
                <td className="p-4 text-rose-600 font-bold">Partes móveis (emperramento frequente)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#072752] bg-slate-50">Níveis de Alerta Gradativos</td>
                <td className="p-4 text-emerald-700 font-bold">5 Níveis de Alerta (%)</td>
                <td className="p-4 text-emerald-700 font-bold">Ajuste de Frequência Fina</td>
                <td className="p-4 text-rose-600 font-bold">Sem níveis (Apenas relé liga/desliga)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#072752] bg-slate-50">Comunicação CLP / SCADA</td>
                <td className="p-4 text-emerald-700 font-bold">Nativa (Modbus, TCP/IP, Relé)</td>
                <td className="p-4 text-emerald-700 font-bold">Nativa (TCP/IP, Relé Digital)</td>
                <td className="p-4 text-slate-500">Contato seco simples sem diagnóstico</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Corporate Selector Wizard */}
        <div className="bg-[#072752] text-white p-8 rounded-2xl shadow-xl border border-blue-900">
          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block">
              Assistente Técnico de Especificação
            </span>
            <h3 className="text-2xl font-extrabold font-['Outfit']">
              Recomendação para a Sua Planta Industrial
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-2">
              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-200 uppercase">1. Ambiente Operacional:</label>
                <select
                  value={env}
                  onChange={(e) => setEnv(e.target.value)}
                  className="w-full bg-[#041d3d] border border-blue-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="padrao">Mineração / Siderurgia Padrão</option>
                  <option value="marinho">Terminal Portuário / Ambiente Salino</option>
                  <option value="poeira">Alta Poeira de Peneiramento</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-blue-200 uppercase">2. Maior Risco Identificado:</label>
                <select
                  value={risk}
                  onChange={(e) => setRisk(e.target.value)}
                  className="w-full bg-[#041d3d] border border-blue-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-400"
                >
                  <option value="rasgo">Rasgo Central por Objeto Perfurante</option>
                  <option value="desalinhamento">Desalinhamento Lateral da Correia</option>
                  <option value="tira">Descolamento de Camada (Tira Solta)</option>
                </select>
              </div>
            </div>

            <div className="bg-[#031633] p-5 rounded-xl border border-blue-600 text-center space-y-1">
              <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">Solução Recomendada pela Engenharia:</span>
              <p className="text-xl font-black text-white font-['Outfit']">
                {getRecommendation()}
              </p>
            </div>

            <button
              onClick={onOpenQuote}
              className="bg-[#0356c5] hover:bg-[#02449e] text-white font-bold py-3.5 px-8 rounded-lg shadow transition flex items-center gap-2 mx-auto"
            >
              <span>Solicitar Proposta para Esta Configuração</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
