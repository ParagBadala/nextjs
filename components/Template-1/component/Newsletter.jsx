import React from "react";
import EmailIcon from "@material-ui/icons/Email";

const Newsletter = () => {
  return (
    <>
      <div class="newsletter-wrap ">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="title">
                <h1>Newsletter</h1>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div class="col-lg-6">
              <div class="news-info">
                <form>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      name="search"
                      placeholder="Email Address"
                    />
                    <div class="form_icon">
                      <EmailIcon />
                    </div>
                  </div>
                  <button class="sigup">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
