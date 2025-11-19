import { useStore } from "../context/StoreContext";
import { FiHeart } from "react-icons/fi";
import { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";


const products = [
  { id: 1, name: "Strawberry", price: 4.0, img: "/strawberry.png" },
  { id: 2, name: "Milk", price: 3.0, img: "/milk.png" },
  { id: 3, name: "Eggs", price: 4.0, img: "/eggs.png" },
  { id: 4, name: "Grapes", price: 2.05, img: "/grapes.png" },
  { id: 5, name: "Banana", price: 2.0, img: "/banana.png" },
  { id: 6, name: "Kiwi", price: 3.05, img: "/kiwi.png" },
  { id: 7, name: "Cheese", price: 1.05, img: "/cheese.png" },
  { id: 8, name: "Beef", price: 3.0, img: "/beef.png" },
  { id: 9, name: "Butter", price: 3.0, img: "/butter.png" },
  { id: 10, name: "Yogurt", price: 3.0, img: "/yogurt.png" },
  { id: 11, name: "Broccoli", price: 3.0, img: "/broccoli.png" },
  { id: 12, name: "Tilapia-Fish", price: 3.0, img: "/tilapia.png" },
  { id: 13, name: "Tofu", price: 3.0, img: "/tofu.png" },
  { id: 14, name: "Eggplant", price: 3.0, img: "/eggplant.png" },
  { id: 15, name: "Kale", price: 3.0, img: "/kale.png" },
  { id: 16, name: "RiCotta Cheese", price: 3.0, img: "/ricotta-cheese.png" },
  { id: 17, name: "Shrimp", price: 3.0, img: "/shrimp.png" },
  { id: 18, name: "Slice-Cheese", price: 3.0, img: "/slice-cheese.png" },
  { id: 19, name: "Chicken-Breast", price: 3.0, img: "/chicken-breast.png" },
  { id: 20, name: "Cabbage", price: 3.0, img: "/cabbage.png" },
  { id: 21, name: "Capsicum", price: 3.0, img: "/capsicum.png" },
  { id: 22, name: "Pineapple", price: 3.0, img: "/pineapple.png" },
];

const Products = () => {
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

      <div className="bg-white min-h-screen mt-15">
        <h2 className="text-4xl font-bold text-center">
          <span className="text-orange-500">All</span>{" "}
          <span className="text-black">Products</span>
        </h2>
        <div className="w-45 h-1 mt-1 bg-orange-400 mx-auto mb-10 rounded-full"></div>

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
                className="cursor-pointer mt-5 bg-orange-600 text-white py-1 px-3 rounded-md hover:from-orange-500 hover:to-orange-700 transition"
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

export default Products;
