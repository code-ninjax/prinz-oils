'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Operations', href: '/services' },
    { name: 'Team', href: '/team' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-primary/80 backdrop-blur-xl shadow-2xl border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-xl border-2 border-white/10 group-hover:border-accent transition-all duration-300">
                <Image 
                  src="https://otiktpyazqotihijbwhm.supabase.co/storage/v1/object/public/images/44a127c6-b353-4796-b987-361a6a50939e-5798445238652177397.jpg" 
                  alt="Prinz-Oil Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-white">
                PRINZ<span className="text-accent">OIL</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-white/70 hover:text-accent font-bold text-sm uppercase tracking-widest transition-all hover:translate-y-[-2px] active:translate-y-0"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="bg-accent hover:bg-accent-dark text-white border-none px-6 py-5 text-xs font-black uppercase tracking-widest shadow-lg shadow-accent/20">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center text-white bg-white/10 backdrop-blur-md rounded-xl border border-white/20 transition-all active:scale-95"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Animated Glass Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-primary/95 backdrop-blur-2xl border-b border-white/10 px-6 py-12 flex flex-col items-center gap-8 shadow-2xl">
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-2xl font-black text-white hover:text-accent transition-all transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)} 
            className={`w-full max-w-xs transition-all transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
             style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
             <Button className="w-full py-6 text-lg font-black bg-accent text-white uppercase tracking-widest shadow-xl shadow-accent/20">
               Contact Us
             </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
