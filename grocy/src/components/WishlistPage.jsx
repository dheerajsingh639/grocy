import { useState } from "react";
import { useStore } from "../context/StoreContext";

const WishlistPage = () => {
  const { wishlist, addToCart, removeFromWishlist } = useStore();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedItems((prev) => [...prev, item.id]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Wishlist ❤️</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-xl shadow-md p-3 flex flex-col items-center"
            >
              <img src={item.img} alt={item.name} className="w-30 h-30 mb-3" />
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>

              <button
                onClick={() => handleAddToCart(item)}
                disabled={addedItems.includes(item.id)}
                className={`cursor-pointer mt-3 px-2 rounded text-white ${
                  addedItems.includes(item.id)
                    ? "bg-green-600"
                    : "bg-orange-500"
                }`}
              >
                {addedItems.includes(item.id) ? "Added!" : "Add to Cart"}
              </button>

              <button
                onClick={() => removeFromWishlist(item)}
                className="cursor-pointer mt-3 bg-orange-500 px-2 py-1 text-white rounded text-sm hover:bg-orange-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
