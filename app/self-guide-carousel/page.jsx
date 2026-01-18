'use client';
import EmblaCarousel from './EmblaCarousel';
import './carousel.css';

// const OPTIONS = { loop: true, slidesToScroll: 'auto' };
// const SLIDE_COUNT = 9;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function SelfGuideCarousel() {
  return (
    <div className="w-full mt-20 px-5 md:px-10 lg:px-20 bg-gray-700 py-10">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}
