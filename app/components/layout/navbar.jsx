'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'react-feather';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white bg-opacity-60 backdrop-blur-sm shadow-lg">
      <div className="flex items-center justify-between h-20 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20 bg-transparent">
        <Link href="/">
          <Image
            src="/logo-black.svg"
            alt="Gallery logo"
            width={200}
            height={100}
            priority
          />
        </Link>

        <div className="block md:hidden" onClick={toggleMenu}>
          <Menu size={32} />
        </div>

        <div className="hidden md:flex items-center text-black gap-4 xl:gap-8 font-medium text-base md:text-xl 2xl:text-2xl tracking-wide">
          <Link
            className={`hover:underline-offset-8 hover:underline ${pathname === '/our-work' && 'underline underline-offset-8 text-blue-700'}`}
            href="/our-work"
          >
            Our Work
          </Link>
          <Link
            className={`hover:underline-offset-8 hover:underline ${pathname === '/about' && 'underline underline-offset-8 text-blue-700'}`}
            href="/about"
          >
            About Us
          </Link>
          <Link
            className={`hover:underline-offset-8 hover:underline ${pathname === '/contact' && 'underline underline-offset-8 text-blue-700'}`}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Burger Menu for mobile screens */}
      <div
        className={`md:hidden h-screen fixed top-0 left-0 w-full bg-black text-white flex flex-col transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex justify-between items-center p-5 shadow-white shadow-sm">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo-white.svg"
              alt="Gallery logo"
              width={200}
              height={100}
            />
          </Link>
          <div className="cursor-pointer" onClick={toggleMenu}>
            <X size={32} />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10">
          <Link
            href="/our-work"
            className="text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Work
          </Link>
          <Link
            href="/about"
            className="text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
