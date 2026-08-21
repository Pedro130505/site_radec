import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';

export default function TrustBar() {
  const clients = [
    'Vale',
    'Vale Base Metals',
    'Hydro',
    'MRN',
    'CSN',
    'CSN Cimentos',
    'Ternium',
    'Usiminas',
    'CMOC',
    'Mosaic',
    'ArcelorMittal',
    'Kinross',
    'Lundin Mining',
    'Nacala Logistics'
  ];

  return (
    <section className="bg-slate-100 text-slate-800 py-8 border-b border-slate-200 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* PDF Section 5.1 Static Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0356c5] text-white flex items-center justify-center font-bold shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm md:text-base font-extrabold text-[#072752] font-['Outfit']">
                Empresas que confiam na LLK — Presença em operações industriais
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Desenvolvido e homologado em parceria com a Vale e o Mining Hub.
              </p>
            </div>
          </div>

          <span className="text-xs font-bold text-slate-600 bg-white px-3 py-1.5 rounded border border-slate-200 self-start sm:self-auto">
            14 Grandes Grupos Homologados
          </span>
        </div>

        {/* PDF Section 5.1 Static Responsive Grid (No Carousel, Equivalent Visual Weight) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
          {clients.map((client, idx) => (
            <div 
              key={idx}
              className="px-3 py-2.5 rounded-lg bg-white border border-slate-200 text-center text-slate-700 text-xs font-bold tracking-tight hover:border-[#0356c5] hover:text-[#0356c5] transition shadow-xs flex items-center justify-center min-h-[42px]"
            >
              {client}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
