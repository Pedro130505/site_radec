import React from 'react';
import { Shield, MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#072752] text-slate-300 border-t border-blue-900 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Logo & Company statement */}
          <div className="lg:col-span-2 space-y-4">
            <img 
              src="/assets/Logotipos/2. White/LLK-LOGO-A-WHITE.svg" 
              alt="LLK Soluções" 
              className="h-10 w-auto"
            />
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              LLK Soluções Industriais — Especialistas em eficiência operacional, visão computacional, inteligência artificial e proteção de ativos para as Indústrias de Base.
            </p>
            <span className="text-xs font-semibold text-blue-200 block font-mono">
              INNOVATION STARTS HERE
            </span>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#radec-visao" className="hover:text-white transition">RADEC® Visão</a></li>
              <li><a href="#radec-vibracional" className="hover:text-white transition">RADEC® Vibracional</a></li>
              <li><a href="#comparativo" className="hover:text-white transition">Comparativo Técnico</a></li>
              <li><a href="#calculadora-roi" className="hover:text-white transition">Calculadora de ROI</a></li>
              <li><a href="#casos-reais" className="hover:text-white transition">Casos em Campo</a></li>
              <li><a href="#sobre-llk" className="hover:text-white transition">Sobre a LLK</a></li>
            </ul>
          </div>

          {/* Col 3: Soluções */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">Outras Soluções</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-white font-semibold">SHM®</span> — Integridade Estrutural</li>
              <li><span className="text-white font-semibold">Teor Online</span> — Análise Fe/SiO₂ (60s)</li>
              <li><span className="text-white font-semibold">V-Scan®</span> — Balança Volumétrica</li>
              <li><span className="text-white font-semibold">V-Count®</span> — Corpos Moedores</li>
              <li><span className="text-white font-semibold">Colorímetro®</span> — Dosagem Reagentes</li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Outfit']">Contato Institucional</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Belo Horizonte / MG — BHTec (Parque Tecnológico)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+553133333333" className="hover:text-white transition">(31) 3333-3333</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contato@llk.com.br" className="hover:text-white transition">contato@llk.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <span>www.llk.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} LLK Soluções Industriais Ltda. Todos os direitos reservados. RADEC® é marca registrada.</span>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition flex items-center gap-1.5 font-semibold"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
