import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContaxtApi } from "./ContaxtApi";

const Modal = () => {
  const { setShowModal, showModal } = useContext(ContaxtApi);
  const navigate = useNavigate();
  const hadleHideModal = () => {
    setShowModal(false);
  };

  const handleContinue = () => {
    setShowModal(false);
    navigate("/");
  };

  if (!showModal) {
    return;
  } else {
    return (
      <div className="order-container">
        <div className="modal-container">
          <div className="close-button-container">
            <span className="close" onClick={hadleHideModal}>
              &times;
            </span>
          </div>
          <h1 className="text-center m-3" style={{ color: "#165315" }}>
            Your Cart
          </h1>

          <hr className="m-3" style={{ color: "#000" }} />
          <h2 className="text-center" style={{ color: "#165315" }}>
            Congratulations Order Placed!
          </h2>

          <div className="d-flex justify-content-center">
            <img
              src="/order_plant_img.png"
              alt="order-image"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <h2 className="text-center" style={{ color: "#165315" }}>
            Thank you for choosing Chaperone services. We will soon get in touch
            with you!
          </h2>
        </div>
        <div>Close</div>
        <div className="d-flex justify-content-center">
          <button
            style={{
              background: "#165315",
              color: "#fff",
              border: "none",
              width: "300px",
              padding: "10px",
            }}
            onClick={handleContinue}
          >
            CONTINUE SHOPPING
          </button>
        </div>
      </div>
    );
  }
};

export default Modal;
