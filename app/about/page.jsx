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
  return (
    <div className="my-20 px-5 md:px-10 lg:px-20 flex flex-col gap-12">
      <h1 className="font-roboto md:text-4xl text-3xl lg:text-5xl mt-12">
        About Us
      </h1>
      <div className="flex flex-col gap-16 max-w-5xl">
        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">Our Story</h2>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            We are a passionate team of designers, innovators, and visionaries,
            dedicated to transforming ordinary spaces into extraordinary ones.
            Founded in 2010, Gallery App was born out of a shared vision to make
            the world a more beautiful place, one room at a time.
          </p>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            What started as a small local design studio quickly grew into a
            nationally recognized name, known for our creative approach,
            attention to detail, and commitment to client satisfaction.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Founder
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            Our founder, Lorem Ipsum, an experienced interior designer with over
            15 years in the industry, saw a gap in the market for personalized,
            innovative design solutions. Driven by a love for design and a deep
            understanding of space, Lorem Ipsum built Gallery App to be a place
            where both style and practicality live harmoniously.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">What We Do</h2>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            At Gallery App, we specialize in turning your vision into reality.
            Whether you're looking to redesign your living room, remodel your
            office, or create a cozy kitchen, our team offers a wide range of
            services tailored to your unique needs. From concept to completion,
            we guide you through every step of the design process, ensuring that
            the end result is a space you'll love.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Services
          </h2>
          <ul className="list-inside list-disc text-xl md:text-2xl lg:text-3xl text-black">
            <li className="mb-3">
              Residential Design: Creating beautiful and functional spaces for
              your home, from living rooms to bedrooms, kitchens, and bathrooms.
            </li>
            <li className="mb-3">
              Commercial Design: Designing stylish and efficient workspaces that
              inspire productivity and creativity.
            </li>
            <li className="mb-3">
              Renovations: Transforming outdated spaces with modern finishes and
              thoughtful layouts.
            </li>
            <li className="mb-3">
              Virtual Design Consultations: Offering design advice and guidance
              remotely, so you can start your project from anywhere.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Approach
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            We believe in collaboration and customization. We don't just create
            spaces; we create experiences. Our team works closely with you to
            understand your lifestyle, needs, and aesthetic preferences. By
            combining your ideas with our expertise, we deliver designs that not
            only look beautiful but also feel functional and welcoming.
          </p>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            We take pride in offering designs that are:
          </p>
          <ul className="list-inside list-disc text-xl md:text-2xl lg:text-3xl text-black mt-4">
            <li className="mb-3">
              Personalized: Every project is tailored to your specific needs and
              preferences.
            </li>
            <li className="mb-3">
              Sustainable: We prioritize eco-friendly materials and practices to
              create spaces that are both stylish and environmentally
              responsible.
            </li>
            <li className="mb-3">
              Timeless: Our designs are classic and versatile, ensuring that
              they remain relevant and inspiring for years to come.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Meet the Team
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            Lorem Ipsum - Founder & Lead Designer. With over 15 years of
            experience in interior design, Lorem Ipsum brings creativity,
            precision, and a keen eye for detail to every project. Her work has
            been featured in top design publications, and she is known for
            blending modern aesthetics with functionality.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Our Philosophy
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            We believe that design should be an expression of you—your
            personality, your lifestyle, and your values. Whether it's the
            smallest touch or an entire room transformation, we are here to
            create spaces that speak to your heart and soul.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-black mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-inside list-disc text-xl md:text-2xl lg:text-3xl text-black">
            <li className="mb-3">
              Expert Design Team: Our team brings years of experience and
              creativity to every project.
            </li>
            <li className="mb-3">
              Customer-Centered: We listen, collaborate, and tailor every design
              to fit your needs.
            </li>
            <li className="mb-3">
              Quality & Durability: We use only the highest quality materials to
              ensure your space lasts and evolves with you.
            </li>
            <li className="mb-3">
              Timely & Reliable: We respect your time and budget, completing
              projects on schedule and within scope.
            </li>
          </ul>
          <p className="mt-4 text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
            Let Gallery App help you create the home or office you've always
            dreamed of.
          </p>
        </div>
      </div>
    </div>
  );
}
