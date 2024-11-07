
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../Store/Slices/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch()
  
  function addItemToCart(product){
    dispatch(addItem(product))
  }

  if (!product) {
    return <div>No product data available</div>;
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
      <Link to={`/product/${product.id}`} className="block">
        <img
          className="w-full h-64 object-contain p-4"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="p-5">
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 truncate mb-2">
          {product.title}
        </h5>
        <div className="flex flex-col space-y-3">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                addItemToCart(product)
              }}
              className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center transition-colors duration-200"
            >
              Add to cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="flex-1 text-blue-700 bg-white border border-blue-700 hover:bg-blue-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;