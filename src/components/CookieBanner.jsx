import React, { useState, useEffect } from 'react';
import { Shield, Check, X, Settings } from 'lucide-react';

const STORAGE_KEY = 'llk_cookie_consent';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        setIsOpen(true);
      } else {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
      }
    } catch (e) {
      setIsOpen(true);
    }

    const handleReopen = () => {
      setIsOpen(true);
      setShowPreferences(true);
    };

    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => window.removeEventListener('open-cookie-preferences', handleReopen);
  }, []);

  const saveConsent = (updatedPreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPreferences));
    } catch (e) {
      console.warn('Não foi possível salvar as preferências no localStorage', e);
    }
    setPreferences(updatedPreferences);
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    saveConsent(all);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = { essential: true, analytics: false, marketing: false };
    saveConsent(essentialOnly);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isOpen) return null;

  const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

  return (
    <div
      role="dialog"
      aria-label="Gerenciamento de Cookies LGPD"
      style={{
        position: 'fixed',
        bottom: '1.25rem',
        right: '1.25rem',
        left: '1.25rem',
        maxWidth: '560px',
        margin: '0 auto',
        zIndex: 9999,
        background: 'var(--c-navy)',
        color: 'white',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: 'var(--r-xl)',
        boxShadow: '0 20px 48px rgba(10, 31, 68, 0.35), 0 8px 16px rgba(0, 0, 0, 0.2)',
        padding: '1.5rem',
        fontFamily: 'Inter, sans-serif',
        animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem', marginBottom: '1rem' }}>
        <div style={{
          background: 'rgba(21, 87, 212, 0.2)',
          border: '1px solid rgba(21, 87, 212, 0.4)',
          borderRadius: '10px',
          padding: '0.625rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Shield size={22} color="var(--c-blue)" />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '1.0625rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '0.25rem',
            lineHeight: 1.3,
          }}>
            Privacidade e Gestão de Cookies (LGPD)
          </h3>
          <p style={{
            fontSize: '0.8125rem',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.5,
            margin: 0,
          }}>
            A LLK Engenharia utiliza cookies necessários para a navegação e aprimoramento da sua experiência. Consulte nossa{' '}
            <a
              href={`${BASE}/privacidade`}
              style={{ color: '#60A5FA', textDecoration: 'underline', fontWeight: 600 }}
            >
              Política de Privacidade
            </a>.
          </p>
        </div>
      </div>

      {showPreferences && (
        <div style={{
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--r-md)',
          padding: '1rem',
          marginBottom: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}>
          {/* Essenciais */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'white' }}>Cookies Essenciais</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Necessários para o funcionamento básico e segurança do site.</div>
            </div>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--c-green)', background: 'rgba(22,163,74,0.15)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>
              Sempre Ativo
            </span>
          </div>

          {/* Analíticos */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.625rem' }}>
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'white' }}>Cookies Analíticos</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Permitem medir o tráfego e melhorar o desempenho das páginas.</div>
            </div>
            <input
              type="checkbox"
              checked={preferences.analytics}
              onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--c-blue)' }}
            />
          </div>

          {/* Marketing */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '0.625rem' }}>
            <div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'white' }}>Cookies de Marketing</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>Utilizados para personalizar comunicações e conteúdos relevantes.</div>
            </div>
            <input
              type="checkbox"
              checked={preferences.marketing}
              onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
              style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--c-blue)' }}
            />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexWrap: 'wrap' }}>
        {!showPreferences ? (
          <>
            <button
              onClick={handleAcceptAll}
              style={{
                flex: '1 1 140px',
                background: 'var(--c-blue)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--r-md)',
                padding: '0.625rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'background 0.15s',
              }}
            >
              Aceitar Todos
            </button>
            <button
              onClick={handleRejectNonEssential}
              style={{
                flex: '1 1 140px',
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: 'var(--r-md)',
                padding: '0.625rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Apenas Essenciais
            </button>
            <button
              onClick={() => setShowPreferences(true)}
              style={{
                background: 'transparent',
                color: 'rgba(255,255,255,0.6)',
                border: 'none',
                padding: '0.625rem',
                fontSize: '0.8125rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              <Settings size={14} />
              Opções
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSaveCustom}
              style={{
                flex: 1,
                background: 'var(--c-blue)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--r-md)',
                padding: '0.625rem 1rem',
                fontSize: '0.8125rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Salvar Preferências
            </button>
            <button
              onClick={() => setShowPreferences(false)}
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.8)',
                border: 'none',
                borderRadius: 'var(--r-md)',
                padding: '0.625rem 1rem',
                fontSize: '0.8125rem',
                cursor: 'pointer',
              }}
            >
              Voltar
            </button>
          </>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
