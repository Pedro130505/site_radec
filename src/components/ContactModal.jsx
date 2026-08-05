import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, Phone, Mail, Building } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    solution: 'RADEC® Visão (Visão Computacional)',
    beltWidth: '1200mm',
    comments: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white border border-slate-200 text-slate-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="bg-[#072752] text-white p-6 flex justify-between items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block">LLK Soluções Industriais</span>
            <h3 className="text-xl font-extrabold font-['Outfit']">Solicitar Proposta Técnica RADEC®</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-300">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#072752] font-['Outfit']">Solicitação Recebida com Sucesso!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                A equipe de engenharia de aplicação da LLK analisará os dados do seu transportador e retornará com o diagnóstico técnico e estimativa de ROI.
              </p>
              <button
                onClick={handleReset}
                className="bg-[#0356c5] hover:bg-[#072752] text-white font-bold px-8 py-3 rounded-lg transition"
              >
                Concluir
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Eng. Carlos Andrade"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0356c5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">E-mail Corporativo *</label>
                  <input
                    type="email"
                    required
                    placeholder="carlos@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0356c5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Empresa / Mineradora *</label>
                  <input
                    type="text"
                    required
                    placeholder="Vale, CSN, Samarco..."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0356c5]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Telefone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(31) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0356c5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Solução de Interesse</label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0356c5]"
                  >
                    <option>RADEC® Visão (Visão Computacional)</option>
                    <option>RADEC® Vibracional (Sensoriamento IoT)</option>
                    <option>RADEC® Combo (Proteção Total Redundante)</option>
                    <option>Necessito de Diagnóstico de Engenharia</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Largura da Correia</label>
                  <select
                    value={formData.beltWidth}
                    onChange={(e) => setFormData({ ...formData, beltWidth: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0356c5]"
                  >
                    <option>Até 1000 mm</option>
                    <option>1200 mm - 1600 mm</option>
                    <option>1800 mm - 2400 mm</option>
                    <option>Acima de 2400 mm</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Observações Técnicas</label>
                <textarea
                  rows="3"
                  placeholder="Informe características do transportador, velocidade da correia ou material transportado..."
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm text-slate-900 focus:outline-none focus:border-[#0356c5]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0356c5] hover:bg-[#072752] text-white font-bold py-3.5 rounded-lg shadow transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Solicitação de Proposta</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
