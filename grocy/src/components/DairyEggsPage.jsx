import { useStore } from "../context/StoreContext";
import { FiHeart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

const products = [
  { id: 1, name: "Butter", price: 3.0, img: "/butter.png" },
  { id: 2, name: "Cheese", price: 3.0, img: "/cheese.png" },
  { id: 3, name: "Eggs", price: 4.0, img: "/eggs.png" },
  { id: 4, name: "Milk", price: 2.05, img: "/milk.png" },
  { id: 5, name: "Tofu", price: 3.0, img: "/tofu.png" },
  { id: 6, name: "Yogurt", price: 2.05, img: "/yogurt.png" },
  { id: 7, name: "Slice-Cheese", price: 4.05, img: "/slice-cheese.png" },
  { id: 8, name: "Ricotta-Cheese", price: 3.05, img: "/ricotta-cheese.png" },
];

const DairyEggsPage = () => {
  const { addToWishlist, addToCart } = useStore();
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClick2 = () => {
    setShowPopup2(true);
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  useEffect(() => {
    if (showPopup2) {
      const timer = setTimeout(() => {
        setShowPopup2(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showPopup2]);

  return (
    <>
      {/* Popup for Wishlist */}
      {showPopup && (
        <div className=" flex gap-3 fixed top-10 right-5 bg-pink-500 text-white px-3 py-1 rounded-full shadow-md animate-bounce z-50">
          <AiFillHeart size={30} /> Added to Wishlist!
        </div>
      )}

      {/* Popup for Cart */}
      {showPopup2 && (
        <div className="flex gap-3 fixed top-10 right-5 bg-green-500 text-white px-3 py-1 rounded-full shadow-md animate-bounce z-50">
          <AiOutlineShoppingCart size={30} />
          Added to Cart!
        </div>
      )}

      <div className="bg-gray-100 min-h-screen">
        {/* Banner */}
        <div className="relative h-72 bg-black opacity-80 overflow-hidden">
          <img
            src="/dairy-banner.jpg"
            alt="Fruits & Veggies"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/20 flex justify-center items-center">
            <h1 className="bg-white/80 backdrop-blur-md text-gray-800 text-3xl md:text-4xl font-bold px-6 py-3 rounded-3xl">
              Dairy & Eggs
            </h1>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-5 px-3 py-10 md:gap-10 md:px-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-5 relative text-center"
            >
              <button
                onClick={() => {
                  addToWishlist(p);
                  handleClick();
                }}
                className="cursor-pointer absolute top-3 left-3 text-gray-400 hover:text-red-500"
              >
                <FiHeart size={25} />
              </button>
              <button
                onClick={() => {
                  addToCart(p);
                  handleClick2();
                }}
                className="cursor-pointer absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 text-white font-bold w-8 h-8 rounded"
              >
                +
              </button>

              <img
                src={p.img}
                alt={p.name}
                className="w-25 h-25 mt-15 md:w-45 md:h-45 md:object-contain md:mx-auto md:mb-4"
              />
              <h3 className="text-gray-800 font-semibold mt-5">{p.name}</h3>
              <p className="text-gray-600 font-medium">${p.price.toFixed(2)}</p>

              <button
                onClick={() => {
                  addToCart(p);
                  handleClick2();
                }}
                className="cursor-pointer mt-5 bg-orange-500 text-white py-1 px-3 rounded-md hover:from-orange-500 hover:to-orange-700 transition"
              >
                Shop Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DairyEggsPage;
