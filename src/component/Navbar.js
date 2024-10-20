import React from "react";
import { BiUser } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="d-flex">
        <div className="logo-container m-2 d-flex">
          <img src="./logo_png.png" alt="plat-logo" className="logo-img" />
          <h3 className="nameOfLogo">Chaperone</h3>
        </div>
        <ul className="d-flex nav-item-container">
          <li className="nav-items me-2">Home</li>
          <li className="nav-items me-2">Plants & Pots</li>
          <li className="nav-items me-2">Tools</li>
          <li className="nav-items me-2">Our Services</li>
          <li className="nav-items me-2">Blog</li>
          <li className="nav-items me-2">Our Story</li>
          <li className="nav-items me-2">FAQs</li>
        </ul>
        <div className="proflie-container">
          <BiUser className="user-icon" />
          <p>My Profile</p>
        </div>
        <div className="cart-container">
          <p className="item-number">3</p>
          <BsCart3 className="cart-icon" />
          <p>Cart</p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
