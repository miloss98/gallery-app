'use client';

import { Facebook, Instagram, Linkedin } from 'react-feather';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16  flex flex-col gap-12">
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20 flex flex-col gap-12">
        <div className="border-b border-white pb-3">
          <Image
            src="/logo-white.svg"
            alt="Gallery logo"
            width={160}
            height={50}
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-semibold">About Us</p>
            <p className="text-base md:text-lg text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              euismod urna ut magna suscipit, ac sollicitudin arcu facilisis.
            </p>
            <div className="flex items-center gap-4">
              <Link
                className="hover:scale-110"
                href="https://www.instagram.com"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                className="hover:scale-110"
                href="https://www.facebook.com"
                target="_blank"
              >
                <Facebook />
              </Link>
              <Link
                className="hover:scale-110"
                href="https://www.linkedin.com"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-semibold">Quick Links</p>
            <div className="flex flex-col text-base md:text-lg text-gray-400 gap-2">
              <Link className="hover:text-white" href="/">
                Home
              </Link>
              <Link className="hover:text-white" href="/our-work">
                Our Work
              </Link>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl">Contact Us</p>
            <div className="flex flex-col text-base md:text-lg text-gray-400 gap-2">
              <Link
                className="hover:text-white"
                href="mailto:someone@example.com"
              >
                Email: info@example.com
              </Link>
              <Link className="hover:text-white" href="tel:+1234567890">
                Phone: +1 234 567 890
              </Link>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center text-base md:text-lg text-gray-400">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
};
