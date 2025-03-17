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
  return (
    <div className="my-20 px-5 md:px-10 lg:px-20 flex flex-col gap-12">
      <h1 className="font-roboto md:text-4xl text-3xl lg:text-5xl mt-12">
        Contact
      </h1>
      <div className="w-full flex flex-col-reverse lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 aspect-square">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45327.72524589384!2d19.16361021833913!3d44.76076493936825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475be91cb02d7249%3A0xde5f5ab6329ada88!2sBijeljina!5e0!3m2!1shr!2sba!4v1742224507095!5m2!1shr!2sba"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <p className="text-xl md:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            dolorem animi laudantium, reiciendis, at, perferendis temporibus
            quod aspernatur eligendi deserunt itaque ipsa delectus iure.
            Expedita fuga laboriosam ut, nesciunt id molestiae distinctio ex
            enim qui at aut libero non eaque fugiat. Harum ab itaque architecto,
            perspiciatis est nihil aspernatur commodi.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum
            ipsa, molestias pariatur impedit provident quidem blanditiis
            sapiente autem illum?
          </p>
        </div>
      </div>
    </div>
  );
}
