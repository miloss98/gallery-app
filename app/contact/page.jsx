export const metadata = {
  title: 'Contact page | Gallery',
  description: 'About Gallery website.',
  openGraph: {
    title: 'Contact page | Gallery',
    description: 'Contact Gallery website.',
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

export default function Contact() {
  return <div className="mt-20"> This is Contact us page. </div>;
}
