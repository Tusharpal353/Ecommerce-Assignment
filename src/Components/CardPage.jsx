
import React from 'react'
import { useParams } from 'react-router-dom'

import { products } from "../Assets/Constant"
import Header from './Header'
import { addItem } from '../Store/Slices/cartSlice'
import { useDispatch } from 'react-redux'

export default function CardPage() {
  const dispatch = useDispatch()
  
  function addItemToCart(product){
    dispatch(addItem(product))

  }

  const { id } = useParams()
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    return <div className="text-center py-10">Product not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="w-full h-96 overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="p-8 w-full max-w-2xl">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {product.category}
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                {product.title}
              </h1>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                <button onClick={()=>{addItemToCart(product)}} className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center">
                
                  Add to Cart
                </button>
              </div>
              <p className="mt-6 text-gray-600">{product.description}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}