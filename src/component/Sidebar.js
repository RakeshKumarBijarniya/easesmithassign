import React from "react";
import { GoPlus } from "react-icons/go";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-items-container">
        <h6>Filter</h6>
        <h6>CLEAR ALL</h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Type Of Plants</h6>

        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Price</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Nursery</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Ideal Plants Location</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Indoor/Outdoor</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Maintenance</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Plant Size</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Water Schedule</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Color</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Seasonal</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
      <div className="sidebar-items-container">
        <h6>Light Efficient</h6>
        <h6>
          <GoPlus />
        </h6>
      </div>
      <hr className="m-2" style={{ fontSize: "20px" }} />
    </>
  );
};

export default Sidebar;
