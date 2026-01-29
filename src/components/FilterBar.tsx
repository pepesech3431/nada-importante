import React from 'react';
import type { CharacterGenre, HairColor, EyeColor } from '../data';

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedGenre: CharacterGenre | 'All';
  setSelectedGenre: (genre: CharacterGenre | 'All') => void;
  selectedHairColor: HairColor | 'All';
  setSelectedHairColor: (color: HairColor | 'All') => void;
  selectedEyeColor: EyeColor | 'All';
  setSelectedEyeColor: (color: EyeColor | 'All') => void;
}

const GENRES: (CharacterGenre | 'All')[] = ['All', 'Action', 'Fantasy', 'Romance', 'Comedy', 'Dark', 'Drama', 'Sci-Fi'];
const HAIR_COLORS: (HairColor | 'All')[] = ['All', 'Blonde', 'Black', 'Brown', 'Red', 'Pink', 'Blue', 'Purple', 'Green', 'Silver', 'Orange'];
const EYE_COLORS: (EyeColor | 'All')[] = ['All', 'Blue', 'Red', 'Green', 'Purple', 'Yellow', 'Brown', 'Pink', 'Black', 'Silver', 'Orange', 'Cyan'];

const COLOR_MAP: Record<string, string> = {
  Blonde: '#fbbf24', Black: '#18181b', Brown: '#78350f', Red: '#ef4444',
  Pink: '#f472b6', Blue: '#3b82f6', Purple: '#a855f7', Green: '#22c55e',
  Silver: '#cbd5e1', Orange: '#f97316', Yellow: '#facc15', Cyan: '#06b6d4',
  Varied: 'linear-gradient(45deg, #ff0080, #fbbf24, #00ffff)',
};

export const FilterBar: React.FC<FilterBarProps> = ({ 
  searchQuery, setSearchQuery, 
  selectedGenre, setSelectedGenre,
  selectedHairColor, setSelectedHairColor,
  selectedEyeColor, setSelectedEyeColor
}) => {
  return (
    // CAMBIO: padding vertical reducido en móvil (py-3) para ganar espacio
    <div className="sticky top-0 z-50 py-3 md:py-4 mb-6 md:mb-8 backdrop-blur-xl bg-[#020203]/85 border-b border-white/5 shadow-2xl transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-3 md:gap-5">
        
        {/* NIVEL 1: Buscador y Géneros */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between">
          
          {/* Buscador: Full width en móvil, ancho fijo en desktop */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 md:h-5 md:w-5 text-zinc-500 group-focus-within:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-9 md:pl-10 pr-3 py-2 md:py-2.5 text-sm border border-zinc-800 rounded-xl leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:bg-zinc-900 focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 shadow-sm"
              placeholder="Buscar personaje, anime..."
            />
          </div>

          {/* Géneros: Scroll horizontal fluido */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1">
            <div className="flex space-x-2">
              {GENRES.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setSelectedGenre(genre)}
                  className={`
                    px-3 py-1.5 md:px-4 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-200 border whitespace-nowrap
                    ${selectedGenre === genre 
                      ? 'bg-accent text-white border-accent shadow-[0_0_15px_rgba(139,92,246,0.4)]' 
                      : 'bg-zinc-900/40 text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-zinc-300'
                    }
                  `}
                >
                  {genre === 'All' ? 'ALL' : genre}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* NIVEL 2: Filtros Visuales (Pelo y Ojos) */}
        {/* CAMBIO: Flex-col en móvil para separar las filas si es necesario, pero gap pequeño */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 border-t border-white/5 pt-3">
            
            {/* HAIR COLOR */}
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pr-4">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold shrink-0">HAIR</span>
                {HAIR_COLORS.map((color) => {
                    const isSelected = selectedHairColor === color;
                    const isAll = color === 'All';
                    
                    const bgStyle = isAll
                        ? { background: 'transparent' }
                        : color === 'Varied' 
                            ? { background: COLOR_MAP[color] }
                            : { backgroundColor: COLOR_MAP[color] };

                    return (
                    <button
                        key={color}
                        onClick={() => setSelectedHairColor(color)}
                        // CAMBIO: w-7 h-7 en móvil para mejor tacto (más grande que w-6)
                        className={`
                            group relative w-7 h-7 md:w-6 md:h-6 rounded-full transition-all duration-300 flex items-center justify-center shrink-0
                            ${isSelected ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-[#020203]' : 'opacity-60 hover:opacity-100 hover:scale-105'}
                            ${isAll && isSelected ? 'bg-zinc-800' : ''} 
                        `}
                        title={`Hair: ${color}`}
                    >
                        <div className={`w-full h-full rounded-full ${isAll ? 'border border-dashed border-zinc-500 flex items-center justify-center' : 'border border-white/10'}`} style={bgStyle}>
                             {isAll && <span className="text-[8px] md:text-[6px] font-bold text-zinc-400">ALL</span>}
                        </div>
                    </button>
                    );
                })}
            </div>

            {/* Separador: Solo en desktop */}
            <div className="hidden sm:block w-[1px] bg-white/10 h-6 self-center" />

            {/* EYE COLOR */}
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pr-4">
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold shrink-0">EYES</span>
                {EYE_COLORS.map((color) => {
                    const isSelected = selectedEyeColor === color;
                    const isAll = color === 'All';

                    const bgStyle = isAll 
                    ? { background: 'transparent' }
                    : { background: `radial-gradient(circle, #09090b 35%, ${COLOR_MAP[color]} 45%)` };

                    return (
                    <button
                        key={color}
                        onClick={() => setSelectedEyeColor(color)}
                        // CAMBIO: w-7 h-7 también aquí
                        className={`
                            group relative w-7 h-7 md:w-6 md:h-6 rounded-full transition-all duration-300 flex items-center justify-center shrink-0
                            ${isSelected ? 'scale-110 ring-2 ring-accent ring-offset-2 ring-offset-[#020203]' : 'opacity-60 hover:opacity-100 hover:scale-105'}
                            ${isAll && isSelected ? 'bg-zinc-800' : ''}
                        `}
                        title={`Eyes: ${color}`}
                    >
                        <div className={`w-full h-full rounded-full ${isAll ? 'border border-dashed border-zinc-500 flex items-center justify-center' : 'border border-white/10'}`} style={bgStyle}>
                             {isAll && <span className="text-[8px] md:text-[6px] font-bold text-zinc-400">ALL</span>}
                        </div>
                    </button>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  );
};