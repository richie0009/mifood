import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        
        <nav className="flex justify-center md:justify-start">
          <ul className="flex space-x-6 text-brand-green text-base">
            <li><Link href="/" className="hover:text-brand-yellow-hover transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-yellow-hover transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-brand-yellow-hover transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-brand-yellow-hover transition-colors">Contact</Link></li>
          </ul>
        </nav>

        <div className="flex justify-center">
          <Link href="/">
            <Image 
              src="https://websitedemos.net/love-nature-08/wp-content/uploads/sites/1037/2021/11/logo-green.svg" 
              alt="MiFood" 
              width={60} 
              height={50} 
              className="w-[60px] h-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        <div className="flex justify-center md:justify-end text-brand-green text-base text-right">
          <p>MiFood. Made in Miami, FL.</p>
        </div>

      </div>
    </footer>
  );
}
