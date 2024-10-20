import React from "react";
import { Link, useParams } from "react-router-dom";

const Thankyou = () => {
  const { name } = useParams();
  return (
    <div
      className="thank-container d-flex flex-column justify-content-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <h2 className="text-center" style={{ color: "#165315" }}>
        Thank you for your interest in {name}
      </h2>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <button
            style={{
              background: "#165315",
              color: "#fff",
              border: "none",
              width: "300px",
              padding: "10px",
            }}
          >
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Thankyou;
