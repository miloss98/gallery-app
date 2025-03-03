import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'react-feather';

export const Slider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-auto max-h-[80vh] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image: any, index: number) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative aspect-video"
          >
            <Image
              src={image.largeImageURL}
              alt="Slide"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-[1%] top-1/2 transform -translate-y-1/2 bg-black/50 p-4 rounded-full text-white"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-[1%] top-1/2 transform -translate-y-1/2 bg-black/50 p-4 rounded-full text-white"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bg-black/80  rounded-full p-4 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-6 h-6 rounded-full transition-all duration-300 ${
              current === index ? 'bg-white scale-125' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
