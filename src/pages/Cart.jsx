import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);

  const totalPrice = productCart.reduce((acc, product) => {
    return (acc += product.price * product.quantity);
  }, 0);

  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      <div className="my-4 flex gap-3">
        <div className="w-full max-w-3xl flex-col ">
          {productCart.map((item) => (
            <Cart item={item} />
          ))}
        </div>

        <div className="w-full max-w-md  ml-auto">
          <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
          <div className="flex w-full py-2 text-lg border-b">
            <p>Total Price</p>
            <p className="ml-auto w-32 font-bold">
              <span className="text-red-500">₹</span> {totalPrice}
            </p>
          </div>
          <button className="bg-red-500 w-full text-lg font-bold py-2 text-white">
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
