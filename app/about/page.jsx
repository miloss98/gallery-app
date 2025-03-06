export const metadata = {
  title: 'About page | Gallery',
  description: 'About Gallery website.',
  openGraph: {
    title: 'About page | Gallery',
    description: 'About Gallery website.',
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

export default function About() {
  return <div className="mt-20">This is about us page. </div>;
}
