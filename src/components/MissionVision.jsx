import React from 'react';
import useScrollAnimation from "../animations/useScrollAnimation";


const MissionVision = () => {
  useScrollAnimation('rise-fade');
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center pb-10 max-md:pb-3 rise-fade max-md:px-5 ">
      <h2 className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">Mission</h2>
      <hr className="border border-gray-600 my-4" />
      <p className="mt-6 text-base leading-8 text-white">To create exquisite, custom handcrafted statues and items that embody purity and divinity, meeting each customer's unique requirements while preserving sacred traditions."</p>
    </div>
    <div className='h-10'>

    </div>
    <div className="mx-auto max-w-3xl text-center max-md:pb-3 pb-10 rise-fade max-md:px-5">
      <h2 className="text-3xl font-bold tracking-tight text-amber-600 sm:text-4xl">Vision</h2>
      <hr className="border border-gray-600 my-4" />
      <p className="mt-6 text-base leading-8 text-white">To be the leading provider of divine handcrafted art, known for our commitment to quality, customization, and the timeless beauty of our creations.</p>
    </div>
    </div>
  );
};

export default MissionVision;
