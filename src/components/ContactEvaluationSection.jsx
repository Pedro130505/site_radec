import React, { useState } from 'react';
import { Send, CheckCircle2, PhoneCall, Mail, MapPin, Building, ShieldCheck } from 'lucide-react';

export default function ContactEvaluationSection() {
  const [form, setForm] = useState({ 
    nome: '', 
    empresa: '', 
    email: '', 
    telefone: '', 
    unidade: '', 
    problema: '', 
    mensagem: '' 
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="contato" className="scroll-mt-24 py-16 md:py-20 bg-[#072752] text-white border-b border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Context & Real Phone Directives */}
          <div className="lg:col-span-5 space-y-6">
            
            <span className="eyebrow eyebrow-white">
              Engenharia de Aplicação LLK
            </span>
            
            {/* Title from PDF Section 2 & Pergunta 9 */}
            <h2 className="text-3xl md:text-4xl font-bold font-['Outfit'] text-white leading-tight">
              Qual configuração RADEC® é adequada para sua correia?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-normal">
              A solução ideal depende do modo de falha predominante, da geometria do transportador, do material transportado e da estratégia de proteção da sua planta.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Análise técnica sem compromisso comercial</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Recomendação precisa da arquitetura (Visão / Vibracional / Combo)</span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Atendimento direto pelos engenheiros de aplicação da LLK</span>
              </div>
            </div>

            {/* Direct Commercial Contacts from PDF */}
            <div className="pt-4 border-t border-slate-700/80 space-y-3 text-xs">
              <a 
                href="tel:+553136819007" 
                className="flex items-center gap-3 bg-[#0b1c36] p-3.5 rounded-xl border border-slate-700 hover:border-[#0356c5] transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0356c5] text-white flex items-center justify-center font-bold shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Comercial Real:</span>
                  <span className="text-white font-bold text-sm group-hover:text-blue-400 font-mono">(31) 3681-9007</span>
                </div>
              </a>

              <a 
                href="mailto:contato@llk.com.br" 
                className="flex items-center gap-3 bg-[#0b1c36] p-3.5 rounded-xl border border-slate-700 hover:border-[#0356c5] transition group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0356c5] text-white flex items-center justify-center font-bold shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">E-mail Direto:</span>
                  <span className="text-white font-bold text-sm group-hover:text-blue-400">contato@llk.com.br</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: 7-Field Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#072752] font-['Outfit']">Solicitação Enviada com Sucesso!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  A equipe de engenharia de aplicação da LLK analisará as informações do seu transportador e retornará em breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary mt-2"
                >
                  Enviar Nova Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                
                <div className="border-b border-slate-200 pb-3">
                  <h3 className="text-xl font-bold text-[#072752] font-['Outfit']">
                    Solicite uma avaliação da sua correia
                  </h3>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Preencha os campos abaixo para receber a recomendação técnica de aplicação.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Nome Completo *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Engenheiro Carlos Silva" 
                      value={form.nome} 
                      onChange={handleChange('nome')} 
                      className="form-input" 
                    />
                  </div>
                  <div>
                    <label className="form-label">Empresa / Mineradora *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Vale / CSN / Samarco" 
                      value={form.empresa} 
                      onChange={handleChange('empresa')} 
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">E-mail Corporativo *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="carlos@empresa.com.br" 
                      value={form.email} 
                      onChange={handleChange('email')} 
                      className="form-input" 
                    />
                  </div>
                  <div>
                    <label className="form-label">Telefone / WhatsApp *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="(31) 99999-9999" 
                      value={form.telefone} 
                      onChange={handleChange('telefone')} 
                      className="form-input" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Unidade / Operação</label>
                    <input 
                      type="text" 
                      placeholder="Mina de Cauê / Usina 1" 
                      value={form.unidade} 
                      onChange={handleChange('unidade')} 
                      className="form-input" 
                    />
                  </div>
                  <div>
                    <label className="form-label">Principal Problema</label>
                    <select 
                      value={form.problema} 
                      onChange={handleChange('problema')} 
                      className="form-input cursor-pointer"
                    >
                      <option value="">Selecione a condição...</option>
                      <option>Rasgos longitudinais recorrentes</option>
                      <option>Desalinhamento lateral severo</option>
                      <option>Tiras soltas / descolamento</option>
                      <option>Queda e travamento de blocos</option>
                      <option>Falta de intertravamento automático</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="form-label">Especificações Adicionais do Transportador</label>
                  <textarea 
                    rows={3} 
                    placeholder="Largura da correia (mm), velocidade (m/s), material transportado..." 
                    value={form.mensagem} 
                    onChange={handleChange('mensagem')} 
                    className="form-input resize-y" 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-[#0356c5] hover:bg-[#072752] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação para Engenharia</span>
                </button>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
