import { useState } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackIcon: string;
  fallbackClassName?: string;
  fallbackBg?: string;
}

/**
 * Wraps an <img> so a slow decode or a genuine load failure never resolves
 * to a blank rectangle: a sticker-styled icon placeholder fills the frame
 * until the real image is ready, and stays if it never loads.
 */
export default function SafeImage({ src, alt, className = '', fallbackIcon, fallbackClassName = '', fallbackBg = 'bg-[#1a1a1a]' }: SafeImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative w-full h-full">
      {(!loaded || errored) && (
        <div className={`absolute inset-0 flex items-center justify-center ${fallbackBg} text-4xl ${fallbackClassName}`}>
          <span className={errored ? '' : 'animate-pulse'}>{fallbackIcon}</span>
        </div>
      )}
      {!errored && (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}
