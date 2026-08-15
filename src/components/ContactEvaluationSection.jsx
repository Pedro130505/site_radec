import React, { useState } from 'react';
import { Send, CheckCircle2, PhoneCall, Mail } from 'lucide-react';

export default function ContactEvaluationSection() {
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', unidade: '', problema: '', mensagem: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => setForm(p => ({ ...p, [k]: e.target.value }));

  const inputStyle = {
    width: '100%', background: 'var(--c-white)',
    border: '1.5px solid var(--c-gray-02)', borderRadius: 'var(--r-md)',
    padding: '0.875rem 1.125rem', fontSize: '0.9375rem',
    fontFamily: 'Inter, sans-serif', color: 'var(--c-gray-06)', outline: 'none',
  };

  const labelStyle = {
    display: 'block', fontSize: '0.75rem', fontWeight: 800,
    letterSpacing: '0.08em', textTransform: 'uppercase',
    color: 'var(--c-navy-deep)', marginBottom: '0.4rem',
  };

  return (
    <section id="contato" className="section-wrapper-light">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem', alignItems: 'start' }}>

          {/* Left: Context */}
          <div>
            <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Engenharia de Aplicação LLK</div>
            <h2 className="title-h1" style={{ marginBottom: '1.25rem', color: 'var(--c-gray-06)' }}>
              Qual a melhor configuração do RADEC® para a sua planta?
            </h2>
            <p className="lead" style={{ fontSize: '1.125rem', color: 'var(--c-gray-04)', marginBottom: '2.5rem' }}>
              A arquitetura ideal depende do modo de falha predominante, velocidade e largura da correia, tipo de minério e infraestrutura de automação existente.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              {[
                'Análise técnica de engenharia sem compromisso comercial',
                'Recomendação precisa da arquitetura (Visão / Vibracional / Combo)',
                'Dimensionamento de enclausuramento e integração Modbus TCP',
                'Atendimento direto por engenheiros de aplicação experientes em campo',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <CheckCircle2 size={20} color="var(--c-green)" />
                  <span style={{ fontSize: '1rem', color: 'var(--c-gray-05)', fontWeight: 600 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              padding: '1.25rem 1.5rem', background: 'var(--c-white)',
              border: '1px solid var(--c-gray-01)', borderRadius: 'var(--r-lg)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
            }}>
              <div style={{
                width: '44px', height: '44px', background: 'rgba(21, 87, 212, 0.1)',
                borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <PhoneCall size={20} color="var(--c-blue)" />
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--c-gray-03)', letterSpacing: '0.08em', display: 'block' }}>
                  Atendimento Comercial & Engenharia
                </span>
                <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--c-navy-deep)' }}>
                  (31) 3333-3333 · contato@llk.com.br
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-light" style={{ padding: '3rem', background: 'var(--c-white)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '72px', height: '72px', background: '#DCFCE7',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 1.75rem',
                }}>
                  <CheckCircle2 size={36} color="var(--c-green)" />
                </div>
                <h3 style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: '1.625rem', fontWeight: 800,
                  color: 'var(--c-navy-deep)', marginBottom: '1rem',
                }}>
                  Solicitação Recebida com Sucesso!
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--c-gray-04)', lineHeight: 1.65, maxWidth: '400px', margin: '0 auto 2rem' }}>
                  Engenheiros de aplicação da LLK entrarão em contato em breve para apresentar a avaliação técnica da sua operação.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary"
                >
                  Enviar Nova Solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{
                  paddingBottom: '1.5rem', marginBottom: '2rem',
                  borderBottom: '1px solid var(--c-gray-01)',
                }}>
                  <h3 style={{
                    fontFamily: 'Outfit, sans-serif', fontSize: '1.375rem', fontWeight: 800,
                    color: 'var(--c-navy-deep)', marginBottom: '0.35rem',
                  }}>
                    Solicite uma avaliação técnica para a sua correia
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--c-gray-03)' }}>
                    Preencha os campos abaixo para receber o parecer de engenharia.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Nome Completo *</label>
                    <input type="text" required placeholder="Eng. Carlos Silva" value={form.nome} onChange={set('nome')} style={inputStyle} className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Empresa *</label>
                    <input type="text" required placeholder="Vale / CSN / Samarco" value={form.empresa} onChange={set('empresa')} style={inputStyle} className="form-input" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>E-mail Corporativo *</label>
                    <input type="email" required placeholder="carlos@empresa.com.br" value={form.email} onChange={set('email')} style={inputStyle} className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Telefone / WhatsApp *</label>
                    <input type="tel" required placeholder="(31) 99999-9999" value={form.telefone} onChange={set('telefone')} style={inputStyle} className="form-input" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label style={labelStyle}>Unidade / Operação</label>
                    <input type="text" placeholder="Mina Cauê / Usina 1" value={form.unidade} onChange={set('unidade')} style={inputStyle} className="form-input" />
                  </div>
                  <div>
                    <label style={labelStyle}>Principal Problema</label>
                    <select value={form.problema} onChange={set('problema')} style={{ ...inputStyle, cursor: 'pointer' }} className="form-input">
                      <option value="">Selecione o desafio...</option>
                      <option>Rasgos longitudinais recorrentes</option>
                      <option>Desalinhamento lateral severo</option>
                      <option>Tiras soltas / descolamento</option>
                      <option>Queda e travamento de blocos</option>
                      <option>Falta de intertravamento automático</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={labelStyle}>Mensagem / Especificações Adicionais</label>
                  <textarea
                    rows={3}
                    placeholder="Largura da correia, velocidade, tipo de minério transportado..."
                    value={form.mensagem} onChange={set('mensagem')}
                    style={{ ...inputStyle, resize: 'vertical' }} className="form-input"
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <input
                    type="checkbox"
                    id="sectionLgpdConsent"
                    required
                    checked={form.lgpdConsent || false}
                    onChange={(e) => setForm(p => ({ ...p, lgpdConsent: e.target.checked }))}
                    style={{ marginTop: '3px', width: '16px', height: '16px', cursor: 'pointer', accentColor: 'var(--c-blue)' }}
                  />
                  <label htmlFor="sectionLgpdConsent" style={{ fontSize: '0.75rem', color: 'var(--c-gray-04)', lineHeight: 1.5, cursor: 'pointer' }}>
                    Li e aceito a <a href={`${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/privacidade`} target="_blank" rel="noreferrer" style={{ color: 'var(--c-blue)', fontWeight: 600, textDecoration: 'underline' }}>Política de Privacidade</a> da LLK Engenharia e autorizo o tratamento dos dados informados. *
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                  Solicitar Avaliação Técnica
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

