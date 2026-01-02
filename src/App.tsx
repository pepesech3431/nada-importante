import { useRef, useState, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, Html, useScroll, Preload } from '@react-three/drei'
import { easing } from 'maath'
import * as THREE from 'three'
import { Flame, Grid, User, Bookmark, Settings } from 'lucide-react'
import { CHARACTERS, type CharacterData } from './data'
import './index.css'

// --- CONFIGURACIÓN VISUAL ---
const COLUMNS = 4;
const CARD_W = 2.8;
const CARD_H = 4.2;
const GAP = 0.7;
const NEON_COLORS = ["#00f3ff", "#ff00a6", "#ffee00", "#00ff66", "#ff3333"];

// --- COMPONENTE TARJETA (OPTIMIZADO) ---
function NeonCard({ data, index }: { data: CharacterData, index: number }) {
    const ref = useRef<THREE.Group>(null);
    const glowRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);
    
    // Color fijo por tarjeta
    const neonColor = useMemo(() => NEON_COLORS[index % NEON_COLORS.length], [index]);
    
    // Posición Matemática en el Grid
    const xSpacing = CARD_W + GAP;
    const ySpacing = CARD_H + GAP;
    const row = Math.floor(index / COLUMNS);
    const col = index % COLUMNS;
    const totalGridWidth = COLUMNS * xSpacing;
    // Centramos el grid restando la mitad del ancho total
    const xPos = (col * xSpacing) - (totalGridWidth / 2) + (xSpacing / 2);
    const yPos = -row * ySpacing;

    // Smart Tooltip: Si es la col 2 o 3, tooltip a la izquierda
    const flipTooltip = col >= 2;

    useFrame((_state, delta) => {
        if (!ref.current || !glowRef.current) return;

        // 1. Animación Tilt & Scale
        const targetScale = hovered ? 1.05 : 1;
        const targetZ = hovered ? 0.5 : 0;
        const targetRotX = hovered ? -0.1 : 0;
        
        easing.damp3(ref.current.scale, [targetScale, targetScale, 1], 0.15, delta);
        easing.damp(ref.current.position, 'z', targetZ, 0.2, delta);
        easing.damp(ref.current.rotation, 'x', targetRotX, 0.2, delta);
        
        // 2. Animación Glow (Sin post-processing, muy rápido)
        const targetOpacity = hovered ? 0.6 : 0.15; // Más brillante al hover
        easing.damp(glowRef.current.material, 'opacity', targetOpacity, 0.1, delta);
    });

    return (
        <group position={[xPos, yPos, 0]}>
            <group 
                ref={ref}
                onPointerEnter={(e) => { e.stopPropagation(); setHovered(true); }}
                onPointerLeave={(e) => { e.stopPropagation(); setHovered(false); }}
                onClick={() => data.link && window.open(data.link, '_blank')}
            >
                {/* FONDO BRILLANTE (FAKE GLOW) */}
                <mesh ref={glowRef} position={[0, 0, -0.05]}>
                    <planeGeometry args={[CARD_W + 0.3, CARD_H + 0.3]} />
                    <meshBasicMaterial 
                        color={neonColor} 
                        transparent 
                        opacity={0.15} 
                    />
                </mesh>

                {/* IMAGEN CON FALLBACK (CAJA GRIS ATRÁS) */}
                {/* Si la imagen falla o tarda, se ve este recuadro oscuro */}
                <mesh position={[0, 0, -0.01]}>
                    <planeGeometry args={[CARD_W, CARD_H]} />
                    <meshBasicMaterial color="#111" />
                </mesh>
                
                <Image 
                    url={data.imageUrl}
                    scale={[CARD_W, CARD_H]}
                    transparent
                    toneMapped={false}
                />

                {/* MARCO FINO */}
                <mesh position={[0, 0, 0.01]}>
                    <ringGeometry args={[0, 0, 4]} /> {/* Truco para no renderizar geometria compleja */}
                    <lineSegments>
                        <edgesGeometry args={[new THREE.PlaneGeometry(CARD_W, CARD_H)]} />
                        <lineBasicMaterial color={hovered ? "#fff" : "#333"} />
                    </lineSegments>
                </mesh>

                {/* TOOLTIP HUD (HTML) */}
                <Html
                    position={[flipTooltip ? -CARD_W / 2 - 0.2 : CARD_W / 2 + 0.2, 0, 0]} 
                    style={{ 
                        opacity: hovered ? 1 : 0, 
                        transformOrigin: flipTooltip ? 'right center' : 'left center',
                        transform: hovered ? 'scale(1)' : 'scale(0.9)',
                        transition: 'all 0.2s ease-out',
                        pointerEvents: 'none',
                        display: 'flex',
                        justifyContent: flipTooltip ? 'flex-end' : 'flex-start',
                        width: '400px'
                    }}
                    center
                    zIndexRange={[100, 0]} 
                >
                    <div className="card-tooltip" style={{ 
                        borderLeft: flipTooltip ? 'none' : `3px solid ${neonColor}`,
                        borderRight: flipTooltip ? `3px solid ${neonColor}` : 'none',
                        boxShadow: `0 0 50px -10px ${neonColor}30`
                    }}>
                        <h3 style={{ color: neonColor }}>{data.name}</h3>
                        <span className="badge">{data.sourceAnime}</span>
                        <p>{data.description}</p>
                    </div>
                </Html>
            </group>
        </group>
    )
}

