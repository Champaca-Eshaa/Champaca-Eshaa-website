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
          console.log("All images loaded successfully");
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
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      document.querySelectorAll('.slick-slide').forEach((slide) => {
        slide.classList.remove('animate-zoom-in');
        slide.classList.remove('animate-zoom-out');
      });
      document.querySelector(`.slick-slide[data-index="${current}"]`).classList.add('animate-zoom-out');
      document.querySelector(`.slick-slide[data-index="${next}"]`).classList.add('animate-zoom-in');
    }
  };

  return (
    <div className='border rounded-3xl border-amber-500 border-opacity-75  bg-amber-600 bg-opacity-15 backdrop-blur-md'>
      <div className={`image-slider ${className}`}>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className=''>
              <div className='flex items-center justify-center'>
                <img className='w-full h-auto rounded-3xl' src={src} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
