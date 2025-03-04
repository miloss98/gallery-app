'use client';
import Link from 'next/link';
import { Slider } from './components/slider';
import { CompareImage } from './components/compareImage';
import { LogosSection } from './components/logosSection';

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
          <Link
            href="/our-work"
            className="bg-white rounded-lg p-3 font-medium text-xl hover:bg-gradient-to-r hover:to-slate-400 hover:from-white"
          >
            Our projects
          </Link>
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
