import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ folderName, className }) => {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadImages = async () => {
      let i = 1;
      let keepLoading = true;

      while (keepLoading) {
        const url = `/assets/${folderName}/img (${i}).png`; // Adjust path as needed
        const img = new Image();
        img.src = url;

        await new Promise((resolve) => {
          img.onload = () => {
            setImages((prevImages) => [...prevImages, url]); // Update images as each one loads
            setLoading(false); // As soon as one image is loaded, stop showing loading text
            resolve();
          };

          img.onerror = () => {
            keepLoading = false; // Stop loading when no more images are found
            resolve();
          };
        });

        i++;
      }
    };

    loadImages();
  }, [folderName]);

  const settings = {
    dots: true,
    infinite: false, // Prevent infinite looping of the slider
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
    <div className='border rounded-3xl border-amber-500 border-opacity-75 bg-amber-600 bg-opacity-15 backdrop-blur-md'>
      <div className={`image-slider ${className}`}>
        {loading && images.length === 0 ? (
          <div className='flex items-center justify-center h-64'>
            <span className='text-2xl text-gray-500'>Loading...</span>
          </div>
        ) : (
          <Slider {...settings}>
            {images.length > 0 ? (
              images.map((src, index) => (
                <div key={index} className=''>
                  <div className='flex items-center justify-center'>
                    <img
                      className='w-full h-auto rounded-3xl'
                      src={src}
                      alt={`Slide ${index + 1}`}
                      loading='lazy' // Enable browser-based lazy loading
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className='flex items-center justify-center h-64'>
                <span className='text-2xl text-gray-500'>No Images Available</span>
              </div>
            )}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
