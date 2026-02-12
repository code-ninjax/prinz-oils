'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    title: 'Reliable Petroleum Supply Across Nigeria',
    description: 'Prinz-Oil Limited is a major distributor and marketer of refined petroleum products — AGO, PMS, and HHK — across Nigeria.',
    bgImage: '/images/storage-tanks.jpg',
    ctaPrimary: 'Discover Prinz-Oil',
    ctaSecondary: 'Our Services',
    linkPrimary: '/about',
    linkSecondary: '/services',
  },
  {
    title: 'Sustainable Petroleum Distribution',
    description: 'Prinz-Oil Limited is a Premier Nigerian company dedicated to sustainable marketing and distribution of Petroleum products -AGO, PMS and HHK --- across Nigeria.',
    bgImage: '/images/industrial-port.jpg',
    ctaPrimary: 'Our Services',
    ctaSecondary: 'Contact Us',
    linkPrimary: '/services',
    linkSecondary: '/contact',
  },
  {
    title: 'Covering South-South and South-East Nigeria',
    description: 'Our fleet of fully equipped trucks ensures reliable delivery of refined petroleum products to all major cities in our coverage areas.',
    bgImage: '/images/refinery-night.jpg',
    ctaPrimary: 'Meet Our Team',
    ctaSecondary: 'Contact Us',
    linkPrimary: '/team',
    linkSecondary: '/contact',
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[90vh] md:h-screen w-full overflow-hidden bg-primary font-sans">
      {/* Slider Container */}
      <div 
        className="flex h-full transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-full w-full flex-shrink-0 overflow-hidden"
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-10000 ${
                index === current ? 'scale-110' : 'scale-100'
              }`}
              style={{ backgroundImage: `url('${slide.bgImage}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/50 to-primary/30 z-10" />
            </div>

            {/* Content - Full Width */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className={`transition-all duration-1000 delay-300 transform ${
                index === current ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              } max-w-3xl`}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                  {slide.title.split(' ').map((word, i) => (
                    <span key={i}>
                      {(i === 3 || word.toLowerCase() === 'future' || word.toLowerCase() === 'innovative') ? (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-white">
                          {word}{' '}
                        </span>
                      ) : (
                        word + ' '
                      )}
                    </span>
                  ))}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 lg:mb-10 font-normal leading-relaxed max-w-xl">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={slide.linkPrimary}>
                    <Button size="lg" className="bg-accent hover:bg-accent-dark text-white border-none px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-xl shadow-accent/20 w-full sm:w-auto">
                      {slide.ctaPrimary}
                    </Button>
                  </Link>
                  <Link href={slide.linkSecondary}>
                    <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 hover:border-white px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base backdrop-blur-sm w-full sm:w-auto">
                      {slide.ctaSecondary}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - More minimal */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-4">
        <button
          onClick={prevSlide}
          className="group p-4 rounded-full bg-white/5 text-white/50 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md border border-white/5"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="group p-4 rounded-full bg-accent/90 text-white hover:bg-accent transition-all backdrop-blur-md shadow-lg shadow-accent/20"
          aria-label="Next slide"
        >
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-16 left-12 z-30 flex items-center gap-4">
        <span className="text-white/40 font-mono text-sm leading-none">0{current + 1}</span>
        <div className="w-24 h-px bg-white/20">
          <div 
            className="h-full bg-accent transition-all duration-1000"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
        <span className="text-white/40 font-mono text-sm leading-none">0{slides.length}</span>
      </div>
    </section>
  );
};


