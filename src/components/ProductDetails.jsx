import React from 'react'
import { API } from './Api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cart/Cart'

const ProductDetails = ({product}) => {
  const dispatch = useDispatch()
  return (
    <div className="w-full mb-5 max-w-4xl py-2 m-auto md:flex bg-white shadow-xl">
    <div className="max-w-sm  overflow-hidden w-full p-5">
        <img className="hover:scale-75 duration-300" src={`${API}/uploads/${product.avatar}`}/>
    </div>
    <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
            {product.name}
          </h3>
          <p className=" text-slate-500  font-medium text-2xl">{product.category}</p>
          <p className=" font-bold md:text-2xl">
            <span className="text-red-500 ">₹</span>
            <span>{product.price}</span>
          </p>
          <div >
          <button onClick={(e)=>dispatch(addToCart(product))}  className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Add Cart</button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description : </p>
            <p>{product.description}</p>
          </div>
        </div>
    </div>
  )
}

export default ProductDetails