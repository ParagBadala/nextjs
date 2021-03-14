import React from 'react';
import Link from 'next/link'

import SearchIcon from '@material-ui/icons/Search';


const NavBar=() => {

  return (
      <>
    <div className="header-wrap">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-12 navbar-light">
            <div className="logo"> 
              <Link href="/"><a><img alt="logo" className="logo-default" src="/images/template_1_Images/logo.png" /></a></Link>
            </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="navigation-wrap" id="filters">
            <nav className="navbar navbar-expand-lg navbar-light"> <Link className="navbar-brand" href="#"><a>Menu</a></Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <button className="close-toggler" type="button" data-toggle="offcanvas"> <span><i className="fas fa-times-circle" aria-hidden="true"></i></span> </button>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item"> <Link className="nav-link active" href="/"><a>Home <span className="sr-only">(current)</span></a></Link> </li>
                  <li className="nav-item"><Link className="nav-link" href="/About"><a>About</a></Link>
                  <ul className="submenu">
                      <li><Link href="Vision"><a>Vision & Mission</a></Link></li>
                      <li><Link href="PrincipalMsg"><a>Principal's Message</a></Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="classes.html"><a>Classes</a></Link> <i className="fas fa-caret-down"></i>
                    <ul className="submenu">
                      <li><Link href="classes.html"><a>Classes</a></Link></li>
                      <li><Link href="classes-details.html"><a>Classes Details</a></Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="teachers.html"><a>Facilities</a></Link>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="#."><a>Pages</a></Link> <i className="fas fa-caret-down"></i>
                    <ul className="submenu">
                      <li><Link href="#"><a>About Us</a></Link></li>
                      <li><Link href="#"><a>Our Teachers</a></Link></li>
                      <li><Link href="#"><a>Login</a></Link></li>
                      <li><Link href="#"><a>Register</a></Link></li>
                      <li><Link href="#"><a>Our Pricing</a></Link></li>
                      <li><Link href="#"><a>Faqs</a></Link></li>
                      <li><Link href="#"><a>Testimonials</a></Link></li>
                      <li><Link href="#"><a>Typography</a></Link></li>
                      <li><Link href="#"><a>404</a></Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="blog.html"><a>Blog</a></Link> <i className="fas fa-caret-down"></i>
                    <ul className="submenu">
                      <li><Link href="blog.html"><a>Blog</a></Link></li>
                      <li><Link href="blog-grid.html"><a>Blog Grid Sidebar</a></Link></li>
                      <li><Link href="blog-list.html"><a>Blog List sidebar</a></Link></li>
                      <li><Link href="blog-details.html"><a>Blog Details</a></Link></li>
                    </ul>
                  </li>
                  <li className="nav-item"><Link className="nav-link" href="/ContactUs"><a>Contact Us</a></Link></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="header_info">
            <div className="search"><Link href="#"><a><b><SearchIcon/></b></a> </Link></div>
            <div className="loginwrp"><Link href="login.html"><a>Login/Register</a></Link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
}


export default NavBar;