import FruitsImg from "/fruits-and-veggies.png";
import DairyImg from "/dairy-and-eggs.png";
import MeatImg from "/meat-and-seafood.png";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Fruits & Veggies",
    image: FruitsImg,
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    path: "/fruits-veggies",
  },
  {
    title: "Dairy & Eggs",
    image: DairyImg,
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    path: "/dairy-eggs",
  },
  {
    title: "Meat & SeaFood",
    image: MeatImg,
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    path: "/meat-seafood",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-14" id="category">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-orange-500">Shop</span> by Category
        </h2>
        <div className="w-40 h-1 mt-1 bg-orange-400 mx-auto mb-10 rounded-full"></div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-40 object-contain mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{cat.description}</p>
              <button
                className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium"
                onClick={() => navigate(cat.path)}
              >
                See All
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
