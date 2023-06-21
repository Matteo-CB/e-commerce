import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct } from "./menuSlice";

const Product = () => {
  const product = useSelector((state) => state.menu.product);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the setProduct action to set the product object in Redux state
    dispatch(setProduct());
  }, [dispatch]);

  const [currentImage, setCurrentImage] = useState(1);

  const handlePrevious = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 4 : prevImage - 1));
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === 4 ? 1 : prevImage + 1));
  };

  const handleImageClick = (index) => {
    const selectImages = document.querySelectorAll(".select-image");
    selectImages.forEach((image, i) => {
      if (i === index) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
      if(index === 0){
        setCurrentImage(1)
      }else if(index === 1){
        setCurrentImage(2)
      }else if(index === 2){
        setCurrentImage(3)
      }else if(index === 3){
        setCurrentImage(4)
      }
    });
  };

  // Make sure product is defined
  if (!product) {
    return null;
  }

  return (
    <>
      <article className="product">
        <div className="l">
          <img
            src="./images/icon-previous.svg"
            alt="avant"
            className="previous"
            onClick={handlePrevious}
          />
        </div>
        <img
          src={`./images/image-product-${currentImage}.jpg`}
          alt=""
          className="product-image"
        />
        <section className="product-img">
          <article
            className="select-image"
            onClick={() => handleImageClick(0)}
          >
            <img src="./images/image-product-1.jpg" alt="" />
          </article>
          <article
            className="select-image"
            onClick={() => handleImageClick(1)}
          >
            <img src="./images/image-product-2.jpg" alt="" />
          </article>
          <article
            className="select-image"
            onClick={() => handleImageClick(2)}
          >
            <img src="./images/image-product-3.jpg" alt="" />
          </article>
          <article
            className="select-image"
            onClick={() => handleImageClick(3)}
          >
            <img src="./images/image-product-4.jpg" alt="" />
          </article>
        </section>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <div className="r">
          <img
            src="./images/icon-next.svg"
            alt="suivant"
            className="next"
            onClick={handleNext}
          />
        </div>
      </article>
    </>
  );
};

export default Product;
