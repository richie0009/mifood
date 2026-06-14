'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-[1312px] mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="font-oswald text-2xl font-bold text-white tracking-widest uppercase">
            MiFood
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-white text-base font-sans font-medium">
          <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
          <Link href="#menu" className="hover:text-white/80 transition-colors">Menu</Link>
          <Link href="#location" className="hover:text-white/80 transition-colors">Location</Link>
          <Link href="#reviews" className="hover:text-white/80 transition-colors">Reviews</Link>
          
          <a href="tel:+16678953422" className="px-6 py-3 border border-white hover:bg-white/10 transition-colors rounded-[0.625rem]">
            +1-667-895-3422
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            type="button" 
            className="text-white hover:text-white/80 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg border-t border-white/10">
          <div className="px-4 pt-2 pb-6 flex flex-col items-center space-y-4 font-sans text-lg text-white">
            <Link href="/" className="w-full text-center py-2 hover:bg-white/10 rounded-md" onClick={toggleMobileMenu}>Home</Link>
            <Link href="#menu" className="w-full text-center py-2 hover:bg-white/10 rounded-md" onClick={toggleMobileMenu}>Menu</Link>
            <Link href="#location" className="w-full text-center py-2 hover:bg-white/10 rounded-md" onClick={toggleMobileMenu}>Location</Link>
            <Link href="#reviews" className="w-full text-center py-2 hover:bg-white/10 rounded-md" onClick={toggleMobileMenu}>Reviews</Link>
            <a href="tel:+16678953422" className="mt-4 w-full text-center px-6 py-3 border border-white hover:bg-white/10 transition-colors rounded-[0.625rem]" onClick={toggleMobileMenu}>
              +1-667-895-3422
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
