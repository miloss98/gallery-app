import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

export const CompareImage = () => {
  return (
    <div className="flex flex-col py-10 md:py-20 lg:py-40">
      <div className="w-full flex-col flex justify-center pb-8 items-center gap-8 px-5 md:px-10 lg:px-20">
        <p className="font-roboto font-bold md:text-3xl text-2xl lg:text-4xl text-center">
          See our magic
        </p>
        <p className="text-base md:text-lg lg:text-xl italic">
          <span className="font-bold not-italic">Tip:</span> drag left or right
          to see the differences
        </p>
      </div>
      <div className="w-full h-auto lg:h-[70vh]">
        <ReactCompareSlider
          className="h-full w-full"
          itemOne={
            <ReactCompareSliderImage
              src="before.webp"
              srcSet="before.webp"
              alt="before"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="after.webp"
              srcSet="after.webp"
              alt="after"
            />
          }
        />
      </div>
    </div>
  );
};
