import React from "react";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.css";

function PortfolioItem(props) {
  const { datas } = props;

  return (
    <div class="row">
      {datas.map((data) => (
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal3"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <svg
                    className="svg-inline--fa fa-plus fa-3x"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="plus"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"
                    ></path>
                  </svg>
                  {/* <i className="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com */}
                </div>
              </div>
              <img className="img-fluid" src={data.imgSrc} alt="..." />
            </a>
            <div className="portfolio-caption">
              <div className="portfolio-caption-heading">{data.title}</div>
              <div className="portfolio-caption-subheading text-muted">
                {data.subtitle}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PortfolioModal(props) {
  const { project } = props;

  return (
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-bs-dismiss="modal">
            <img src="assets/img/close-icon.svg" alt="Close modal" />
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="modal-body">
                  <h2 class="text-uppercase">{project.name}</h2>
                  <p class="item-intro text-muted">{project.description}</p>
                  <img
                    class="img-fluid d-block mx-auto"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                  <p>{project.details}</p>
                  <ul class="list-inline">
                    <li>
                      <strong>Client:</strong>
                      {project.client}
                    </li>
                    <li>
                      <strong>Category:</strong>
                      {project.category}
                    </li>
                  </ul>
                  <button
                    class="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <svg
                      class="svg-inline--fa fa-xmark me-1"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="xmark"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                      ></path>
                    </svg>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const datas = [
    {
      index: 1,
      title: "12",
      subtitle: "122",
      imgSrc: require("./img/logo.png"),
    },
  ];
  return (
    <div className="container">
      <div className="text-center p-3">
        <h2 className="section-heading text-uppercase">研究方向</h2>
        <h3 className="section-subheading text-muted">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </div>
      <PortfolioItem datas={datas} />
      {/* {datas.map((project) => (
        <PortfolioModal project={project} />
      ))} */}
      {/* Portfolio Modals */}
      <div
        class="portfolio-modal modal fade"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-8">
                  <div class="modal-body">
                    {/* Project details */}
                    <h2 class="text-uppercase">Project Name</h2>
                    <p class="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img class="img-fluid d-block mx-auto" src="" alt="..." />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul class="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
                      </li>
                    </ul>
                    {/* <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                <svg class="svg-inline--fa fa-xmark me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""/><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg><!-- <i class="fas fa-xmark me-1"></i>
                                Close Project
                            </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

/* <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 1-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><svg class="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com --></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="...">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Threads</div>
                                <div class="portfolio-caption-subheading text-muted">Illustration</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 2-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><svg class="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com --></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/2.jpg" alt="...">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Explore</div>
                                <div class="portfolio-caption-subheading text-muted">Graphic Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4">
                        <!-- Portfolio item 3-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><svg class="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com --></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/3.jpg" alt="...">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Finish</div>
                                <div class="portfolio-caption-subheading text-muted">Identity</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <!-- Portfolio item 4-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><svg class="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com --></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/4.jpg" alt="...">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Lines</div>
                                <div class="portfolio-caption-subheading text-muted">Branding</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <!-- Portfolio item 5-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><svg class="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com --></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/5.jpg" alt="...">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Southwest</div>
                                <div class="portfolio-caption-subheading text-muted">Website Design</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <!-- Portfolio item 6-->
                        <div class="portfolio-item">
                            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                <div class="portfolio-hover">
                                    <div class="portfolio-hover-content"><svg class="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg><!-- <i class="fas fa-plus fa-3x"></i> Font Awesome fontawesome.com --></div>
                                </div>
                                <img class="img-fluid" src="assets/img/portfolio/6.jpg" alt="...">
                            </a>
                            <div class="portfolio-caption">
                                <div class="portfolio-caption-heading">Window</div>
                                <div class="portfolio-caption-subheading text-muted">Photography</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */

// <!-- Portfolio Modals-->
//     <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
//     <div class="modal-dialog">
//         <div class="modal-content">
//             <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal"></div>
//             <div class="container">
//                 <div class="row justify-content-center">
//                     <div class="col-lg-8">
//                         <div class="modal-body">
//                             <!-- Project details-->
//                             <h2 class="text-uppercase">Project Name</h2>
//                             <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
//                             <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="...">
//                             <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
//                             <ul class="list-inline">
//                                 <li>
//                                     <strong>Client:</strong>
//                                     Threads
//                                 </li>
//                                 <li>
//                                     <strong>Category:</strong>
//                                     Illustration
//                                 </li>
//                             </ul>
//                             <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
//                                 <svg class="svg-inline--fa fa-xmark me-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg><!-- <i class="fas fa-xmark me-1"></i> Font Awesome fontawesome.com -->
//                                 Close Project
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
