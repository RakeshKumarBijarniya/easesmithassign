import React, { useContext } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ContaxtApi } from "./ContaxtApi";

const products = [
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_1.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_2.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_3.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_1.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_2.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_3.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_1.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_2.jpg",
    liked: false,
  },
  {
    name: "Monsterra",
    desc: "Indoor Plant, Low Maintenance",
    image: "plant_pic_3.jpg",
    liked: false,
  },
];

const ProductCart = () => {
  const { handleShowModal } = useContext(ContaxtApi);
  return (
    <div>
      <div className="d-flex">
        <p className="me-2">300 products</p>
        <button className="btn btn-success">SORT BY</button>
      </div>
      <div className="product-show-container">
        {products.map((item, key) => (
          <div key={key} className="product-item-container">
            <div className="pro-item-container">
              <div style={{ border: "1px solid #000" }}>
                <img
                  src={`${item.image}`}
                  alt={`${item.image}`}
                  style={{ width: "250px", height: "240px" }}
                />
                <br />
                <Link to={`/thankyouPage/${item.name}`}>
                  <button
                    style={{
                      width: "280px",
                      border: "none",
                      background: "green",
                      color: "#fff",
                    }}
                  >
                    View Product
                  </button>
                </Link>
              </div>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <img
                src="/star_img.png"
                alt="star-image"
                style={{ width: "130px", height: "25px", marginRight: "5px" }}
              />
              <span>4.9</span>
              <div className="price-container">
                <strike className="me-3">
                  <MdOutlineCurrencyRupee /> <span>359</span>
                </strike>

                <FaRupeeSign />
                <span style={{ fontWeight: "bold" }}>299</span>
              </div>
              <div className="button-contaienr">
                <button
                  className="p-2 me-4"
                  style={{
                    background: "#165315",
                    border: "none",
                    width: "150px",
                    height: "50px",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                  onClick={handleShowModal}
                >
                  <FiMinus style={{ fontSize: "25px" }} />
                  Add To cart
                  <GoPlus style={{ fontSize: "25px" }} />
                </button>
                <button
                  className="p-1 "
                  style={{
                    background: "transparent",
                    width: "100px",
                    height: "50px",
                    color: "#165315",
                    border: "1px solid #165315",
                    borderRadius: "10px",
                  }}
                >
                  Buy on Rent
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          style={{
            background: "#165315",
            width: "200px",
            borderRadius: "10px",
            color: "#fff",
            padding: "10px",
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
