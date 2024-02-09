import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { TbMinus, TbPlus } from 'react-icons/tb'
import { decrementQuantity, deleteToCart, incrementQuantity } from '../redux/cart/Cart'
import { useDispatch } from 'react-redux'
import { API } from './Api'

const CartProduct = ({item}) => {
    const dispatch = useDispatch()
  return (
    <div key={item.id} className="w-full max-w-3xl my-2">
    <div className="bg-slate-200 p-2 flex gap-4  rounded border border-slate-300">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={`${API}/uploads/${item.avatar}`} className="h-28 w-40 object-cover " />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {item.name}
          </h3>
          <div
            className="cursor-pointer text-slate-700 hover:text-red-500"
            onClick={() => dispatch(deleteToCart(item))}
          >
            <AiFillDelete />
          </div>
        </div>
        <p className=" text-slate-500 font-medium ">{item.category}</p>
        <p className=" font-bold text-base">
          <span className="text-red-500 ">₹</span>
          <span>{item.price}</span>
        </p>
        <div className="flex justify-between ">
          <div className="flex gap-3 items-center">
            <button
              onClick={()=>dispatch(incrementQuantity(item))} 
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
            >
              <TbPlus />
            </button>
            <p className="font-semibold p-1">{item.quantity}</p>
            <button
              onClick={()=>dispatch(decrementQuantity(item))}
              className="bg-slate-300 py-1 mt-2 rounded hover:bg-slate-400 p-1 "
            >
              <TbMinus />
            </button>
          </div>
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total :</p>
            <p>
              <span className="text-red-500">₹</span>
              {item.price * item.quantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CartProduct