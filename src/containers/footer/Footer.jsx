import React from "react";
import "./footer.css";
import gpt3logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="project1__footer section__padding">
      <div className="project1__footer-heading">
        <h1 className="gradient__text">
          Are you interested and desparate about building great projects?
        </h1>
      </div>
      <div className="project1__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="project1__footer-links">
        <div className="project1__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p> All rights reserved. Copyrights@2023</p>
        </div>
        <div className="project1__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Overons</p>
          <p>APIs</p>
        </div>
        <div className="project1__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>

          <p>Contact</p>
        </div>
        <div className="project1__footer-links_div">
          <h4>Developers</h4>
          <p>Get in Touch</p>
          <p>Contact</p>
          <p>Team Up</p>
          <p>Collaboration</p>
        </div>
      </div>
      <div className="project1__footer-copyright">
        <p> © GPT3 - 2023</p>
      </div>
    </div>
  );
};

export default Footer;
