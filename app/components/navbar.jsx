import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white bg-opacity-50 backdrop-blur-sm shadow-lg">
      <div className="flex items-center w-full justify-between h-20 max-w-[1800px] mx-auto px-5 md:px-10 lg:px-20 bg-transparent">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Gallery logo"
            width={180}
            height={50}
            priority
          />
        </Link>

        <div className="flex items-center text-black gap-4 xl:gap-8 font-medium text-base md:text-xl 2xl:text-2xl tracking-wide">
          <Link href="/our-work">Our Work</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};
