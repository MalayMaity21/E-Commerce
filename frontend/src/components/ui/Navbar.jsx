import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-8 bg-white shadow-md p-4 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo */}
      <Link className="text-xl font-bold text-gray-800">Trendify</Link>

      {/* Middle: Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-20 sm:w-40 md:w-20 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Right: Profile, Wishlist, Cart */}
      <ul className="flex items-center space-x-4">
        <li>
          <Link>
            <FaUser className="text-gray-700 text-xl cursor-pointer hover:text-blue-500" />
          </Link>
        </li>

        <li>
          <Link>
            <FaHeart className="text-gray-700 text-xl cursor-pointer hover:text-red-500" />
          </Link>
        </li>
        <li>
          <Link>
            <FaShoppingCart className="text-gray-700 text-xl cursor-pointer hover:text-green-500" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
