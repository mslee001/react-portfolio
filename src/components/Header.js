import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    return (
        <header>
        <div class="header header-animated text-light">
          <div class="header-brand">
              <div class="nav-item no-hover">
                  <a href="index.html"><h6 class="title">Megan Sleezer</h6></a>
              </div>
              <div class="nav-item nav-btn" id="header-btn">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
          <div class="header-nav" id="header-menu">            
              <div class="nav-right">
                  <div class="nav-item text-center">
                      <a href="index.html">Home</a>
                  </div>
                  <div class="nav-item active">
                      <a href="about.html">About</a>
                  </div>
                  <div class="nav-item">
                      <a href="portfolio.html">Projects</a>
                  </div>
                  <div class="nav-item">
                      <a href="contact.html">Contact</a>
                  </div>
              </div>
          </div>
      </div>
    </header>
    );
}

export default Header;