import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.items);
  // console.log(cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pt-20 h-screen">
      <h2 className="text-center text-2xl pb-6">Cart Items:</h2>
      <div className=" flex items-center gap-3 lg:flex-row flex-col justify-center">
        {cart.length === 0 ? (
          <>
            <p>No Items In Cart</p>
          </>
        ) : (
          cart.map((item) => (
            <>
              <div
                key={item.id}
                className="slide bg-blue-300 lg:w-auto w-[270px] rounded-xl flex items-center flex-col pt-3 "
              >
                <div className="w-fit p-2 rounded-full">
                  <img
                    src={item.img_url}
                    alt="image"
                    className="w-20 h-[150px]"
                  />
                </div>
                <div className="bg-white lg:w-auto w-[200px] m-1 mt-5 rounded-xl p-4">
                  <div className="flex justify-between gap-4">
                    <h2 className="font-medium text-[18px]">{item.name}</h2>
                    <span className="text-blue-500">
                      ₹{item.price * item.quantity}
                    </span>
                  </div>
                  <h3 className="font-normal text-[14px]">
                    {item.description}
                  </h3>
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="mt-4 p-2 text-[15px] rounded-xl border border-blue-400"
                    >
                      Remove
                    </button>
                    {/* <span className="flex gap-2 items-center">
                      <button className="p-[4px] rounded-full text-white text-lg font-bold bg-blue-500">+</button>
                      <span>{item.quantity}</span>
                      <button className="p-[4px] rounded-full text-white text-lg font-bold bg-blue-500">-</button>
                    </span> */}
                  </div>
                </div>
              </div>
            </>
          ))
        )}
      </div>
      <div className="flex items-center justify-center">
        {cart.length !== 0 && (
          <button
            onClick={handleClearCart}
            className="mt-4  p-2 text-[15px] rounded-xl border border-red-400"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
