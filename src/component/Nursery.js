import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { MdArrowBackIos } from "react-icons/md";
const images = [
  "nursery_img_1.png",
  "nursery_img_2.png",
  "nursery_img_3.png",
  "nursery_img_4.png",
  "nursery_img_5.png",
  "nursery_img_6.png",
  "nursery_img_7.png",
  "nursery_img_8.png",
  "nursery_img_9.png",
  "nursery_img_10.png",
];
const Nursery = () => {
  const [showImage, setShowImage] = useState(0);
  const totalShowImage = 6;

  const handlePaginationInc = () => {
    if (showImage + totalShowImage >= images.length - totalShowImage) {
      let newContImage = images.length - totalShowImage;
      setShowImage(newContImage);
    } else {
      let newContImage = totalShowImage + showImage;
      setShowImage(newContImage);
    }
  };

  const handlePaginationDesc = () => {
    if (showImage < totalShowImage) {
      setShowImage(0);
    } else {
      setShowImage(showImage - totalShowImage);
    }
  };
  const displayImage = images.slice(showImage, totalShowImage + showImage);

  return (
    <>
      <div className="d-flex" style={{ width: "165px", height: "165px" }}>
        {displayImage.map((item, key) => (
          <div key={key}>
            <img
              style={{
                width: "140px",
                height: "140px",
                margin: "10px 40px",
                WebkitBorderRadius: "50%",
              }}
              src={`/${item}`}
              alt={`${item}`}
            />
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum </p>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-secondary pagination-button"
          onClick={handlePaginationInc}
        >
          <GrFormNext />
        </button>
      </div>
      <div className="back-button-container">
        <button
          className="btn btn-secondary pagination-button"
          onClick={handlePaginationDesc}
        >
          <MdArrowBackIos />
        </button>
      </div>
    </>
  );
};

export default Nursery;
