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
  </div>
  <div className=" m-10  ">
    <ImageSlider folderName={product.folderName} />
  </div>
</div>

  );
};

export default ProductDetails;
