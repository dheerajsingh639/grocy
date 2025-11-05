import BasketImg from "/grocery.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-10 mt-8" id="hero">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Text Content */}
        <div className="max-w-xl">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Export Best Quality...
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Tasty Organic <br />
            <span className="text-orange-600">Fruits</span> &{" "}
            <span className="text-orange-600">Veggies</span> <br />
            In Your City
          </h1>

          <p className="mt-4 text-gray-600">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>

          <button
            className="cursor-pointer mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow-md transition"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={BasketImg}
            alt="Basket of fruits and vegetables"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
