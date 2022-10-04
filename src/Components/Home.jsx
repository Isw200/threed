import React, { Component } from "react";
import logo from "../Images/logo.png";
import gift from "../Images/412-gift-gradient.gif";
import "../Styles/Home.css";

class Home extends Component {
  hideMobNav() {
    document.getElementById("mobnav").style.display = "none";
  }
  showMobnav() {
    document.getElementById("mobnav").style.display = "block";
  }
  render() {
    return (
      <div className="home">
        <div className="mobilenav" id="mobnav">
          <i onClick={this.hideMobNav} className="fa-solid fa-xmark"></i>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navBar">
          <div className="logo">
            <div className="logoPng">
              <img src={logo} alt="logo" />
            </div>
            <h3>3D Box</h3>
          </div>
          <div className="navigator">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <i onClick={this.showMobnav} className="fa-solid fa-bars"></i>
        </div>

        <div className="mainText">
          <div className="discount">
            <div className="icon">
              <img src={gift} alt="" />
            </div>
            <p>
              <b>20%</b> DISCOUNT FOR <b>THIS MONTH</b>
            </p>
          </div>
          <div className="title">
            <h1>The Next</h1>
            <h1 className="gradient">Generation</h1>
            <h1>Web Development</h1>
          </div>

          <p className="para">
            Enough 2D. Lets see 3D world. Create your dream website with 3D Box.
            3D Box is powed by Web 3.0. We create and custamize your own 3D
            website.
          </p>

          <div className="button">
            <p>Contact Us</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="socialMedaia">
          <ul>
            <li>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* -- light bubbles -- */}
        <div className="whiteBubble1"></div>
        <div className="whiteBubble2"></div>
      </div>
    );
  }
}

export default Home;
