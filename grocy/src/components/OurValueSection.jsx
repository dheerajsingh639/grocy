import React from "react";
import { FaHeart, FaShieldAlt, FaLeaf } from "react-icons/fa";
import { GiSprout } from "react-icons/gi";
import basketImage from "/basket-full-vegetables.png";

const values = [
  {
    title: "Trust",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaHeart className="text-white text-xl" />,
  },
  {
    title: "Food Safety",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaShieldAlt className="text-white text-xl" />,
  },
  {
    title: "Always Fresh",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <FaLeaf className="text-white text-xl" />,
  },
  {
    title: "100% Organic",
    description:
      "It is a long established fact that a reader will be distracted by the readable.",
    icon: <GiSprout className="text-white text-xl" />,
  },
];

const OurValueSection = () => {
  return (
    <section className="py-16 bg-white text-center relative">
      <h2 className="text-4xl font-bold">
        <span className="text-orange-500">Our</span>{" "}
        <span className="text-black">Value</span>
      </h2>
      <div className="w-40 h-1 mt-1 bg-orange-400 mx-auto mb-10 rounded-full"></div>

      <div className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 items-center justify-items-center px-4">
        {/* Top Left */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-orange-500 p-3 rounded-full">
              {values[0].icon}
            </div>
          </div>
          <h3 className="font-bold text-lg">{values[0].title}</h3>
          <p className="text-sm text-gray-600 mt-2">{values[0].description}</p>
        </div>

        {/* Top Right */}
        <div className="text-center max-w-xs">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-orange-500 p-3 rounded-full">
              {values[1].icon}
            </div>
          </div>
          <h3 className="font-bold text-lg">{values[1].title}</h3>
          <p className="text-sm text-gray-600 mt-2">{values[1].description}</p>
        </div>

        {/* Center Image */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <img
            src={basketImage}
            alt="Basket of vegetables"
            className="w-60 mb-10 sm:w-120 sm:mb-15"
          />
        </div>

        {/* Bottom Left */}
        <div className="text-center max-w-xs mt-56 sm:mt-72">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-orange-500 p-3 rounded-full">
              {values[2].icon}
            </div>
          </div>
          <h3 className="font-bold text-lg">{values[2].title}</h3>
          <p className="text-sm text-gray-600 mt-2">{values[2].description}</p>
        </div>

        {/* Bottom Right */}
        <div className="text-center max-w-xs sm:mt-72">
          <div className="flex justify-center items-center mb-4">
            <div className="bg-orange-500 p-3 rounded-full">
              {values[3].icon}
            </div>
          </div>
          <h3 className="font-bold text-lg">{values[3].title}</h3>
          <p className="text-sm text-gray-600 mt-2">{values[3].description}</p>
        </div>
      </div>
    </section>
  );
};

export default OurValueSection;
