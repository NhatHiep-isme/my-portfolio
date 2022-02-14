import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaBlogger } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container" id="contact">
      <h1 className="title">MORE ABOUT ME</h1>
      <div className="contact-container">
        <a href="https://www.facebook.com/nhat.hiep.148">
          <FaFacebook className="icon" />
        </a>
        <a href="https://www.instagram.com/nhathiep_isme/">
          <FaInstagram className="icon" />
        </a>
        <a href="https://nhathiepisme.blogspot.com/">
          <FaBlogger className="icon" />
        </a>
        <p>Made by NhatHiepisme.</p>
      </div>
    </div>
  );
};

export default Footer;
