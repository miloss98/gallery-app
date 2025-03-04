'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ClimbingBoxLoader } from 'react-spinners';

const API_URL = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=interior+design&image_type=photo&per_page=12`;

export default function OurWork() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setImages(data.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="mx-auto mt-20">
      <div className="py-20 md:px-10 px-5 lg:px-20 flex flex-col gap-12">
        <h1 className="text-3xl font-bold text-center mb-6">
          Interior Design Gallery
        </h1>

        {loading ? (
          <div className="w-full flex justify-center">
            <ClimbingBoxLoader color="#000000" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {images.map((image, id) => (
              <div key={id} className="flex flex-col gap-2">
                <div className="relative overflow-hidden rounded-lg shadow-md aspect-video">
                  <Image
                    src={image.largeImageURL}
                    alt={image.tags}
                    className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                    fill
                    priority
                    sizes="100% 100%"
                  />
                  <span className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-lg font-bold">
                    {image.user}
                  </span>
                </div>
                <p className="text-center text-bold text-2xl"> {image.user} </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
