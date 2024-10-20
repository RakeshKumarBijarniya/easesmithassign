import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-container p-2 ">
      <div className="d-flex">
        <div className="first-footer-section m-3">
          <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necesbus enim
          </p>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="p-2"
          />
          <br />
          <button
            style={{
              background: "#165315",
              width: "200px",
              borderRadius: "10px",
              color: "#fff",
              padding: "10px",
              marginTop: "10px",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
        <div className="aboutus-contianer mid-main-contianer">
          <h4>ABOUT US</h4>
          <p>Our Story</p>
          <p>Blogs</p>
          <p>careers</p>
          <p>Contact Us</p>
          <p>Help & Support</p>
        </div>
        <div className="our-contianer mid-main-contianer">
          <h4>OUR SERVICES</h4>
          <p>Book Maali</p>
          <p>Plant Day Care</p>
          <p>Rent Plants</p>
          <p>Plants & Pots</p>
          <p>Gardening Tools</p>
        </div>
        <div className="useful-contianer mid-main-contianer">
          <h4> USEFUL LINKS</h4>
          <p>My Account</p>
          <p>Orders & Returns</p>
          <p>Track Order</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Return,Refund & Replacement Policy</p>
        </div>
        <div className="useful-contianer mid-main-contianer">
          <h4> GET IN TOUCH</h4>
          <p>Address: F-262 first Floor</p>
          <p>Sushant Lok Phase-lll</p>
          <p>Sector-57,Gurgaon, Haryana, India 122003</p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>
      <div className="bottom-container">
        <h3>CHAPERONE</h3>
        <p>
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <h3>Follow us on</h3>
        <div className="icon-container">
          <IoLogoInstagram style={{ fontSize: "30px", margin: "10px" }} />
          <FaFacebook style={{ fontSize: "30px", margin: "10px" }} />

          <IoLogoYoutube style={{ fontSize: "30px", margin: "10px" }} />

          <FaLinkedin style={{ fontSize: "30px", margin: "10px" }} />
          <FaSquareThreads style={{ fontSize: "30px", margin: "10px" }} />
        </div>
      </div>
      <hr />
      <div className="copy-continer m-3">
        <span>© 2023, chaperone.com All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
