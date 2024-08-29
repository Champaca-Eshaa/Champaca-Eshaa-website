import React, { useState, useEffect } from 'react';

const Robj = ({ image, className, direction, speed, scaleStrength }) => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newRotation = 10 + (direction * scrollTop * speed);
      const newScale = Math.max(1 - (scrollTop / scaleStrength), 0.5); // Use scaleStrength parameter

      setRotation(newRotation);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction, speed, scaleStrength]);

  return (
    <div
      className={`fixed z-0 transition-transform duration-0 ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg) scale(${scale})`, 
      }}
    >
      <img src={image} alt="rotating object" className="w-full h-full object-cover brightness-75" />
    </div>
  );
};

export default Robj;
