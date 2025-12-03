import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';

export const InfoBox: React.FC = () => {
  return (
    <div className="bg-white/95 backdrop-blur-md w-full max-w-3xl mx-auto p-8 rounded-3xl shadow-xl border-t-8 border-[#FA8072] transform transition-all duration-200 hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] cursor-default">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 border-b border-orange-100 pb-4 select-none">
        معلومات التواصل
      </h2>

      <div className="space-y-6">
        <div className="flex items-center gap-4 text-gray-700 group cursor-pointer active:scale-95 transition-transform p-2 rounded-xl hover:bg-orange-50">
          <div className="bg-orange-100 p-4 rounded-full group-hover:bg-[#FA8072] group-hover:text-white transition-colors">
            <Phone className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <a 
              href="tel:+963957432958" 
              className="text-xl font-bold dir-ltr text-right hover:text-[#FA8072] transition-colors"
            >
              +963 957 432 958
            </a>
            <a 
              href="tel:+963993986953" 
              className="text-xl font-bold dir-ltr text-right hover:text-[#FA8072] transition-colors"
            >
              +963 993 986 953
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-700 group cursor-pointer active:scale-95 transition-transform p-2 rounded-xl hover:bg-orange-50">
          <div className="bg-orange-100 p-4 rounded-full group-hover:bg-[#FA8072] group-hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </div>
          <a 
            href="mailto:Cookies.hama@tuta.io" 
            className="text-lg md:text-xl font-medium break-all hover:text-[#FA8072] transition-colors"
          >
            Cookies.hama@tuta.io
          </a>
        </div>

        <div className="flex items-center gap-4 text-gray-700 group cursor-pointer active:scale-95 transition-transform p-2 rounded-xl hover:bg-orange-50">
          <div className="bg-orange-100 p-4 rounded-full group-hover:bg-[#FA8072] group-hover:text-white transition-colors">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="text-lg md:text-xl font-medium leading-relaxed group-hover:text-[#FA8072] transition-colors">
            سوريا – حماة – شارع الزاغة
            <span className="block text-sm md:text-base text-gray-500 mt-1">مقابل سنتر الجمان</span>
          </span>
        </div>
      </div>

      {/* Social & WhatsApp Section */}
      <div className="mt-10 pt-8 border-t border-orange-100 flex flex-col md:flex-row gap-6 items-center justify-between">
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/963957432958"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto flex-1 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 rounded-2xl font-bold shadow-md transition-all hover:-translate-y-1 active:scale-95 active:shadow-none"
        >
          <MessageCircle className="w-6 h-6 animate-pulse" />
          <span className="text-lg">راسلنا عبر واتساب</span>
        </a>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 w-full md:w-auto">
            <a 
              href="https://www.facebook.com/share/1EVGzxvb3y/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 transition-transform active:scale-90"
            >
                <div className="p-4 bg-blue-50 rounded-full group-hover:bg-[#1877F2] transition-colors shadow-sm">
                    <Facebook className="w-7 h-7 text-[#1877F2] group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs text-gray-500 font-medium group-hover:text-[#1877F2]">فيسبوك</span>
            </a>
            
            <a 
              href="https://www.instagram.com/cookies.hama?igsh=bWx0YWIydjRiOGZn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 transition-transform active:scale-90"
            >
                <div className="p-4 bg-pink-50 rounded-full group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 transition-all shadow-sm">
                    <Instagram className="w-7 h-7 text-[#E4405F] group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs text-gray-500 font-medium group-hover:text-[#E4405F]">انستغرام</span>
            </a>
        </div>
      </div>
    </div>
  );
};