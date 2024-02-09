import React from 'react'
import { Link } from 'react-router-dom';
import { API } from './Api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/Cart';

const Cards = ({p}) => {
  const dispatch = useDispatch()

  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col">
    <Link
      onClick={window.scrollTo({top: 0,behavior: "smooth"})}
      to={`/menu/${p._id}`}
      key={p._id}
    >
      <div className="h-28 flex flex-col justify-center items-center">
        <img src={`${API}/uploads/${p.avatar}`} alt={p.name} className="h-full" />
      </div>
      <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
        {p.name}
      </h3>
      <p className="text-slate-500 font-medium">{p.category}</p>
      <p className="font-bold">
        <span className="text-red-500">₹</span>
        <span>{p.price}</span>
      </p>
      <button
        className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 w-full"
        onClick={(e) => {
          e.preventDefault();
          dispatch(addToCart(p))
          
        }}
      >
        Add to Cart
      </button>
    </Link>
  </div>
  )
}

export default Cards