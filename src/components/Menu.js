import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "./menuSlice";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
      <img src="./images/icon-close.svg" alt="" onClick={handleMenuClick} />
      <div className="menu-content">
        <h4>Collections</h4>
        <h4>Men</h4>
        <h4>Women</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <NavLink to={'/legal'}>

        <h4>Legal</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
