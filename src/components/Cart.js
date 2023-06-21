import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, setCartQuantity } from './menuSlice';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength - 3) + '...';
};

const Cart = () => {
  const cartOpen = useSelector((state) => state.menu.cartOpen);
  const currentProduct = useSelector((state) => state.menu.currentProduct);
  const cartQuantity = useSelector((state) => state.menu.cartQuantity);
  const price = useSelector((state) => state.menu.product);
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  const handleDeleteClick = () => {
    dispatch(setCartQuantity(0));
  };

  return (
    <aside className={`${cartOpen ? 'aside' : ''}`}>
      <h4 className="cart-title">Cart</h4>
      {cartQuantity === 0 ? (
        <div className="empty-container">
          <h4 className="empty">Your cart is empty.</h4>
        </div>
      ) : (
        <div className="cart-container">
          <div className="grid-cart">
            <img src="./images/image-product-1.jpg" alt="" className="img-cart" />
            <div className="text-card">
              <p className="title-product">
                <span>{truncateText('Fall Limited Edition Sneakers', 20)}</span>
              </p>
              <p>
                <span>$125.00 x {cartQuantity} </span>${price && price[currentProduct].price * cartQuantity}
              </p>
            </div>
            <img
              src="./images/icon-delete.svg"
              alt=""
              className="delete"
              onClick={handleDeleteClick}
            />
          </div>
          <button>Checkout</button>
        </div>
      )}
    </aside>
  );
};

export default Cart;