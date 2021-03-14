import React from "react";
// import "../../../styles/css/all.css";
// import "./css/bootstrap.min.css";
// import "./css/style.css";
// import "./App.css";

// import aboutImg from "./images/aboutImg.png";
// import education from "./images/education.png";
// import class1 from "./images/class1.png";
// import academy from "./images/academy.png";

const OnlineLearn = () => {
  return (
    <>
      <div class="about-wrap  " id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="aboutImg">
                <img src="/images/template_1_Images/aboutImg.png" alt="" />
              </div>
            </div>
            <div class="col-lg-5">
              <div class="about_box">
                <div class="title">
                  <h1>
                    Online Learing <span>PLatform</span>
                  </h1>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus nibh dolor, gravida faucibus dolor consectetur,
                  pulvinar rhoncus risus. Fusce vel rutrum mi.
                </p>
                <ul class="edu_list">
                  <li>
                    <div class="learing-wrp">
                      <div class="edu_icon">
                        <img src="/images/template_1_Images/education.png" alt="" />
                      </div>
                      <div class="learn_info">
                        <h3>Special Education</h3>
                        <p>
                          Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                          nibh dolor gravida at eleifend
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="learing-wrp">
                      <div class="edu_icon">
                        <img src="/images/template_1_Images/class1.png" alt="" />
                      </div>
                      <div class="learn_info">
                        <h3>Honors classes</h3>
                        <p>
                          Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                          nibh dolor gravida at eleifend
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="learing-wrp">
                      <div class="edu_icon">
                        <img src="/images/template_1_Images/academy.png" alt="" />
                      </div>
                      <div class="learn_info">
                        <h3>Traditional academies</h3>
                        <p>
                          Lorem ipsum dolor sit amet, adipiscing elit. Vivamus
                          nibh dolor gravida at eleifend
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineLearn;
