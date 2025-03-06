import Image from 'next/image';

export const LogosSection = () => {
  const logos = [
    '/Amsterdam.svg',
    '/Italic.svg',
    '/Rise.svg',
    '/Theo.svg',
    '/Phoenix.svg',
    '/Delaware.svg',
  ];
  return (
    <div className="w-full flex flex-col items-center px-5 md:px-10 lg:px-20 py-10 md:py-20 lg:py-40 gap-12 md:gap-20">
      <div className="w-full flex justify-center items-center">
        <p className="font-bold md:text-3xl text-2xl lg:text-4xl">
          Our happy partners:
        </p>
      </div>
      <div className="w-full flex-wrap flex justify-center gap-12 md:gap-20 items-center">
        {logos.map((l, id) => {
          return (
            <div
              key={id}
              className="relative h-16 md:h-24 lg:h-28 aspect-video brightness-0"
            >
              <Image src={l} alt="l" sizes="100% 100%" fill />
            </div>
          );
        })}
      </div>
    </div>
  );
};
