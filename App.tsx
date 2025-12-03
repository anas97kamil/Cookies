import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { InfoBox } from './components/InfoBox';
import { RecipeGenerator } from './components/RecipeGenerator';
import { Logo } from './components/Logo';
import { Cookie, ChefHat, Utensils } from 'lucide-react';

const App: React.FC = () => {
  const [clicks, setClicks] = useState<{id: number, x: number, y: number}[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const [tapCount, setTapCount] = useState(0);
  const tapTimer = useRef<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [customLogo, setCustomLogo] = useState<string | null>(() => {
    return localStorage.getItem('bakery-custom-logo');
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleGlobalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea') || target.closest('label')) {
      return;
    }

    const id = Date.now();
    setClicks(prev => [...prev, { id, x: e.pageX, y: e.pageY }]);
    
    setTimeout(() => {
      setClicks(prev => prev.filter(c => c.id !== id));
    }, 600);
  };

  const handleLogoTap = () => {
    if (tapTimer.current) clearTimeout(tapTimer.current);

    const newCount = tapCount + 1;
    setTapCount(newCount);

    if (newCount >= 10) {
      fileInputRef.current?.click();
      setTapCount(0);
    } else {
      tapTimer.current = setTimeout(() => {
        setTapCount(0);
      }, 500);
    }
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCustomLogo(result);
        try {
          localStorage.setItem('bakery-custom-logo', result);
        } catch {
          alert("الصورة كبيرة جداً للحفظ التلقائي.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col cursor-pointer sm:cursor-auto relative overflow-hidden"
      onClick={handleGlobalClick}
    >
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div 
          className="absolute top-[5%] left-[5%] text-[#FA8072] opacity-[0.06]"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(15deg)` }}
        >
          <Cookie size={120} />
        </div>

        <div 
          className="absolute top-[15%] right-[8%] text-[#D4A76A] opacity-[0.08]"
          style={{ transform: `translateY(${scrollY * 0.5}px) rotate(-10deg)` }}
        >
          <ChefHat size={140} />
        </div>

        <div 
          className="absolute top-[45%] left-[10%] text-gray-500 opacity-[0.05]"
          style={{ transform: `translateY(${scrollY * 0.4}px) rotate(45deg)` }}
        >
          <Utensils size={100} />
        </div>

        <div 
          className="absolute top-[70%] right-[15%] text-[#4E342E] opacity-[0.04]"
          style={{ transform: `translateY(${scrollY * 0.6}px) rotate(-25deg)` }}
        >
          <Cookie size={160} />
        </div>

        <div 
          className="absolute top-[30%] left-[40%] text-[#FA8072] opacity-[0.03]"
          style={{ transform: `translateY(${scrollY * 0.15}px) rotate(180deg)` }}
        >
          <ChefHat size={200} />
        </div>
      </div>

      <Header />

      <main className="flex-grow container mx-auto px-4 pb-8 pt-32 space-y-12 relative z-10">
        <div 
          className="flex justify-center py-4 relative"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="relative group" onClick={handleLogoTap}>
            <Logo 
              customSrc={customLogo}
              className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] drop-shadow-2xl transition-all duration-300 hover:drop-shadow-3xl" 
            />
            
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleLogoUpload} 
            />
          </div>
        </div>

        <InfoBox />
        <RecipeGenerator />
      </main>

      <footer className="bg-slate-800 text-slate-300 py-8 mt-auto relative z-10">
        <div className="container mx-auto px-4 text-center transition-transform active:scale-95 duration-200 select-none">
          <p className="mb-2 text-lg">جميع الحقوق محفوظة 2026 - مخبز كوكيز</p>
          <p className="text-sm opacity-75">صُنع يدوياً بكل حُب ❤️</p>
        </div>
      </footer>

      {clicks.map(click => (
        <span
          key={click.id}
          className="fixed pointer-events-none rounded-full bg-[#FA8072] opacity-50 z-50 w-10 h-10 -ml-5 -mt-5 animate-ripple"
          style={{ 
            left: click.x, 
            top: click.y - window.scrollY
          }}
        />
      ))}
    </div>
  );
};

export default App;
