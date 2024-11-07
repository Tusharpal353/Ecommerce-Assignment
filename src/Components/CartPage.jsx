import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeItem, clearCart, updateQuantity } from "../Store/Slices/cartSlice";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import Header from "./Header";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  //to  Handle quantity update
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  //to  Handle removing item from the cart
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  
  const totalPrice = cartItems.reduce(
    (total, item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity ;
      return total + price * quantity;
    },
    0
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Header/>
      <h1 className="text-3xl font-bold mb-8 pt-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg shadow"
              >
                <div className="flex-1 text-center sm:text-left mb-4 sm:mb-0">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-semibold w-24 text-right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-100 rounded"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <button
              onClick={handleClearCart}
              className="mb-4 sm:mb-0 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Remove All
            </button>
            <div className="text-xl font-bold">
              Total: ${totalPrice.toFixed(2)}
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              onClick={() => console.log("Checkout clicked")}
              className="px-8 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center mx-auto"
            >
              <ShoppingBag className="mr-2" />
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
