import React from 'react';
import cart from "../Assets/cart.svg";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-white shadow-md py-8 px-8">
      <Link to="/" className="text-3xl font-serif font-bold text-gray-800 hover:text-red-600 transition duration-200">
        Ecommerce
      </Link>

      <div className="relative">
        <Link to="/cart" className="flex items-center">
          {/* Cart icon */}
          <img src={cart} alt="Cart" className="w-8 h-8 mr-2" />

          {/* Cart item count */}
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 py-1 text-xs font-semibold">
            {cartItems.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
