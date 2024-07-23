import React, { useEffect } from "react";
import useScrollAnimation from "../animations/useScrollAnimation";

const Export = () => {
  useScrollAnimation("rise-fade");

  return (
    <div className="px-40 max-md:px-5 flex flex-col max-md:mt-10  ">
      <div className="bg-slate-400 bg-opacity-15 backdrop-blur-md border border-opacity-50 border-slate-400 p-8 rounded-3xl relative md:w-2/3  max-md:my-5 my-14 self-start  rise-fade  ">
        <p className="text-amber-600 font-bold text-3xl pb-5">
          Domestic and International Reach
        </p>
        <p className=" text-base">
          
          International Reach Our company reaches homes and sacred spaces
          domestically and internationally, offering exquisite craftsmanship and
          timeless beauty globally. We bring cultural heritage and spiritual
          reverence through our diverse range of handcrafted creations
          worldwide.
        </p>
      </div>
      <div className="bg-slate-400 bg-opacity-15 backdrop-blur-md border border-opacity-50 border-slate-400 p-8 rounded-3xl  md:w-2/3 max-md:my-5 my-14 self-end  rise-fade">
        <p className="text-amber-600 font-bold text-3xl pb-5">
          
          Export Capabilities
        </p>
        <p className="text-base">
          
          Our handicraft statue and items company excels in exporting exquisite
          creations worldwide, showcasing impeccable craftsmanship and cultural
          richness. We deliver quality, tradition, and artistry to global
          markets with a commitment to excellence.
        </p>
      </div>
    </div>
  );
};

export default Export;
