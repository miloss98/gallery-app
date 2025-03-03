import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

export const CompareImage = () => {
  return (
    <div className="w-full h-auto lg:h-[80vh]">
      <ReactCompareSlider
        className="h-full w-full"
        itemOne={
          <ReactCompareSliderImage
            src="before.jpg"
            srcSet="before.jpg"
            alt="Image one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="after.jpg"
            srcSet="after.jpg"
            alt="Image two"
          />
        }
      />
    </div>
  );
};
