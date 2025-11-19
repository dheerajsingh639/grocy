import { useState } from "react";
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <nav className="bg-orange-600 px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div
        className="text-4xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Sita<span className="text-white">Ram</span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden font-sans text-xl font-semibold md:flex space-x-13 cursor-pointer">
        <span
          onClick={() => handleScroll("home")}
          className="text-white hover:text-black transition"
        >
          Home
        </span>

        <span
          onClick={() => handleScroll("category")}
          className="text-white hover:text-black transition"
        >
          Category
        </span>

        <span
          onClick={() => navigate("/products")}
          className="text-white hover:text-black transition"
        >
          Products
        </span>

        <span
          onClick={() => handleScroll("contact")}
          className="text-white hover:text-black transition"
        >
          Contact Us
        </span>

        <span
          onClick={() => navigate("/wishlist")}
          className="text-white text-3xl"
        >
          <FaHeart />
        </span>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="text-black bg-gray-100 border-2 border-white rounded-full px-4 py-1.5 pr-10 focus:outline-none text-md"
          />
          <button className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 p-1 rounded-full text-black">
            <FiSearch size={20} />
          </button>
        </div>

        <FiLogIn
          className="text-xl cursor-pointer text-white hover:text-black"
          onClick={() => navigate("/login")}
        />

        {/* Cart */}
        <FiShoppingBag
          className="hidden text-xl cursor-pointer text-white hover:text-black lg:block"
          onClick={() => navigate("/cart")}
        />

        {/* Hamburger Menu (Mobile Only) */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 md:hidden flex flex-col space-y-4 px-6 py-4 z-10">
          <span className="flex gap-10 text-gray-900">
            <FaHeart
              className="text-2xl"
              onClick={() => navigate("/wishlist")}
            />
            <FaShoppingCart
              className="text-2xl"
              onClick={() => navigate("/cart")}
            />
          </span>

          <span
            onClick={() => {
              handleScroll("home");
              setIsMobileMenuOpen(false);
            }}
            className="text-orange-500 font-medium cursor-pointer"
          >
            Home
          </span>

          <span
            onClick={() => {
              handleScroll("category");
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-700 hover:text-orange-500 transition cursor-pointer"
          >
            Category
          </span>

          <span
            onClick={() => {
              navigate("/products");
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-700 hover:text-orange-500 transition cursor-pointer"
          >
            Products
          </span>

          <span
            onClick={() => {
              handleScroll("contact");
              setIsMobileMenuOpen(false);
            }}
            className="text-gray-700 hover:text-orange-500 transition cursor-pointer"
          >
            Contact Us
          </span>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-orange-300 rounded-full px-4 py-1.5 pr-10 focus:outline-none text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-orange-500 p-1 rounded-full text-white">
              <FiSearch size={18} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
