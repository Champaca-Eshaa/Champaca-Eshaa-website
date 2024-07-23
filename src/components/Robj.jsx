import React, { useState, useEffect } from 'react';

const Robj = ({ image, className, direction, speed }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    setRotation(10)
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // Adjust rotation directly proportional to the scrollTop value
      setRotation(10 + (direction * scrollTop * speed));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [direction, speed]);

  return (
    <div
      className={`fixed z-0 transition-transform duration-0 animate-spin-on-load ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <img src={image} alt="rotating object" className="w-full h-full object-cover brightness-75" />
    </div>
  );
};

export default Robj;
