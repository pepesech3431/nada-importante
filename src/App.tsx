import { useState, useMemo } from 'react';
import { CHARACTERS, type CharacterGenre, type HairColor, type EyeColor } from './data';
import { CharacterCard } from './components/CharacterCard';
import { FilterBar } from './components/FilterBar';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<CharacterGenre | 'All'>('All');
  const [selectedHairColor, setSelectedHairColor] = useState<HairColor | 'All'>('All');
  const [selectedEyeColor, setSelectedEyeColor] = useState<EyeColor | 'All'>('All');

  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter(char => {
      const matchesSearch = 
        char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        char.sourceAnime.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGenre = selectedGenre === 'All' || char.genre === selectedGenre;
      const matchesHair = selectedHairColor === 'All' || char.hairColor === selectedHairColor;
      const matchesEyes = selectedEyeColor === 'All' || char.eyeColor === selectedEyeColor;

      return matchesSearch && matchesGenre && matchesHair && matchesEyes;
    });
  }, [searchQuery, selectedGenre, selectedHairColor, selectedEyeColor]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-white/20 selection:text-white">
      
      {/* 1. CAPA DE RUIDO (Film Grain) */}
      <div className="bg-noise" />

      {/* 2. FONDO DINÁMICO */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid Sutil */}
        <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{ 
                backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
            }} 
        />
        
        {/* Orbes de Luz Ambientales */}
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* HERO SECTION PREMIUM */}
        <header className="pt-20 pb-10 text-center px-4 relative">
          <div className="inline-block relative">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2 relative z-10 drop-shadow-2xl">
              CARD<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white animate-pulse">FORGE</span>
            </h1>
            {/* Sombra de texto decorativa */}
            <span className="absolute top-1 left-1 text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white/10 to-transparent blur-sm z-0 select-none">
                CARDFORGE
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-4">
             <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-zinc-500" />
             <p className="text-zinc-400 text-sm md:text-base font-medium tracking-[0.2em] uppercase">
                Database System v3.0
             </p>
             <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-zinc-500" />
          </div>
        </header>

        {/* BARRA DE FILTROS */}
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          selectedHairColor={selectedHairColor}
          setSelectedHairColor={setSelectedHairColor}
          selectedEyeColor={selectedEyeColor}
          setSelectedEyeColor={setSelectedEyeColor}
        />

        {/* MAIN GRID */}
        <main className="flex-grow max-w-[1800px] mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 pb-24">
          <div className="flex items-center justify-between mb-6 px-2">
             <span className="text-xs font-mono text-zinc-500">
                MOSTRANDO {filteredCharacters.length} RESULTADOS
             </span>
             <div className="h-[1px] flex-grow mx-4 bg-zinc-800/50" />
          </div>

          {filteredCharacters.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 perspective-1000">
              {filteredCharacters.map((char, idx) => (
                <div 
                    key={char.id} 
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <CharacterCard data={char} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 opacity-60 space-y-6">
               <div className="w-24 h-24 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center backdrop-blur-md shadow-inner">
                 <span className="text-4xl">⚠️</span>
               </div>
               <div className="text-center space-y-2">
                   <p className="text-2xl font-bold text-white tracking-tight">Sin Datos Disponibles</p>
                   <p className="text-zinc-500">Ajusta los parámetros de búsqueda para encontrar coincidencias.</p>
               </div>
               <button 
                  onClick={() => {
                      setSearchQuery('');
                      setSelectedGenre('All');
                      setSelectedHairColor('All');
                      setSelectedEyeColor('All');
                  }}
                  className="px-6 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-colors"
                >
                   Reiniciar Filtros
               </button>
            </div>
          )}
        </main>

        <footer className="py-12 border-t border-white/5 text-center">
            <p className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.3em] mb-2">
                UI Architecture by Senior Dev
            </p>
            <p className="text-zinc-800 text-[10px]">
                &copy; {new Date().getFullYear()} CardForge. All rights reserved.
            </p>
        </footer>
      </div>
    </div>
  );
}

export default App;