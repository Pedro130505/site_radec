import React from 'react';
import { useScrollReveal, revealStyle } from '../utils/scrollReveal';

/**
 * ScrollReveal — Wrapper component que anima seus filhos ao entrar na viewport.
 * Substitui a necessidade de importar o hook em cada componente individualmente.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} props.delay — delay em ms para stagger
 * @param {number} props.threshold — % visível para disparar
 * @param {string} props.as — elemento HTML a renderizar (padrão: 'div')
 * @param {Object} props.style — estilos adicionais
 * @param {string} props.className — classes adicionais
 */
export default function ScrollReveal({
  children,
  delay = 0,
  threshold = 0.1,
  as: Tag = 'div',
  style = {},
  className = '',
  ...rest
}) {
  const [ref, visible] = useScrollReveal({ threshold });

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ ...revealStyle(visible, delay), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
