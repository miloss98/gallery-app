import Image from "next/image";
export const Navbar = () => {
  return (
    <div className=" flex items-center px-5 md:px-10 lg:px-20 justify-between bg-orange-200 w-full h-20">
      <div>
        <a href="/">
          <Image
            src="/logo.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </a>
      </div>
      <div className="flex items-center gap-4 font-medium text-base tracking-wide">
        <a href="/our-work">Our Work</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};
