import React from "react";
import useScrollAnimation from "../animations/useScrollAnimation";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg"; 

const About = () => {

  useScrollAnimation('rise-fade');

  return (
    <div id="about">
      <section className="overflow-hidden pt-20 pb-5 lg:pt-[120px] lg:pb-[90px] ">
        <div className="container mx-auto max-sm:p-5 max-md:p-10">
          <div className="flex flex-wrap items-center justify-between -mx-4 rise-fade">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img src={about1} alt="" className=" rounded-2xl h-3/4" />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img src={about3} alt="" className="w-full rounded-2xl" />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img src={about2} alt="" className="w-full rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 rise-fade max-md:p-4">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-amber-600 text-dark sm:text-[40px]/[48px]">
                  Who we are ?
                </h2>
                <p className="mb-5 text-base text-white ">
                  we are a dedicated handicraft company specializing in creating
                  exquisite, divine statues and items, tailored to meet our
                  customer's unique requirements.
                </p>
                <p className="mb-8 text-base text-white ">
                  Our mission is to blend purity and tradition with personalized
                  craftsmanship, delivering art hat inspires and uplifts.
                </p>
                <a
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-amber-600  hover:bg-opacity-90"
                  href="#products"
                >
                  See products
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
