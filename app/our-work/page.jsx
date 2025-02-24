'use client';
import { useEffect, useState } from 'react';

const API_KEY = '49032845-49f4bd8ae2856bf3313423fc8';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=interior+design&image_type=photo&per_page=12`;

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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Interior Design Gallery
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image.largeImageURL}
                alt={image.tags}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-sm">
                {image.user}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
