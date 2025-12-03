import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle, MessageCircle } from 'lucide-react';

export const RecipeGenerator: React.FC = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;

    // تجهيز نص الرسالة لرابط واتساب
    const text = encodeURIComponent(message);
    // الرقم الدولي بدون أصفار أو إشارات (+963 957 432 958)
    const phoneNumber = "963957432958"; 
    
    // فتح رابط واتساب
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');

    // إظهار رسالة الشكر
    setSubmitted(true);
  };

  const handleReset = () => {
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div 
      className="w-full max-w-3xl mx-auto mt-12 relative z-20 mb-20"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Container Box - Same styling as InfoBox */}
      <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border-t-8 border-[#25D366] transition-all duration-300 hover:shadow-2xl">
        
        {/* Header Section */}
        <div className="bg-gradient-to-b from-green-50 to-white p-6 md:p-8 text-center border-b border-green-100">
          <div className="inline-block p-4 bg-[#25D366] rounded-full text-white mb-4 shadow-lg transform transition-transform hover:rotate-12">
            {submitted ? <CheckCircle className="w-10 h-10" /> : <MessageCircle className="w-10 h-10" />}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            {submitted ? "تم التحويل بنجاح!" : "أرسل طلبك مباشرة"}
          </h2>
          <p className="text-gray-600">
            {submitted ? "شكراً لتواصلك معنا، ننتظر رسالتك على واتساب." : "اكتب طلبك أو استفسارك هنا وسيتم تحويلك مباشرة لمحادثة واتساب."}
          </p>
        </div>

        <div className="p-6 md:p-8">
          
          {!submitted ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="مرحباً، أرغب بطلب..."
                  className="w-full p-4 h-40 text-lg border-2 border-green-100 rounded-2xl focus:border-[#25D366] focus:ring-4 focus:ring-green-100 outline-none transition-all shadow-sm bg-white text-black placeholder-gray-400 resize-none"
                />
              </div>

              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 font-bold shadow-md text-lg"
              >
                <Send className="w-5 h-5 rtl:-scale-x-100" />
                <span>إرسال عبر واتساب</span>
              </button>
            </div>
          ) : (
            <div className="text-center py-8 space-y-6 animate-in zoom-in duration-500">
              <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-100">
                <p className="text-lg font-medium">
                  تم فتح تطبيق واتساب لإكمال عملية الإرسال.
                  <br/>
                  شكراً لاختيارك مخبز كوكيز! 🍪
                </p>
              </div>
              
              <button
                onClick={handleReset}
                className="text-[#25D366] hover:text-[#20bd5a] font-medium underline decoration-dotted transition-colors"
              >
                إرسال رسالة أخرى
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};