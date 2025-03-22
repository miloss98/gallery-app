import Image from 'next/image';
import Link from 'next/link';

const API_URL = `https://pixabay.com/api/?key=${process.env.NEXT_PUBLIC_API_KEY}&q=interior+design&image_type=photo&per_page=12`;

export const metadata = {
  title: 'Our Work | My Website',
  description: 'Browse our portfolio showcasing our best work.',
  openGraph: {
    title: 'Our Work | My Website',
    description: 'Browse our portfolio showcasing our best work.',
    url: 'https://example.com/our-work',
    siteName: 'My Website',
    images: [
      {
        url: 'https://example.com/default-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default async function OurWork() {
  const response = await fetch(API_URL);
  const imagesData = await response.json();

  if (!imagesData) return;
  return (
    <div className="mx-auto mt-20">
      <div className="py-20 md:px-10 px-5 lg:px-20 flex flex-col gap-12">
        <h1 className="font-roboto md:text-4xl text-3xl lg:text-5xl text-center">
          Interior Design Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {imagesData.hits.map((image, id) => (
            <Link
              key={id}
              href={`/our-work/${image.id}`}
              className="flex flex-col gap-2"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
