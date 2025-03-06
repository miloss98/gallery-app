import { CompareImage, Slider, LogosSection, LinkButton } from './components';

export const metadata = {
  title: 'Home | Gallery',
  description: 'Welcome to Gallery website.',
  openGraph: {
    title: 'Home | My Website',
    description: 'Welcome to Gallery website.',
    url: 'https://example.com',
    siteName: 'Gallery app',
    images: [
      {
        url: 'https://example.com/og-image.jpg',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
};

export default function Home() {
  const sliderImages = ['/hero2.webp', '/hero3.webp', '/hero4.webp'];

  return (
    <main className="flex flex-col ">
      <section
        className="bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: "url('/hero.webp')" }}
      >
        <div
          className="flex flex-col items-center gap-8 justify-center 
          w-full h-full bg-black bg-opacity-50"
        >
          <h1 className="text-white text-4xl font-bold">
            Welcome to Our Gallery
          </h1>
          <LinkButton href="/our-work"> Our projects</LinkButton>
        </div>
      </section>

      <CompareImage />
      <div className="flex w-full flex-col pb-8 items-center gap-8">
        <p className="font-bold md:text-3xl text-2xl lg:text-4xl">
          Happy clients, beautiful designs.{' '}
        </p>
        <p className="text-base md:text-lg lg:text-xl">
          Our customers love our professional virtual interior design services
          and here is why.
        </p>
      </div>
      <Slider images={sliderImages} />
      <LogosSection />
    </main>
  );
}
