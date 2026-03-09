import React from "react";
import { offerImages } from "../assets/images";

const ImageFlex = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4">
      
      <div className="relative max-w-5xl w-full">

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div className="aspect-square rounded-3xl overflow-hidden">
            <img
              src={offerImages[0]}
              alt="furniture"
              className="w-full h-full object-cover object-[center_80%] transition duration-500 hover:scale-110"
            />
          </div>

          <div className="aspect-square rounded-3xl overflow-hidden">
            <img
              src={offerImages[1]}
              alt="furniture"
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </div>

          <div className="sm:col-span-2 aspect-[2/1] rounded-3xl overflow-hidden">
            <img
              src={offerImages[2]}
              alt="furniture"
              className="w-full h-full object-cover object-[center_80%] transition duration-500 hover:scale-110"
            />
          </div>

        </div>

        {/* Offer Badge */}
        <div className="flex justify-center mt-8 sm:absolute sm:right-0 md:-right-14 sm:bottom-10">

          <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">

            {/* Rotating Text */}
            <div className="absolute w-full h-full animate-[spinSlow_20s_linear_infinite]">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>

                <text className="text-[8px] uppercase fill-white tracking-[2px] font-palanquin">
                  <textPath xlinkHref="#circlePath">
                    Modern Furniture Special Offer • Modern Furniture Special Offer •
                  </textPath>
                </text>

              </svg>
            </div>

            {/* Center Badge */}
            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 font-palanquin bg-black text-white rounded-full flex flex-col items-center justify-center shadow-xl">
              <p className="text-xl sm:text-2xl font-bold">30%</p>
              <p className="text-[10px] uppercase">OFF</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ImageFlex;