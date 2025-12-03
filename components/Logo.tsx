import React from 'react';

interface LogoProps {
  className?: string;
  customSrc?: string | null;
}

export const Logo: React.FC<LogoProps> = ({ className, customSrc }) => {
  return (
    <div className={`active:scale-95 transition-transform duration-200 ease-out cursor-pointer select-none ${className}`}>
      {customSrc ? (
        <img 
          src={customSrc} 
          alt="شعار المتجر" 
          className="w-full h-full object-contain drop-shadow-xl rounded-full"
        />
      ) : (
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xl"
        >
          {/* Cookie Body */}
          <circle cx="100" cy="100" r="90" fill="#E8C482" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="#D4A76A" strokeWidth="4" opacity="0.5" />
          
          {/* Texture/Crumbs */}
          <circle cx="40" cy="50" r="2" fill="#C69C6D" />
          <circle cx="160" cy="150" r="2" fill="#C69C6D" />
          <circle cx="170" cy="80" r="3" fill="#C69C6D" />
          <circle cx="30" cy="120" r="2" fill="#C69C6D" />

          {/* Chocolate Chips */}
          <circle cx="70" cy="70" r="14" fill="#4E342E" />
          <circle cx="130" cy="60" r="16" fill="#4E342E" />
          <circle cx="100" cy="110" r="18" fill="#4E342E" />
          <circle cx="60" cy="140" r="15" fill="#4E342E" />
          <circle cx="145" cy="135" r="14" fill="#4E342E" />
          <circle cx="160" cy="90" r="10" fill="#4E342E" />
          <circle cx="45" cy="105" r="10" fill="#4E342E" />
          
          {/* Chip Highlights */}
          <path d="M66 66 A 6 6 0 0 1 70 68" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
          <path d="M126 56 A 6 6 0 0 1 130 58" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
          <path d="M96 106 A 6 6 0 0 1 100 108" stroke="rgba(255,255,255,0.2)" strokeWidth="3" fill="none" />
        </svg>
      )}
    </div>
  );
};