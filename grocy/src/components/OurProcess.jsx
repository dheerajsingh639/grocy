import React from "react";
import { FaLeaf, FaIndustry, FaAward, FaTruck } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Sourcing",
    description: "It is a long established fact that a reader",
    icon: <FaLeaf className="text-white text-xl" />,
  },
  {
    id: 2,
    title: "Manufacturing",
    description: "It is a long established fact that a reader",
    icon: <FaIndustry className="text-white text-xl" />,
  },
  {
    id: 3,
    title: "Quality Control",
    description: "It is a long established fact that a reader",
    icon: <FaAward className="text-white text-xl" />,
  },
  {
    id: 4,
    title: "Logistics",
    description: "It is a long established fact that a reader",
    icon: <FaTruck className="text-white text-xl" />,
  },
];

const OurProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold">
          <span className="text-orange-500 font-bold">Our </span>
          Process
        </h2>
        <div className="w-35 h-1 mt-1 bg-orange-400 mx-auto mb-10 rounded-full"></div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-orange-500 rounded-full p-6 mb-6">
                {step.icon}
              </div>
              <h3 className="font-semibold text-2xl text-orange-500">
                {step.title}
              </h3>
              <p className="text-black text-md mt-3">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
