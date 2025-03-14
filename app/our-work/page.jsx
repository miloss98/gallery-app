import OurWorkClientSide from './clientSide';

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

export default function OurWork() {
  return (
    <div>
      <OurWorkClientSide />
    </div>
  );
}
