import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { GoSearch } from "react-icons/go";
import Nursery from "./Nursery";
import Sidebar from "./Sidebar";
import ProductCart from "./ProductCart";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="search-container text-center">
        <GoSearch className="search-icon" />
        <input
          type="text"
          placeholder="   Search Plant"
          className="search-place"
        />
        <img
          src="./plant_search_img.png"
          style={{ width: "30px", height: "30px" }}
          className="search-plant-img"
          alt="plant-search"
        />
      </div>
      <div className="button-container m-3">
        <button className=" plant-button">Plants</button>
        <button className="pots-button ">Pots</button>
      </div>
      <div className="desc-container m-3">
        <p style={{ fontSize: "20px" }}>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
      </div>
      <div className="nursery-container m-3">
        <h2 style={{ color: "#000" }}>Nursery</h2>

        <Nursery />
      </div>
      <section id="mid-section" className="d-flex">
        <div className="sidebar-container m-3">
          <Sidebar />
        </div>
        <div className="product-cart-container m-3">
          <ProductCart />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
