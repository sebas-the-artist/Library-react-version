import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/#" className="footer__link footer__link--1">
              Home
            </Link>
            <span className="footer__link no-cursor footer__link--2">
              About
            </span>
            <Link to="/cart" className="footer__link footer__link--3">
              Cart
            </Link>
            <Link to="/books" className="footer__link footer__link--4">
              Books
            </Link>
          </div>
          <div className="footer__copyright">©2004 Sebastian Martinez</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
