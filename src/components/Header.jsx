import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function Header({ onNavigate }) {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [lang, setLang] = useState('PT');

  const navLinks = [
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Comparativo', href: '#comparativo' },
    { name: 'Case VALE', href: '#case-vale' },
    { name: 'ROI', href: '#roi' },
    { name: 'Fichas Técnicas', href: '#fichas-tecnicas' },
    { name: 'Entre em Contato', href: '#contato' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    onNavigate(sectionId);
    setMobileMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#072752] text-white shadow-md border-b border-blue-900/60 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo LLK + RADEC + Signature */}
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, '#home')} 
            className="flex items-center gap-3.5 group text-left"
          >
            <img 
              src={getAssetUrl('assets/Logotipos/white/LLK-LOGO-A-WHITE.svg')} 
              alt="LLK Soluções Industriais" 
              className="h-9 w-auto"
            />
            <div className="border-l border-blue-400/30 pl-3.5 py-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-white text-base md:text-lg leading-tight font-['Outfit']">
                  RADEC®
                </span>
              </div>
              <span className="block text-[10px] font-semibold text-slate-300 tracking-wide">
                Proteção Ativa para Correias Transportadoras
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs md:text-sm font-semibold text-slate-200 hover:text-white transition-colors duration-150 py-2 border-b-2 border-transparent hover:border-[#0356c5]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Phone & Language Selector (No bulky CTA button) */}
          <div className="hidden sm:flex items-center gap-5 text-xs text-slate-200">
            {/* Clickable Commercial Phone */}
            <a 
              href="tel:+553136819007" 
              className="flex items-center gap-2 hover:text-white font-semibold transition py-1 px-2.5 rounded bg-blue-950/70 border border-blue-800/80"
              title="Ligar para a engenharia comercial da LLK"
            >
              <Phone className="w-3.5 h-3.5 text-[#0356c5]" />
              <span>(31) 3681-9007</span>
            </a>

            {/* Language Selector PT / EN */}
            <button
              onClick={() => setLang(lang === 'PT' ? 'EN' : 'PT')}
              className="flex items-center gap-1.5 px-2 py-1 rounded bg-blue-950/60 border border-blue-800/60 text-slate-300 hover:text-white transition font-mono text-[11px]"
              title="Alternar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span className={lang === 'PT' ? 'font-bold text-white' : 'text-slate-400'}>PT</span>
              <span className="text-slate-600">|</span>
              <span className={lang === 'EN' ? 'font-bold text-white' : 'text-slate-400'}>EN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2.5 rounded-lg bg-blue-950 text-white border border-blue-800 focus:outline-none"
            aria-label="Abrir Menu de Navegação"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#072752] border-t border-blue-900 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 text-slate-200 hover:text-white hover:bg-blue-950 font-semibold text-sm rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-blue-900/80 flex items-center justify-between text-xs">
            <a 
              href="tel:+553136819007" 
              className="flex items-center gap-2 font-bold text-white bg-[#0356c5] px-4 py-2.5 rounded-lg"
            >
              <Phone className="w-4 h-4" />
              <span>(31) 3681-9007</span>
            </a>

            <button
              onClick={() => setLang(lang === 'PT' ? 'EN' : 'PT')}
              className="flex items-center gap-1.5 px-3 py-2 rounded bg-blue-950 text-slate-300 font-mono text-xs"
            >
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>{lang}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
