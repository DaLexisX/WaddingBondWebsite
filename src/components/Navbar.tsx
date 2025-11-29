'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        !isTransparent
          ? 'bg-background/80 backdrop-blur-md border-border/50 shadow-sm'
          : 'bg-transparent text-white'
      )}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
            href="/" 
            className={cn(
                "text-xl font-bold tracking-tight transition-colors hover:opacity-80",
                !isTransparent ? "text-foreground" : "text-white",
                isHome && !isScrolled && "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" // Hide on mobile/desktop home initial, but let's follow user request strictly "not be there"
            )}
            style={{ opacity: isHome && !isScrolled ? 0 : 1, pointerEvents: isHome && !isScrolled ? 'none' : 'auto' }}
        >
          Douglas Wadding-Bond
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-blue-400',
                pathname === item.href 
                    ? 'text-blue-500 font-semibold' 
                    : !isTransparent ? 'text-muted-foreground' : 'text-slate-200'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="sm" variant={!isTransparent ? "default" : "secondary"}>
             <Link href="/contact">Hire Me</Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={cn("md:hidden", isTransparent && "text-white hover:text-white hover:bg-white/10")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                    <Link
                    href={item.href}
                    className={cn(
                        'text-lg font-medium transition-colors hover:text-blue-600',
                        pathname === item.href ? 'text-blue-600' : 'text-muted-foreground'
                    )}
                    >
                    {item.name}
                    </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                  <Button asChild className="mt-4">
                    <Link href="/contact">Hire Me</Link>
                  </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

