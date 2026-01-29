import React from 'react';
import { type CharacterData } from '../data';
import { getOptimizedImage } from '../utils/imageOptimizer';
import { SmartImage } from './SmartImage';

interface CharacterCardProps {
  data: CharacterData;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ data }) => {
  const optimizedUrl = getOptimizedImage(data.imageUrl, 600);

  return (
    <a 
      href={data.link} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ '--card-theme': data.themeColor } as React.CSSProperties}
      className="
        group relative block w-full h-[500px] 
        rounded-[24px] overflow-hidden bg-[#0a0a0a] 
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        
        /* Efecto de borde sutil inicial */
        ring-1 ring-white/10
        
        /* HOVER: Elevación y Glow Neon */
        hover:ring-0
        hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_0_2px_var(--card-theme)]
        hover:-translate-y-3 hover:scale-[1.01] z-0 hover:z-10
      "
    >
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <SmartImage 
          src={optimizedUrl} 
          alt={data.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        
        {/* Gradiente Cinematográfico (Más oscuro abajo para el texto) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent opacity-90 transition-all duration-500" />
        
        {/* Tinte de Color en Hover */}
        <div className="absolute inset-0 bg-[var(--card-theme)] mix-blend-soft-light opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
      </div>

      {/* 2. EFECTO DE BRILLO EN MOVIMIENTO (SHINE) */}
      <div className="card-shine pointer-events-none z-10" />

      {/* 3. CONTENIDO FLOTANTE */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-7">
        
        {/* Decoración Top Right */}
        <div className="absolute top-6 right-6 flex flex-col items-end gap-1 opacity-0 transform -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <div className="flex gap-1">
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="w-1 h-1 bg-white/50 rounded-full" />
                <span className="w-1 h-1 bg-[var(--card-theme)] rounded-full" />
            </div>
        </div>

        {/* Badge Anime */}
        <div className="mb-3 transform transition-transform duration-500 group-hover:-translate-y-1">
            <span 
              className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] bg-white/5 backdrop-blur-md border border-white/10 text-white/80 shadow-sm"
            >
               {data.sourceAnime}
            </span>
        </div>

        {/* Nombre del Personaje */}
        <h2 className="text-3xl font-black text-white tracking-tighter leading-[1.1] mb-2 drop-shadow-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70 group-hover:to-[var(--card-theme)] transition-all duration-500">
            {data.name}
          </span>
        </h2>

        {/* Descripción (visible siempre, pero más brillante en hover) */}
        <p className="text-sm font-medium leading-relaxed text-zinc-400 line-clamp-2 mb-4 group-hover:text-zinc-200 transition-colors duration-300">
          {data.description}
        </p>

        {/* Footer Técnico (Oculto, aparece en hover) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
            <div className="overflow-hidden">
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                    <div className="flex gap-3">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--card-theme)]" />
                            {data.genre}
                        </span>
                        <span className="flex items-center gap-1.5">
                            {/* Simula color de pelo */}
                            <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                            {data.hairColor} Hair
                        </span>
                    </div>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-300">
                        →
                    </span>
                </div>
            </div>
        </div>

      </div>
    </a>
  );
};