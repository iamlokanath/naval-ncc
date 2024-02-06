import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>GCEKNAVALNCC</h6>
              <p className="text-justify">
                GCEK Naval NCC in Bhawanipatna fosters leadership and discipline
                among students through naval training. It instills values of
                teamwork and patriotism, preparing them for future challenges
                with pride and honor.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  {/* <a href="/">Home</a> */}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {/* <a href="/about">About Us</a> */}
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  {/* <a href="/activities">Activities</a> */}
                  <Link to="/activities">Activities</Link>
                </li>
                <li>
                  {/* <a href="/acheiviments">Acheiviments</a> */}
                  <Link to="/acheiviments">Acheiviments</Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="https://indiancc.nic.in/" target="ncc">
                    NCC INDIA
                  </a>
                </li>
                <li>
                  <a href="https://nccorissa.org/" target="odisha">
                    NCC Odisha
                  </a>
                </li>
                <li>
                  <a
                    href="https://indiancc.nic.in/dg-ncc-lt-gen-gurbirpal-singh/"
                    target="dg"
                  >
                    DG NCC
                  </a>
                </li>
                <li>
                  <a href="https://gcekbpatna.ac.in/" target="GCEK">
                    GCEK
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy;GCEKNAVALNCC2023 All Rights Reserved, website is
                designed and developed by{" "}
                <a href="https://lokanath.netlify.app/" target="anotherpage">
                  Lokanath Panda
                </a>
                .
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a
                    className="dribbble"
                    href="https://www.instagram.com/gceknavalncc/"
                    target="anotherpage"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/profile.php?id=100085943233900"
                    target="anotherpage"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
