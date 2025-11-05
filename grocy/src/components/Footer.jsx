import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gray-50 text-gray-800 py-12 px-10 text-2xl"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold">
            Sita<span className="text-orange-500">Ram</span>
          </h2>
          <p className="mt-2 text-sm">
            Bred for a high content of beneficial substances.
            <br />
            Our products are all fresh and healthy.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            2025 © All Rights Reserved
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ'S
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h3 className="font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">
            Questions or Feedback?
            <br />
            We'd love to hear from you.
          </p>
          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-l-md text-sm border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md"
            >
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
