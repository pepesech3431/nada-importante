// src/utils/imageOptimizer.ts

/**
 * Optimiza imágenes usando un servicio CDN externo para redimensionar y convertir a WebP.
 * @param url URL original de la imagen
 * @param width Ancho deseado (por defecto 500px para tarjetas)
 */
export const getOptimizedImage = (url: string, width: number = 500) => {
  // Codificamos la URL original para pasarla como parámetro
  // Usamos wsrv.nl que es rápido, gratuito y soporta WebP automático
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;
};