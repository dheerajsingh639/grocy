import React from "react";
import discountImage from "/fresh-fruits.png";

const DiscountBanner = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
          <div className="text-orange-500 text-[95px] font-bold leading-none md:mt-15 md:text-left">
            <div className="rotate-0 md:rotate-270">20%</div>
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">
              First Order <br />
              Discount!
            </h2>
            <p className="text-gray-700 max-w-md mb-4">
              Enjoy an exclusive first order discount on our grocery website!
              Shop fresh essentials and save big on your first purchase. Fast
              delivery and quality guaranteed.
            </p>
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded">
              Get a Discount
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 w-full md:w-2/5">
          <img
            src={discountImage}
            alt="Fruit Discount"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;
