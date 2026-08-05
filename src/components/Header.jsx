import React, { useState, useEffect } from 'react';
import { Shield, Eye, Activity, Cpu, Award, DollarSign, Phone, Menu, X, ArrowRight, Globe, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export default function Header({ onOpenQuote }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'RADEC® Visão', href: '#radec-visao' },
    { name: 'RADEC® Vibracional', href: '#radec-vibracional' },
    { name: 'Comparativo Técnico', href: '#comparativo' },
    { name: 'Calculadora de ROI', href: '#calculadora-roi' },
    { name: 'Casos Reais', href: '#casos-reais' },
    { name: 'Sobre a LLK', href: '#sobre-llk' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#040d1a] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80 z-50 relative">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-white tracking-wide flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0356c5]" />
              LLK SOLUÇÕES
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300 font-medium">
              Eficiência Operacional & Proteção de Ativos em Indústrias de Base
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-300">
            <span className="hidden sm:inline-flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>PT | EN</span>
            </span>
            <a href="tel:+553133333333" className="hover:text-white font-medium transition flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Comercial: (31) 3333-3333</span>
            </a>
            <span className="hidden lg:inline text-slate-400">Belo Horizonte - MG</span>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header className={`fixed top-[37px] left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white text-slate-900 shadow-md border-b border-slate-200 py-3' 
          : 'bg-[#072752] text-white border-b border-blue-900/50 py-4'
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Official LLK Logo */}
          <a href="#" className="flex items-center gap-3">
            <img 
              src={scrolled ? getAssetUrl('assets/Logotipos/blue/LLK-LOGO-A-BLUE.svg') : getAssetUrl('assets/Logotipos/white/LLK-LOGO-A-WHITE.svg')}
              alt="LLK Soluções" 
              className="h-9 md:h-11 w-auto transition-all"
            />
            <div className={`hidden sm:block border-l pl-3 py-0.5 ${scrolled ? 'border-slate-300' : 'border-blue-400/40'}`}>
              <span className={`block font-extrabold text-base leading-tight font-['Outfit'] ${scrolled ? 'text-[#072752]' : 'text-white'}`}>
                RADEC®
              </span>
              <span className={`block text-[10px] font-bold tracking-wider uppercase ${scrolled ? 'text-blue-600' : 'text-blue-200'}`}>
                Proteção de Correias
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-150 ${
                  scrolled 
                    ? 'text-slate-700 hover:text-[#0356c5]' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className={`px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 flex items-center gap-2 ${
                scrolled
                  ? 'bg-[#0356c5] hover:bg-[#072752] text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-[#072752] shadow-md'
              }`}
            >
              <span>Falar com Engenheiro</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`xl:hidden p-2 rounded-lg border ${
              scrolled 
                ? 'bg-slate-100 text-slate-800 border-slate-300' 
                : 'bg-[#031633] text-white border-blue-800'
            }`}
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenu && (
          <div className="xl:hidden bg-white text-slate-900 border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenu(false)}
                  className="block px-4 py-3 text-slate-800 hover:bg-slate-100 hover:text-[#0356c5] font-semibold rounded-lg transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenu(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#0356c5] text-white py-3 rounded-lg font-bold text-center flex justify-center items-center gap-2 shadow"
              >
                <span>Solicitar Proposta Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