function GridScene() {
    const scroll = useScroll();
    const { height } = useThree((state) => state.viewport);
    const totalRows = Math.ceil(CHARACTERS.length / COLUMNS);
    const totalHeight = totalRows * (CARD_H + GAP);

    useFrame((state) => {
        // Scroll vertical: Empieza un poco más abajo para dar margen
        const y = scroll.offset * (totalHeight - height + (CARD_H * 2));
        state.camera.position.y = -y;
    });

    // Posición inicial del grupo: Centrado verticalmente al inicio
    return (
        <group position={[0, height / 2 - CARD_H / 2, 0]}>
            {CHARACTERS.map((char, i) => (
                <NeonCard key={i} index={i} data={char} />
            ))}
        </group>
    )
}

function LoadingSpinner() {
    return (
        <Html center>
            <div style={{ color: 'white', fontFamily: 'Rajdhani', fontSize: '1.5rem', letterSpacing: '2px' }}>
                INITIALIZING SYSTEM...
            </div>
        </Html>
    )
}

export default function App() {
    const totalRows = Math.ceil(CHARACTERS.length / COLUMNS);
    const pages = Math.max(1.5, totalRows * 0.6);

    return (
        <div className="layout">
            <div className="sidebar">
                <div className="logo">
                    <h1>ANIME<br/>ARCHIVE</h1>
                    <p>SYSTEM V.3.0 ONLINE</p>
                </div>
                <div className="menu">
                    <div className="menu-item active"><Grid size={18} /> DASHBOARD</div>
                    <div className="menu-item"><Flame size={18} /> TRENDING</div>
                    <div className="menu-item"><User size={18} /> CHARACTERS</div>
                    <div className="menu-item"><Bookmark size={18} /> LIBRARY</div>
                    <div className="menu-item"><Settings size={18} /> SYSTEM</div>
                </div>
            </div>

            <div className="canvas-wrapper">
                <Canvas
                    dpr={[1, 1.5]} 
                    gl={{ antialias: true, alpha: false }}
                    camera={{ position: [0, 0, 16], fov: 32 }} // Cámara alejada para ver todo
                >
                    <color attach="background" args={['#030303']} />
                    
                    {/* ILUMINACIÓN BÁSICA (Por seguridad, si los materiales fallan) */}
                    <ambientLight intensity={1} />

                    {/* SUSPENSE: ESTO ARREGLA LA PANTALLA NEGRA */}
                    {/* Si las imágenes no han cargado, muestra "Initializing..." en lugar de nada */}
                    <Suspense fallback={<LoadingSpinner />}>
                        <ScrollControls pages={pages} damping={0.2} distance={1}>
                            <Scroll>
                                <GridScene />
                            </Scroll>
                        </ScrollControls>
                        {/* Precarga todas las imágenes para que el scroll sea fluido */}
                        <Preload all />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}