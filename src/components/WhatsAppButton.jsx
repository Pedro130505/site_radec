import React from 'react';

export default function WhatsAppButton() {
  const whatsappNumber = '5531999999999'; // Default LLK WhatsApp contact
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá! Gostaria de obter mais informações sobre a linha RADEC® da LLK Soluções.')}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar via WhatsApp"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        backgroundColor: '#25D366',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        textDecoration: 'none',
        border: '2px solid #FFFFFF',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 10px 28px rgba(37, 211, 102, 0.65)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.45)';
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.445 4.43-9.875 9.877-9.875 2.637 0 5.117 1.027 6.98 2.89 1.864 1.864 2.89 4.344 2.89 6.98 0 5.446-4.43 9.876-9.864 9.876m0-21.785C5.373 0 0 5.373 0 12c0 2.118.552 4.107 1.515 5.842L0 24l6.32-1.657A11.94 11.94 0 0012.051 24C18.678 24 24 18.627 24 12c0-3.206-1.248-6.218-3.515-8.485A11.93 11.93 0 0012.051 0z"/>
      </svg>
    </a>
  );
}
