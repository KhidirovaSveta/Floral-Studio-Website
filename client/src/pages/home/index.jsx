import React from "react";
import Carousel from "../../components/Header-Carousel";
import "./index.scss";
// import flowers from "../../images/b4.jpg"
import FlowersCard from "../../components/flowers-card";
import girl1 from "../../images/portr1.jpg";
import girl2 from "../../images/portr2.jpg";
import girl3 from "../../images/portr3.jpg";
import {Helmet} from "react-helmet";

const Home = ({wishlist, setWishlist}) => {
  return (
    <div id="Home">
      <Carousel />

      <div className="home">
        <div className="container">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Home</title>
          </Helmet>

          <div className="second-section">
            <div className="info">
              <div className="text">
                <h2 className="missionTxt">Our Mission</h2>
                <p className="missionParag">
                  Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore
                  dicunt an, ea civibus.
                </p>
                <button className="readBtn"> Read More </button>
              </div>
            </div>
            <div className="img"></div>
          </div>
        </div>

        {/* third section */}

        <div className="third-and-four-section">
          <div className="container">
            <div className="third-and-four-section-text">
              <p>Devoted to wonderful beauty</p>
              <h1 className="pricing">Flowers Pricing</h1>
            </div>
            <FlowersCard wishlist={wishlist} setWishlist={setWishlist} />

            {/* four section */}
            <div className="four-section">
              <div className="third-and-four-section-text">
                <p>Devoted to wonderful beauty</p>
                <h1 className="pricing">Events Pricing</h1>
              </div>

              <div className="price-cards">
                <div className="price-card">
                  <p className="price-per-table">
                    {" "}
                    <span className="price">$16</span> per table
                  </p>
                  <h2 className="event-name">Birthday Events</h2>
                  <p className="flow-description">
                    Lorem ipsum dolor sit amet laudem partem perfecto per
                  </p>
                  <button className="shopBtn">Shop now</button>
                </div>

                <div className="price-card">
                  <p className="price-per-table">
                    {" "}
                    <span className="price">$16</span> per table
                  </p>
                  <h2 className="event-name">Birthday Events</h2>
                  <p className="flow-description">
                    Lorem ipsum dolor sit amet laudem partem perfecto per
                  </p>
                  <button className="shopBtn">Shop now</button>
                </div>

                <div className="price-card">
                  <p className="price-per-table">
                    {" "}
                    <span className="price">$16</span> per table
                  </p>
                  <h2 className="event-name">Birthday Events</h2>
                  <p className="flow-description">
                    Lorem ipsum dolor sit amet laudem partem perfecto per
                  </p>
                  <button className="shopBtn">Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fifth-section">
        <div className="container">
          <div className="text">
            <p>Contacts</p>
            <h1 className="lastHeader">Our Team</h1>
          </div>

          <div className="images">
            <div className="port1">
              <img src={girl1} alt="" />
              <h2>Velva Kopf</h2>
              <span className="who">Florist</span>
            </div>
            <div className="port2">
              <img src={girl2} alt="" />
              <h2>Sarah Palmer</h2>
              <span className="who">Florist</span>
            </div>
            <div className="port3">
              <img src={girl3} alt="" />
              <h2>Jessica Swift</h2>
              <span className="who">Photographer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
