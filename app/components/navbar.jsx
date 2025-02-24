import Image from 'next/image';
export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 bg-white bg-opacity-20 backdrop-blur-sm shadow-lg z-10 flex items-center px-5 md:px-10 lg:px-20 justify-between bg-transparent w-full h-20">
      <div>
        <a href="/">
          <Image
            src="/logo.svg"
            alt="Gallery logo"
            width={180}
            height={38}
            priority
          />
        </a>
      </div>
      <div className="flex items-center text-white gap-4 font-medium text-lg tracking-wide">
        <a href="/our-work">Our Work</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};
