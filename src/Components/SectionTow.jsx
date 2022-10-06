import React, { Component } from "react";
import "../Styles/SectionTow.css";
import logo from "../Images/logo.png";
import Spline from "@splinetool/react-spline";
import services from "../Images/services.png";
import person1 from "../Images/person1.png";
import person2 from "../Images/person2.png";
import person3 from "../Images/person3.png";
import threedlap from "../Images/threedlap.png";
import Form from "./Form";

class SectionTow extends Component {
  render() {
    return (
      <div className="sectionTwo">
        <section className="sec1">
          <div className="text">
            <h2>Why is 3D popular</h2>
            <p>
              The 3D Industry is quickly becoming one of the most popular
              mediums of media and storytelling in the world due to its
              incredibly stylistic nature and opens many opportunities in terms
              of the content that can be produced, to anything from children’s
              animated movies, to incredibly precise and photorealistic
              architectural renders.
            </p>
            <div className="button">EXPLORE MORE</div>
          </div>
          <div className="imagebox">
            <img src={threedlap} alt="3d image" />
          </div>
        </section>

        <section className="sec2">
          <div className="left">
            <div className="box">
              <div className="content">
                <div className="icon">
                  <i class="fa-solid fa-thumbs-up"></i>
                </div>
                <div className="text">
                  <h3>Genuine</h3>
                  <p>
                    We offer genuine products to you. We have wide range of
                    solution for your website needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="content">
                <div className="icon">
                  <i class="fa-solid fa-shield-halved"></i>
                </div>
                <div className="text">
                  <h3>100% Secured</h3>
                  <p>
                    We guaranteed about your websites's security 100% and we
                    manage extreme perfomance of your website.
                  </p>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="content">
                <div className="icon">
                  <i class="fa-solid fa-user"></i>
                </div>
                <div className="text">
                  <h3>Support</h3>
                  <p>
                    Unlike our competitors who only provide support 8am - 5pm on
                    working days, we offer genuine 24 x 7 support services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <h2>
              You do the business,
              <br /> We'll handle the website.
            </h2>
            <p>
              3Dbox offers industry-leading support services. We offer genuine
              24 x 7 support services. We are contactable at all times including
              after working hours, weekends and mercantile or public holidays.
              We provide multiple contact persons, including the ability to
              escalate your request if there is a delay. We respond within
              minutes to emailed support requests, and consistently update
              websites within a few hours for most requests.
            </p>
          </div>
        </section>

        <section className="sectionThree">
          <div className="left">
            <h2>Our Solutions</h2>
            <p>
              3D Box is Sri Lanka’s premier web design, web development and
              digital marketing agency. With over two years of industry
              experience, we offer highly personalized, bespoke web design
              solutions to an exclusive clientele. Our game-changing solutions
              include responsive web design, e-commerce solutions, digital
              marketing, search engine optimization, social media marketing,
              website security solutions, and consulting.
            </p>
          </div>
          <div className="right">
            <img src={services} alt="" />
          </div>
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
        </section>

        <section className="sectionFour">
          <div className="left">
            <h2>
              What people are <br /> saying about us
            </h2>
          </div>
          <div className="right">
            <p>“We don't just sell websites, we create websites that SELL.”</p>
          </div>
        </section>

        <section className="sectionFive">
          <div className="card">
            <div className="content">
              <i class="fa-solid fa-quote-right"></i>
              <p>
                Lorem ipsum dolor sit amet, feugiat adipiscing elit. Cras sed
                leo maximus, convallis turpis sed, feugiat quam.
              </p>
              <div className="person">
                <div className="face">
                  <img src={person1} alt="" />
                </div>
                <div className="details">
                  <h3>Herman Jensen</h3>
                  <div>CEO Alpex</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <i class="fa-solid fa-quote-right"></i>
              <p>
                Lorem ipsum dolor sit amet, feugiat adipiscing elit. Cras sed
                leo maximus, convallis turpis sed, feugiat quam.
              </p>
              <div className="person">
                <div className="face">
                  <img src={person2} alt="" />
                </div>
                <div className="details">
                  <h3>Steve Harvi</h3>
                  <div>Founder & CEO Jnx .Co</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="content">
              <i class="fa-solid fa-quote-right"></i>
              <p>
                Lorem ipsum dolor sit amet, feugiat adipiscing elit. Cras sed
                leo maximus, convallis turpis sed, feugiat quam.
              </p>
              <div className="person">
                <div className="face">
                  <img src={person3} alt="" />
                </div>
                <div className="details">
                  <h3>Kenn Gallagher</h3>
                  <div>CEO Keviton .Ltd</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionSix">
          <div className="brand">
            <i class="fa-brands fa-react"></i>
            <h1>React</h1>
          </div>
          <div className="brand">
            <i class="fa-brands fa-css3"></i>
            <h1>CSS</h1>
          </div>
          <div className="brand">
            <i class="fa-brands fa-js"></i>
            <h1>Javascript</h1>
          </div>
          <div className="brand">
            <i class="fa-solid fa-cube"></i>
            <h1>Spline</h1>
          </div>
        </section>

        <section className="sectionSeven">
          <div className="left">
            <h2>
              We are always here
              <br />
              to help you...
            </h2>
            <h5>
              We’re happy to answer any questions you might have! Please fill
              out the form below.
            </h5>
            <h4>Contact</h4>
            <div className="item">
              <i class="fa-brands fa-whatsapp"></i>
              <p>(94) 7020 10059</p>
            </div>
            <div className="item">
              <i class="fa-solid fa-phone"></i>
              <p>(94) 7020 10059</p>
            </div>
            <div className="item">
              <i class="fa-regular fa-envelope"></i>
              <a href="mailto:isuruariyarathna2000@gmail.com">
                isuruariyarathna2000@gmail.com
              </a>
            </div>
            <div className="item">
              <i class="fa-solid fa-location-dot"></i>
              <p>R. Sao Vicente, 48 - Colombo 06 </p>
            </div>

            <div className="bar"></div>

            <h4>Related Socials</h4>
            <div className="item">
              <i class="fa-brands fa-instagram"></i>
              <a href="https://www.instagram.com/_isuru_ariyarathna_/?next=%2F">
                isuru_ariyarathna
              </a>
            </div>
            <div className="item">
              <i class="fa-brands fa-square-facebook"></i>
              <a href="https://www.facebook.com/profile.php?id=100080369274605">
                Isuru Ariyarathna
              </a>
            </div>
          </div>
          <div className="right">
            <Form />
          </div>
        </section>

        <div className="sectionEight">
          <div className="box">
            <div className="title">
              <h2>Let’s try our products now</h2>
              <p>Contact us</p>
            </div>
            <button>Get a Quote</button>
          </div>
        </div>

        <section className="footer">
          <div className="left">
            <div className="logo">
              <img src={logo} alt="" />
              <h3>3D Box</h3>
            </div>

            <p>A new way to make the website easy, reliable and fast.</p>
          </div>
          <div className="right">
            <div className="column">
              <h3>Useful Lnks</h3>
              <a href="">Content</a>
              <a href="">How it Works</a>
              <a href="">Get a Quote</a>
              <a href="">Explore More</a>
              <a href="">Terms & Services</a>
            </div>
            <div className="column">
              <h3>Community</h3>
              <a href="">Help Center</a>
              <a href="">Patners</a>
              <a href="">Suggestions</a>
              <a href="">Blog</a>
            </div>
            <div className="column">
              <h3>Clients</h3>
              <a href="">Our Clients</a>
              <a href="">Get Support</a>
              <a href="">Complaintes</a>
            </div>
          </div>
        </section>

        <div className="barBottom"></div>
        <div className="bottom">
          <div className="copyrights">
            Copyright © 2022 3D Box. All Rights Reserved. A Project By Isuru
          </div>
          <div className="socialmedia">
            <ul>
              <li>
                <a href="https://github.com/Isw200/threed">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/isuru-ariyarathna-8a5404222/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/_isuru_ariyarathna_/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* -- light bubbles -- */}
        <div className="whiteBubbleS1"></div>
        <div className="whiteBubbleS2"></div>
        <div className="whiteBubbleS3"></div>
        <div className="whiteBubbleS4"></div>
        <div className="whiteBubbleS5"></div>
      </div>
    );
  }
}

export default SectionTow;
