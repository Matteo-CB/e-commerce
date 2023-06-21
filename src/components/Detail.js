import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "./menuSlice";

const Detail = () => {
  const product = useSelector((state) => state.menu.product);
  const currentProduct = useSelector((state) => state.menu.currentProduct);
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Dispatch the setProduct action to set the product object in Redux state
    dispatch(setProduct());

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  return (
    <article className="detail">
      <h3>{product && product[currentProduct].company}</h3>
      <h1>{product && product[currentProduct].title}</h1>
      <p>{product && product[currentProduct].paragraph}</p>
      {windowWidth > 1000 ? (
        <>
          <div className="price">
            <strong className="current-price">${product && product[currentProduct].price}.00</strong>
            <strong className="promo">{product && product[currentProduct].promo}</strong>
          </div>
          <strike>{product && product[currentProduct].oldprice}</strike>
        </>
      ) : (
        <div className="price">
          <strong className="current-price">${product && product[currentProduct].price}.00</strong>
          <strong className="promo">{product && product[currentProduct].promo}</strong>
          <strike>{product && product[currentProduct].oldprice}</strike>
        </div>
      )}
      {windowWidth <= 1000 && <strike className='entro'>{product && product[currentProduct].oldprice}</strike>}
    </article>
  );
};

export default Detail;
