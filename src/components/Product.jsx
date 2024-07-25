import React from "react";
import useScrollAnimation from "../animations/useScrollAnimation";
import { products } from "../constants";

const Products = () => {
  useScrollAnimation("rise-fade");

  return (
    <div id="products" className="p-10 max-md:p-5 max-md:pb-10">
      <div className="text-amber-600 text-5xl font-bold pl-20 max-md:pt-5 pt-20 rise-fade max-md:pl-0 max-md:pb-10">
        <h1>Our Products </h1>
      </div>
      <div className="relative grid gap-8  max-xl:gap-4 max-xl:grid-cols-2 xl:grid-cols-4 justify-around  max-sm:p-0 max-md:p-5 p-20">
        {products.map((item) => (
          <div key={item.id} className=" relative even:translate-y-20 max-md:even:translate-y-10 w-full bg-amber-400 bg-opacity-10 backdrop-blur-md overflow-hidden  rounded-3xl border border-amber-500 border-opacity-50">
            <img
              className=" relative w-full rounded"
              src={item.image_url}
              alt="product1"
            />
            <div className=" text-white p-5 max-md:p-2">
              <p className="font-bold text-3xl text-amber-600 pb-5 max-md:text-xl max-md:pb-2">
                {item.title}
              </p>
              <hr className="pt-2" />
              <p className="text-base py-5 max-md:hidden">{item.description}</p>
              <button className="group relative h-10 w-40 overflow-hidden rounded-lg bg-white text-lg shadow max-md:h-8 max-md:w-20 max-md:text-xs m-2">
                <div className="absolute inset-0 w-3 bg-amber-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <a
                  className="relative text-amber-700 group-hover:text-white font-semibold "
                  href={`/Product${item.url}`}
                >
                  See More
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
