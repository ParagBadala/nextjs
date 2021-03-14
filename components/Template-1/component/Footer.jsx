import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import MapIcon from "@material-ui/icons/Map";
import CallIcon from "@material-ui/icons/Call";
const Footer = () => {
  return (
    <>
      <div className="footer-wrap">
        <div className="container">
          `
          <div className="row">
            <div className="col-lg-4">
              <div className="footer_logo">
                <img
                  alt=""
                  className="footer-default"
                  src="/images/template_1_Images/logo.png"
                  alt="logo"
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Sed tempor, urna eu
                scelerisque maximus, urna nibh semper lectus, ut interdum nunc
                ligula et magna. In ac mauris vehicula, vulputate sem at,
                placerat nisl. Etiam laoreet erat magna, at hendrerit lorem
                vulputate non. Nam facilisis congue convallis.
              </p>
            </div>
            <div className="col-lg-2 col-md-3">
              <h3>Quick links</h3>
              <ul className="footer-links">
                <li>
                  {" "}
                  <a href="index.html">Home</a>
                </li>
                <li>
                  {" "}
                  <a href="about.html">About</a>
                </li>
                <li>
                  {" "}
                  <a href="classes.html">Classes</a>
                </li>
                <li>
                  {" "}
                  <a href="teachers.html">Teachers</a>
                </li>
                <li>
                  {" "}
                  <a href="testimonials.html">Testimonials</a>
                </li>
                <li>
                  {" "}
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  {" "}
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h3>Opening Hours</h3>
              <ul className="unorderList hourswrp">
                <li>
                  Monday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Tuesday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Wednesday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Thursday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Friday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Saturday <span>08:00 - 02:00</span>
                </li>
                <li>
                  Sunday <span>Closed</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="footer_info">
                <h3>Get in Touch</h3>
                <ul className="footer-adress">
                  <li className="footer_address">
                    {" "}
                    <MapIcon style={{ fill: "#bcc5d0" }} />{" "}
                    <span>123 Lorem Ipsum, 32 sit Atlanta</span>{" "}
                  </li>
                  <li className="footer_email">
                    {" "}
                    <EmailIcon style={{ fill: "#bcc5d0" }} />{" "}
                    <span>
                      <a href="mailto:info@example.com"> info@example.com </a>
                    </span>{" "}
                  </li>
                  <li className="footer_phone">
                    {" "}
                    <CallIcon style={{ fill: "#bcc5d0" }} />{" "}
                    <span>
                      <a href="tel:7704282433"> 770-123-4567</a>
                    </span>{" "}
                  </li>
                </ul>
                <div className="social-icons footer_icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
