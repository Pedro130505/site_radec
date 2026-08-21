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

        {/* Connected Industrial Flow Line (No Boxed Glass Cards / No Icon Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 text-left">
          
          {/* Step 1: Field Sensors */}
          <div className="border-t-2 border-blue-500 pt-5 space-y-2 relative">
            <span className="text-xs font-bold text-blue-400 font-mono block">01 / CAPTAÇÃO</span>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Sensores & Câmeras</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Câmeras IP67 Face/Contraface ou Sensores de Vibração nos rolos.</p>
          </div>

          {/* Step 2: Processing Unit */}
          <div className="border-t border-slate-700/80 pt-5 space-y-2 relative">
            <span className="text-xs font-bold text-cyan-400 font-mono block">02 / PROCESSAMENTO</span>
            <h3 className="text-lg font-bold text-white font-['Outfit']">Unidade Local</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Video Analytics com IA ou Eletrônica de Vibração em tempo real.</p>
          </div>

          {/* Step 3: Industrial Switch */}
          <div className="border-t border-slate-700/80 pt-5 space-y-2 relative">
            <span className="text-xs font-bold text-emerald-400 font-mono block">03 / COMUNICAÇÃO</span>
            <h3 className="text-lg font-bold text-white font-['Outfit']">POE Switch / Modbus</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Roteamento rápido via POE com alta imunidade a ruídos industriais.</p>
          </div>

          {/* Step 4: PLC & SCADA */}
          <div className="border-t border-slate-700/80 pt-5 space-y-2 relative">
            <span className="text-xs font-bold text-amber-400 font-mono block">04 / AUTOMAÇÃO</span>
            <h3 className="text-lg font-bold text-white font-['Outfit']">CLP & Supervisório</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Desarme automático de relé e registro completo de histórico de alarme.</p>
          </div>

        </div>

        {/* Protocol Details - Fluid Open Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-800">
          {protocols.map((proto, idx) => (
            <div key={idx} className="space-y-1.5">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block">{proto.name}</span>
              <p className="text-xs text-slate-300 leading-relaxed">{proto.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
