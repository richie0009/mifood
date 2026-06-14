import Link from 'next/link';
import Image from 'next/image';

export function SiteHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="https://websitedemos.net/love-nature-08/wp-content/uploads/sites/1037/2021/11/logo-white.svg" 
              alt="MiFood" 
              width={86} 
              height={72} 
              className="w-16 h-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-white text-base">
          <Link href="/" className="hover:text-brand-yellow transition-colors">Home</Link>
          <Link href="/about" className="hover:text-brand-yellow transition-colors">About</Link>
          <Link href="/services" className="hover:text-brand-yellow transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-brand-yellow transition-colors">Contact</Link>
          
          <a href="tel:+16678953422" className="px-6 py-3 border border-white hover:text-white hover:bg-white/10 transition-colors rounded-none">
            +1-667-895-3422
          </a>
        </div>
      </div>
    </header>
  );
}
