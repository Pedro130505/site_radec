import React from 'react';
import { Cpu, Server, Network, ShieldCheck, Radio, Share2, Layers, Database } from 'lucide-react';

export default function Architecture40() {
  const protocols = [
    { name: 'Modbus TCP / RTU', desc: 'Comunicação nativa e direta com CLPs Siemens, Rockwell, Schneider e ABB.' },
    { name: 'Saída Digital por Relé', desc: 'Desarme em tempo real (< 50ms) do sistema de intertravamento do transportador.' },
    { name: 'HTTP / REST API', desc: 'Envio de imagens de eventos e alertas para nuvem ou servidores SCADA locais.' },
    { name: 'Alimentação POE', desc: 'Cabeamento simplificado via Power-Over-Ethernet (POE Switch IP67).' }
  ];

  return (
    <section className="py-24 bg-[#040d1a] relative border-t border-blue-900/30">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0356c5]/20 border border-[#0356c5]/40 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Network className="w-4 h-4 text-blue-400" />
            <span>Indústria 4.0 & Conectividade</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-['Outfit']">
            Arquitetura de Rede RADEC®
          </h2>
          <p className="text-slate-300 text-base">
            Integração simples e direta com o sistema de automação e controle da sua planta industrial.
          </p>
        </div>

        {/* Diagram Graphic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 text-center">
          
          {/* Step 1: Field Sensors */}
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#0356c5]/30 text-blue-400 mx-auto flex items-center justify-center font-bold">
              <Radio className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-blue-300 font-mono block">PASSO 01</span>
            <h3 className="text-base font-bold text-white">Sensores & Câmeras</h3>
            <p className="text-slate-300 text-xs">Câmeras IP67 Face/Contraface ou Sensores de Vibração nos rolos.</p>
          </div>

          {/* Step 2: Processing Unit */}
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#0356c5]/30 text-cyan-400 mx-auto flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-cyan-300 font-mono block">PASSO 02</span>
            <h3 className="text-base font-bold text-white">Unidade de Processamento</h3>
            <p className="text-slate-300 text-xs">Video Analytics com IA ou Eletrônica de Vibração em tempo real.</p>
          </div>

          {/* Step 3: Industrial Switch */}
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#0356c5]/30 text-emerald-400 mx-auto flex items-center justify-center font-bold">
              <Server className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-300 font-mono block">PASSO 03</span>
            <h3 className="text-base font-bold text-white">POE Switch / Modbus</h3>
            <p className="text-slate-300 text-xs">Roteamento rápido via POE com alta imunidade a ruídos industriais.</p>
          </div>

          {/* Step 4: PLC & SCADA */}
          <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 space-y-3 relative">
            <div className="w-12 h-12 rounded-xl bg-[#0356c5]/30 text-amber-400 mx-auto flex items-center justify-center font-bold">
              <Database className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-amber-300 font-mono block">PASSO 04</span>
            <h3 className="text-base font-bold text-white">CLP & Supervisório</h3>
            <p className="text-slate-300 text-xs">Desarme automático de relé e registro completo de histórico de alarme.</p>
          </div>

        </div>

        {/* Protocol Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {protocols.map((proto, idx) => (
            <div key={idx} className="bg-[#07111e] p-5 rounded-xl border border-blue-900/50 space-y-2">
              <span className="text-sm font-bold text-blue-300 block">{proto.name}</span>
              <p className="text-xs text-slate-400 leading-relaxed">{proto.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
