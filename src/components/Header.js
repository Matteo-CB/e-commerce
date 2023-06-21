import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu, toggleCart } from "./menuSlice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const cartOpen = useSelector((state) => state.menu.cartOpen);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-100px";
    }
  };

  useEffect(() => {
    if (menuOpen || cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen, cartOpen]);

  return (
    <header>
      <div className="header-1">
        <img
          src="./images/icon-menu.svg"
          alt="icon menu"
          onClick={handleMenuClick}
          className="icon-menu"
        />
        <img src="./images/logo.svg" alt="logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
          <NavLink to={'/legal'}>

        <li>Legal</li>
        </NavLink>
        </ul>
      </nav>
      <div className="header-2">
        <img
          className="cartIcon"
          src="./images/icon-cart.svg"
          alt="icon cart"
          onClick={handleCartClick}
        />
        <img
          src="./images/profile.svg"
          width={20}
          alt="icon cart"
          className="profil"
        />
      </div>
    </header>
  );
};

export default Header;
