'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, Mail, Phone } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image_url?: string;
  description?: string;
}

export const TeamModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-md animate-[fadeIn_0.3s_ease]" />

      {/* Modal */}
      <div 
        className="relative z-10 bg-white rounded-[2.5rem] max-w-lg w-full shadow-2xl overflow-hidden animate-[slideUp_0.4s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-white transition-all shadow-lg"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-72 w-full overflow-hidden bg-gray-50">
          {member.image_url ? (
            <Image 
              src={member.image_url} 
              alt={member.name} 
              fill 
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary/5">
              <span className="text-gray-300 font-black tracking-widest text-lg">PRINZ OIL</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="px-10 pb-10 -mt-8 relative z-10">
          <div className="mb-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">
              {member.role}
            </div>
          </div>
          <h2 className="text-3xl font-black text-primary mb-4 tracking-tight">{member.name}</h2>
          <p className="text-gray-500 leading-relaxed font-normal text-base mb-8">
            {member.description || "Leading the energy frontier with expertise and vision."}
          </p>

          {/* Contact info */}
          <div className="space-y-3 pt-6 border-t border-gray-100">
            <a 
              href="mailto:Info@prinz-oil.com.ng" 
              className="flex items-center gap-3 text-gray-500 hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <span className="text-sm font-medium">Info@prinz-oil.com.ng</span>
            </a>
            <a 
              href="tel:+234000000000" 
              className="flex items-center gap-3 text-gray-500 hover:text-accent transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                <Phone size={18} />
              </div>
              <span className="text-sm font-medium">Contact Prinz-Oil</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};
