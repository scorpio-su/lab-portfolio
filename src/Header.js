import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import google from "bootstrap-icons/icons/google.svg";
// import Sidebar from "./Sidebar";

function Header() {
  return (
    <header class="site-header sticky-top py-1 bg-info">
      <nav class="container d-flex flex-column flex-md-row justify-content-between text-center">
        {/* <button onClick={Sidebar}> */}
        <a class="py-2" aria-label="Product" href="https://google.com/">
          <img
            src={google}
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="d-block mx-auto"
            role="img"
            viewBox="0 0 24 24"
          />
          <title>614-lab</title>{" "}
        </a>
        {/* </button>{" "} */}
        <Link class="py-2 d-none d-md-inline-block" to="/member">
          實驗室成員
        </Link>{" "}
        {/* <Link class="py-2 d-none d-md-inline-block" to="/">
          研究方向
        </Link> */}
        {/* <Link class="py-2 d-none d-md-inline-block" to="/project">
          研究計畫
        </Link> */}
        <Link class="py-2 d-none d-md-inline-block" to="/publish">
          論文發表
        </Link>
        {/* <Link class="py-2 d-none d-md-inline-block" to="/photo">
          {" "}
          實驗室照片
        </Link> */}
        <Link class="py-2 d-none d-md-inline-block" to="/about">
          聯絡我們
        </Link>
      </nav>{" "}
    </header>
  );
}

export default Header;
