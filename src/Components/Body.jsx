
import React from "react";
import Card from "./Card";
import Header from "./Header";
import { products } from "../Assets/Constant";

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6 justify-items-center">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;