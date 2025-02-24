'use client';
import { useState } from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <main className="flex flex-col">
      <section
        className="bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div
          className="flex items-center justify-center 
          w-full h-full bg-black bg-opacity-50"
        >
          <h1 className="text-white text-4xl font-bold">
            Welcome to Our Gallery
          </h1>
        </div>
      </section>
      <section className="w-full h-4/6 overflow-hidden ">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src="before.jpg"
              srcSet="before.jpg"
              alt="Image one"
              className="object-contain"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="after.jpg"
              srcSet="after.jpg"
              alt="Image two"
              className="object-fill"
            />
          }
        />
      </section>
    </main>
  );
}
