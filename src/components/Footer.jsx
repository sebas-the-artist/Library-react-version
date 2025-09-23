import React from "react";
import Logo from "../assets/Library.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <a href="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </a>
          <div className="footer__list">
            <a href="/" className="footer__link footer__link--1">
              Home
            </a>
            <span className="footer__link no-cursor footer__link--2">
              About
            </span>
            <a href="/cart" className="footer__link footer__link--3">
              Cart
            </a>
            <a href="/books" className="footer__link footer__link--4">
              Books
            </a>
          </div>
          <div className="footer__copyright">©2004 Sebastian Martinez</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
