import React from "react";
import Placeholder from "../img/placeholder.png";
import Macicon from "../img/mac-icon.png";
import Bookricon from "../img/bookr-back.png";
import Zut from "../img/zut.png";
import Porticon from "../img/portfolio-icon.png";
import "../global/screen.css";
import "../global/portfolio.css";

export const Portfolio = () => {
  return (
    <>
      <div className="react-transition swipe-down" style={{animationDuration: '1s'}}>
     
        <div className="projects">
         
          <div className="payload">
            <div className="title" style={{ backgroundColor: "black" }}>
              <h1>Audit Protocol</h1>
              A blockchain risk assessment tool for investors
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <p>In Development</p>
                  {/* <img src={Macicon} className="macicon" alt="Avatar" width="480px" height="470px" /> */}
                </div>
                <div className="flip-card-back">
                <br /> <br /> <br />
                  <h2>Ethereum / Truffle / React / JSX </h2>
                  <p>
                  Audit Protocol is a risk assessment tool for the Ethereum blockchain. This project aims to create a way for investors to mitigate their risk, by identifying potential scam projects.
                  </p>
                  <br /> <br />
                  <a href="https://github.com/audit-protocol">
                    <h3>Github Repo</h3>
                  </a>
                  WEBSITE IN-PROGRESS
                  <br />
                  <a href="https://www.auditprotocol.dev">
                    https://www.auditprotocol.dev
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="payload">
            <div className="title" style={{ backgroundColor: "black" }}>
              <h1>Zero Utility Token</h1>
              An erc-20 token with no utility, just profits.
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Zut}
                    className="bookr"
                    width="390px"
                    height="250px"
                  />
            
                </div>
                <div className="flip-card-back">
                  <br /> <br /> <br />
                  <h2> Smart Contract / React / JSX </h2>
                  <p>
                 Zero Utility Token was created as an experiment to see if a token with no utility would still be profitable. Current coin value is $300+, and I maintain the website, constantly adding new features.
                  </p>
                  <br /> <br />
                  <a href="https://github.com/Zero-Utility-Token">
                    {" "}
                    <h3>Github Repo</h3>
                  </a>
                  LIVE SITE
                  <br />
                  <a href="https://www.zeroutility.io">
                    https://www.zeroutility.io
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="payload">
            <div className="title" style={{ backgroundColor: "black" }}>
              <h1>BOOKR</h1>A mock website using Bootstrap 4 for displaying
              books
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Bookricon}
                    className="bookr"
                    width="390px"
                    height="235px"
                  />
             
                </div>
                <div className="flip-card-back">
                  <br />
                  <br />
                  <br />
                  <h2>HTML5 / CSS3 / BOOTSTRAP 4</h2>
                  <p>
                    Built with Bootstrap 4, this project was my first build week
                    at Lambda School. This was my first time using Bootstrap and
                    I had a lot of fun learning how to use it. Working on this
                    project gave me a solid familiarity with Bootstrap, and has
                    helped me learn other frameworks as well.
                  </p>
                  <br /> <br />
                  <a href="https://github.com/ron-hughes/Sprint-Challenge-Single-Page-Apps">
                    {" "}
                    <h3>Github Repo</h3>
                  </a>
                  DEMO PAGE
                  <br />
                  <a href="https://bookr.ronhughes.dev">
                    https://bookr.ronhughes.dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
