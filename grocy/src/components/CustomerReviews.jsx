import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Blogger",
    rating: 3,
    image: "/customer2.jpg",
    text: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Chef",
    rating: 5,
    image: "/customer4.jpg",
    text: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
  },
  {
    id: 3,
    name: "Alya Zahra",
    role: "Model",
    rating: 3,
    image: "/customer3.jpg",
    text: "Shopping online with FreshBasket has saved me so much time. I trust them for my family weekly groceries—always fresh, affordable, and reliable.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-semibold mb-12">
          <span className="text-orange-500">Customers </span>
          Reviews
          <div className="w-40 h-1 bg-orange-400 mx-auto mt-2"></div>
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-200 p-8 rounded-lg shadow-sm text-left"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-orange-400 mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-2xl">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                    <div className="flex mt-1">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <FaStar
                          key={index}
                          className="text-yellow-500 text-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-6 text-sm">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
