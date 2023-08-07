import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";
import house from "bootstrap-icons/icons/house-door.svg";

function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted" style={{ "text-align": "left" }}>
          ©2023 MECHANICAL ENGINEERING CHUNG YUAN CHRISTIAN UNIVERSITY. ALL
          RIGHTS RESSERVED.
        </p>
        {/* <a
          href="/"
          class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        ></a> */}

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              <img src={house} alt="house" />
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
