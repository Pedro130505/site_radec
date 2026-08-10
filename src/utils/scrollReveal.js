import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — Hook para revelar elementos ao entrar na viewport.
 * Implementa Intersection Observer para animações de scroll tipo
 * "fade-up" usadas por Vale, Sandvik, Siemens, etc.
 *
 * @param {Object} options
 * @param {number} options.threshold — % do elemento visível para disparar (0.0–1.0)
 * @param {string} options.rootMargin — margem adicional do observer
 * @param {boolean} options.once — se true, anima só uma vez
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible];
}

/**
 * Retorna os estilos CSS inline para a animação de fade-up.
 * @param {boolean} visible
 * @param {number} delay — delay em ms para animações stagger
 */
export function revealStyle(visible, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    willChange: 'opacity, transform',
  };
}

/**
 * Variante fade-in simples (sem deslocamento vertical)
 */
export function fadeStyle(visible, delay = 0) {
  return {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.55s ease ${delay}ms`,
  };
}
