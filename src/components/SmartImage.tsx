// src/components/SmartImage.tsx
import React, { useState } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 1. Placeholder / Skeleton (Visible mientras carga) */}
      <div 
        className={`absolute inset-0 bg-zinc-800 animate-pulse transition-opacity duration-700 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      />
      
      {/* 2. Imagen Real */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-in-out ${
          isLoaded ? 'opacity-100 scale-100 grayscale-0' : 'opacity-0 scale-110 grayscale'
        } ${className}`} // Pasamos className también a la img para asegurar estilos
        {...props}
      />
    </div>
  );
};