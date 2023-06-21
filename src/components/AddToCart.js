import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./menuSlice";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(quantity));
    setQuantity(0);
  };

  return (
    <article className="addToCart">
      <div className="plusOrMinus">
        <img
          src="./images/icon-minus.svg"
          alt="minus"
          onClick={handleDecrement}
        />
        <strong className="how">{quantity}</strong>
        <img
          src="./images/icon-plus.svg"
          alt="plus"
          onClick={handleIncrement}
        />
      </div>
      <button onClick={handleAddToCart}>
        <span>
          <img src="./images/cart.svg" alt="cart" className="cart-btn" /> Add to
          Cart
        </span>
      </button>
    </article>
  );
};

export default AddToCart;
