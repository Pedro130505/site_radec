import React, { useState } from 'react';
import { Send, CheckCircle, PhoneCall } from 'lucide-react';

export default function ContactEvaluationSection() {
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', unidade: '', problema: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));

  const inputStyle = {
    width: '100%', background: 'var(--c-white)',
    border: '1.5px solid var(--c-gray-02)', borderRadius: 'var(--r-md)',
    padding: '0.75rem 1rem', fontSize: '0.9rem',
    fontFamily: 'Inter, sans-serif', color: 'var(--c-gray-06)', outline: 'none',
  };

  const labelStyle = {
    display: 'block', fontSize: '0.6875rem', fontWeight: 700,
    letterSpacing: '0.06em', textTransform: 'uppercase',
    color: 'var(--c-gray-04)', marginBottom: '0.375rem',
  };

  return (
    <section id="avaliacao-correia" style={{
      background: 'var(--c-white)',
      borderBottom: '1px solid var(--c-gray-01)',
      padding: 'var(--section-y) 0',
      scrollMarginTop: '80px',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left: Context */}
          <div>
            <div className="eyebrow">Engenharia de Aplicação</div>
            <h2 className="title-h2" style={{ marginBottom: '1.25rem' }}>
              Qual configuração RADEC® é adequada para sua correia?
            </h2>
            <p className="lead" style={{ fontSize: '1rem', marginBottom: '2rem' }}>
              A solução depende do modo de falha predominante, geometria do transportador, material e estratégia de proteção da operação.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2.5rem' }}>
              {[
                'Análise técnica sem compromisso comercial',
                'Recomendação precisa da arquitetura (Visão / Vibracional / Combo)',
                'Atendimento direto por engenheiros de aplicação da LLK',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={16} color="var(--c-green)" />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--c-gray-05)', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              padding: '1rem', background: 'var(--c-gray-00)',
              border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
              fontSize: '0.8125rem', color: 'var(--c-gray-04)',
            }}>
              <PhoneCall size={15} color="var(--c-blue)" />
              <span>Dúvidas urgentes? Comercial: <strong>(31) 3333-3333</strong></span>
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            background: 'var(--c-white)', border: '1px solid var(--c-gray-01)',
            borderRadius: 'var(--r-xl)', padding: '2.5rem',
            boxShadow: 'var(--shadow-md)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '64px', height: '64px', background: '#DCFCE7',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle size={28} color="var(--c-green)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 700,
                  color: 'var(--c-navy)', marginBottom: '0.875rem',
                }}>
                  Solicitação Enviada!
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--c-gray-04)', lineHeight: 1.65, maxWidth: '360px', margin: '0 auto 1.5rem' }}>
                  Nossa equipe de engenharia entrará em contato em breve com a avaliação técnica da sua correia.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary"
                >
                  Nova Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{
                  paddingBottom: '1.25rem', marginBottom: '1.5rem',
                  borderBottom: '1px solid var(--c-gray-01)',
                }}>
                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1.125rem', fontWeight: 700,
                    color: 'var(--c-navy)', marginBottom: '0.25rem',
                  }}>
                    Solicite uma avaliação da sua correia
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--c-gray-03)' }}>
                    Preencha os campos abaixo para receber o parecer técnico.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Nome Completo *</label>
                    <input type="text" required placeholder="Engenheiro Carlos Silva" value={form.nome} onChange={set('nome')} style={inputStyle} className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Empresa *</label>
                    <input type="text" required placeholder="Vale / CSN / Samarco" value={form.empresa} onChange={set('empresa')} style={inputStyle} className="form-input" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>E-mail Corporativo *</label>
                    <input type="email" required placeholder="carlos@empresa.com.br" value={form.email} onChange={set('email')} style={inputStyle} className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Telefone / WhatsApp *</label>
                    <input type="tel" required placeholder="(31) 99999-9999" value={form.telefone} onChange={set('telefone')} style={inputStyle} className="form-input" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Unidade / Operação</label>
                    <input type="text" placeholder="Mina de Cauê / Usina 1" value={form.unidade} onChange={set('unidade')} style={inputStyle} className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Principal Problema</label>
                    <select value={form.problema} onChange={set('problema')} style={{ ...inputStyle, cursor: 'pointer' }} className="form-input">
                      <option value="">Selecione...</option>
                      <option>Rasgos longitudinais recorrentes</option>
                      <option>Desalinhamento lateral severo</option>
                      <option>Tiras soltas / descolamento</option>
                      <option>Queda e travamento de blocos</option>
                      <option>Falta de intertravamento automático</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={labelStyle}>Mensagem / Especificações Adicionais</label>
                  <textarea
                    rows={3}
                    placeholder="Largura da correia, velocidade, material transportado..."
                    value={form.mensagem} onChange={set('mensagem')}
                    style={{ ...inputStyle, resize: 'vertical' }} className="form-input"
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Solicitar Avaliação Técnica
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
