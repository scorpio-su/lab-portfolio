import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 fw-normal">
          Data collection is under construction
        </h1>
        <p class="lead fw-normal">
          And an even wittier subheading to boot. Jumpstart your marketing
          efforts with this example based on Apple’s marketing pages.
        </p>
        <a class="btn btn-outline-secondary" href="#">
          Coming soon
        </a>
      </div>
      <div class="product-device shadow-sm d-none d-md-block"></div>
      <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
    </div>
    //   {/*
    //   <div class="d-md-flex flex-md-equal w-100 my-md-4 ps-md-4">
    //     <div class="bg-light me-md-4 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    //       <div class="my-3 p-3">
    //         <h2 class="display-5">Another headline</h2>
    //         <p class="lead">And an even wittier subheading.</p>
    //       </div>
    //       <div
    //         class="bg-body shadow-sm mx-auto"
    //         style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"
    //       ></div>
    //     </div>
    //   </div> */}
  );
}

export default Home;
