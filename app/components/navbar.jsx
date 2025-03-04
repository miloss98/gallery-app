import Image from 'next/image';
export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white bg-opacity-50 backdrop-blur-sm shadow-lg">
      <div className="flex items-center w-full justify-between h-20 max-w-[1800px] mx-auto   px-5 md:px-10 lg:px-20  bg-transparent">
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
        <div className="flex items-center text-black gap-4 xl:gap-8 font-medium text-xl tracking-wide">
          <a href="/our-work">Our Work</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};
