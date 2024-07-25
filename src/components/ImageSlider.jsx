import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = ({ folderName, className }) => {
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    const loadImages = async () => {
      const imagesArray = [];
      let i = 1;
      let imageLoaded = true;

      while (imageLoaded) {
        const url = `/assets/${folderName}/img (${i}).png`; // Adjust path as needed
        try {
          await new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
              imagesArray.push(url);
              resolve();
            };
            img.onerror = () => {
              imageLoaded = false;
              reject();
            };
          });
        } catch (error) {
          // If an image fails to load, stop loading further images
          console.log("Image not found or failed to load");
          break;
        }
        i++;
      }

      setImages(imagesArray);
    };

    loadImages();
  }, [folderName]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={`image-slider ${className}`}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className='flex items-center justify-center'>
            <img className='w-full h-auto' src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
