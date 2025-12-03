import React from 'react';
import { Cookie } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#FA8072] text-white py-6 shadow-md fixed top-0 w-full z-50 transition-all hover:shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-center gap-3 cursor-default group">
        <div className="transition-transform duration-500 group-hover:rotate-180">
           <Cookie size={32} strokeWidth={2.5} />
        </div>
        <h1 className="text-3xl font-bold tracking-wide transition-transform group-hover:scale-105">مخبز كوكيز</h1>
      </div>
    </header>
  );
};