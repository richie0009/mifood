import type {Metadata} from 'next';
import { DM_Sans, Forum } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import { Footer } from '@/components/Footer';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
});

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-forum',
});

export const metadata: Metadata = {
  title: 'MiFood - Miami Food Delivery',
  description: 'Order food online in Miami, FL. Fresh pizza, burgers, sushi and more, delivered fast from MiFood.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${forum.variable}`}>
      <body suppressHydrationWarning className="font-sans text-brand-green-body bg-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
