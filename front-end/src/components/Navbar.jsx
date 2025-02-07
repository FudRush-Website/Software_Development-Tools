import { useState } from "react";
import { NavLink, Link } from "react-router-dom"; // Use NavLink for active link styling
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const currentUser = false;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <h1 className="text-4xl text-primary font-bold">FudRush.</h1>
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* Center */}
        <div className="items-center">
          <ul className="flex items-center list-none gap-12 text-2xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `hover:text-orange-500 transition-colors duration-300 ${
                    isActive
                      ? "border-b-2 border-orange-500"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  `hover:text-orange-500 transition-colors duration-300 ${
                    isActive
                      ? "border-b-2 border-orange-500"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                Order
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-orange-500 transition-colors duration-300 ${
                    isActive
                      ? "border-b-2 border-orange-500"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-orange-500 transition-colors duration-300 ${
                    isActive
                      ? "border-b-2 border-orange-500"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  `hover:text-orange-500 transition-colors duration-300 ${
                    isActive
                      ? "border-b-2 border-orange-500"
                      : "border-b-2 border-transparent"
                  }`
                }
              >
                Feedback
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser && (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* Show dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm hover:bg-gray-100 ${
                                isActive ? "text-orange-500" : "text-gray-700"
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
          <Link to="/login">
            <button>
              <FaUser className="text-2xl" />
            </button>
          </Link>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
