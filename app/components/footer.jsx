'use client';

import { Facebook, Instagram, Linkedin } from 'react-feather';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:py-16  flex flex-col gap-12">
      <div className="max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-semibold">About Us</p>
            <p className="text-base md:text-lg text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              euismod urna ut magna suscipit, ac sollicitudin arcu facilisis.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.instagram.com" target="_blank">
                <Instagram />
              </Link>
              <Link href="https://www.facebook.com" target="_blank">
                <Facebook />
              </Link>
              <Link href="https://www.linkedin.com">
                <Linkedin />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-semibold">Quick Links</p>
            <div className="flex flex-col">
              <Link
                href="/"
                className="text-base md:text-lg text-gray-400 hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/our-work"
                className="text-base md:text-lg text-gray-400 hover:text-white"
              >
                Our Work
              </Link>

              <Link
                href="/about"
                className="text-base md:text-lg text-gray-400 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-base md:text-lg text-gray-400 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl md:text-2xl">Contact Us</p>
            <div>
              <p className="text-base md:text-lg text-gray-400">
                Email: info@example.com
              </p>
              <p className="text-base md:text-lg text-gray-400">
                Phone: +1 234 567 890
              </p>
              <p className="text-base md:text-lg text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
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
