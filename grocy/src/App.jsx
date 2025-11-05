import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import CategorySection from "./components/CategorySection";
import FruitsVeggiesPage from "./components/FruitsVeggiesPage";
import DairyEggsPage from "./components/DairyEggsPage";
import MeatSeafoodPage from "./components/MeatSeaFoodPage";
import WishlistPage from "./components/WishlistPage";
import CartPage from "./components/CartPage";
import { StoreProvider } from "./context/StoreContext";
import OurValueSection from "./components/OurValueSection";
import PopularProducts from "./components/PopularProducts";
import DiscountBanner from "./components/DiscountBanner";
import OurProcess from "./components/OurProcess";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import Products from "./components/Products";
import AuthPage from "./components/AuthPage";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <CategorySection />
                <OurValueSection />
                <PopularProducts />
                <DiscountBanner />
                <OurProcess />
                <CustomerReviews />
              </>
            }
          />
          <Route path="/fruits-veggies" element={<FruitsVeggiesPage />} />
          <Route path="/dairy-eggs" element={<DairyEggsPage />} />
          <Route path="/meat-seafood" element={<MeatSeafoodPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
        <Footer />
      </Router>
    </StoreProvider>
  );
}

export default App;
