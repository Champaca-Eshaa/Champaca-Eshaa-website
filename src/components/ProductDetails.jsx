import React from "react";
import { useParams } from "react-router-dom";
import { productDetails } from "../constants";
import ImageSlider from "./ImageSlider";

const ProductDetails = () => {
  const { productId } = useParams();

  const product = productDetails[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-20 grid grid-cols-1 md:grid-cols-2 ">
  <div className="flex flex-col justify-center m-10 lg:pl-10 xlg:pl-15 space-y-10 text-lg">
    <h1 className="text-amber-600 font-bold text-4xl">{product.title}</h1>
    <p>{product.description}</p>
    <button className="group relative h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow max-md:h-8 max-md:w-32 max-md:text-xs m-2">
      <div className="absolute inset-0 w-3 bg-amber-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <a
        className="relative text-amber-700 group-hover:text-white font-semibold"
        href="/assets/pr_catalog.pdf"
        download="Product_Catalog.pdf" // Set the filename for download
        target="_blank"
        rel="noopener noreferrer"
      >
        Product catalog
      </a>
    </button>
  </div>
  <div className=" m-10  ">
    <ImageSlider folderName={product.folderName} />
    {/* <ImageSlider folderName={"brass-items"} /> */}
  </div>
</div>

  );
};

export default ProductDetails;
