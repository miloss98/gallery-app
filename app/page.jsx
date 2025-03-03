'use client';

import { useState, useEffect } from 'react';

import { Slider } from './components/slider';
import { CompareImage } from './components/compareImage';

const API_KEY = '49032845-49f4bd8ae2856bf3313423fc8';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=interior+design&image_type=photo&per_page=5`;

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <main className="flex flex-col ">
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

      <CompareImage />
      <Slider images={images} />
    </main>
  );
}
