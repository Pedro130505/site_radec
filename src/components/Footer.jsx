import React from 'react';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function Footer({ onNavigate, onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    onNavigate(sectionId);
  };

  return (
    <footer className="bg-[#072752] text-slate-300 border-t border-blue-900/80 pt-16 pb-12 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <img 
              src={getAssetUrl('assets/Logotipos/white/LLK-LOGO-A-WHITE.svg')} 
              alt="LLK Soluções Industriais" 
              className="h-10 w-auto"
            />
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-normal">
              LLK Soluções Industriais — Especialistas em eficiência operacional, visão computacional, inteligência artificial e proteção de ativos para as Indústrias de Base.
            </p>
            <span className="text-xs font-semibold text-blue-200 block font-mono">
              INNOVATION STARTS HERE
            </span>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solucoes" onClick={(e) => handleNavClick(e, '#solucoes')} className="hover:text-white transition">
                  Soluções RADEC®
                </a>
              </li>
              <li>
                <a href="#comparativo" onClick={(e) => handleNavClick(e, '#comparativo')} className="hover:text-white transition">
                  Comparativo Técnico
                </a>
              </li>
              <li>
                <a href="#case-vale" onClick={(e) => handleNavClick(e, '#case-vale')} className="hover:text-white transition">
                  Case VALE Cauê
                </a>
              </li>
              <li>
                <a href="#roi" onClick={(e) => handleNavClick(e, '#roi')} className="hover:text-white transition">
                  Calculadora de ROI
                </a>
              </li>
              <li>
                <a href="#fichas-tecnicas" onClick={(e) => handleNavClick(e, '#fichas-tecnicas')} className="hover:text-white transition">
                  Fichas Técnicas
                </a>
              </li>
              <li>
                <a href="#sobre-llk" onClick={(e) => handleNavClick(e, '#sobre-llk')} className="hover:text-white transition">
                  Sobre a LLK
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Industrial Portfolio */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">Outras Soluções</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-white font-semibold">SHM®</span> — Integridade Estrutural</li>
              <li><span className="text-white font-semibold">Teor Online</span> — Análise Fe/SiO₂ (60s)</li>
              <li><span className="text-white font-semibold">V-Scan®</span> — Balança Volumétrica</li>
              <li><span className="text-white font-semibold">V-Count®</span> — Corpos Moedores</li>
              <li><span className="text-white font-semibold">Colorímetro®</span> — Dosagem de Reagentes</li>
            </ul>
          </div>

          {/* Column 4: Official Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-['Outfit']">Contato Institucional</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Belo Horizonte / MG — BHTec (Parque Tecnológico)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+553136819007" className="hover:text-white font-semibold transition">(31) 3681-9007</a>
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} LLK Soluções Industriais Ltda. Todos os direitos reservados. RADEC® é marca registrada.</span>

          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition flex items-center gap-1.5 font-semibold text-xs"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
