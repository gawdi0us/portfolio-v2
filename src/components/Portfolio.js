import React from "react";
import Placeholder from "../img/placeholder.png";
import Macicon from "../img/mac-icon.png";
import Bookricon from "../img/bookr-back.png";
import Rickicon from "../img/rick-back.png";
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
              <h1>Moops</h1>
              A short-form video platform running on Steem blockchain  
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                <p>In Development</p>
                  {/* <img src={Macicon} className="macicon" alt="Avatar" width="480px" height="470px" /> */}
                </div>
                <div className="flip-card-back">
                <br /> <br /> <br />
                  <h2>Blockchain / React / Redux </h2>
                  <p>
                  Moops will be a short-form video application that allows users 
                  to upload their own content and monetize it via "likes". This project
                  is a collaborative project I am working on with a buddy of mine.
                  </p>
                  <br /> <br />
                  <a href="">
                    <h3>Github Repo</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="payload">
            <div className="title" style={{ backgroundColor: "black" }}>
              <h1>Rick and Morty API</h1>
              Displays JSON data from Rick and Morty API
            </div>

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Rickicon}
                    className="bookr"
                    width="390px"
                    height="250px"
                  />
            
                </div>
                <div className="flip-card-back">
                  <br /> <br /> <br />
                  <h2> REACT / JSX / SEMANTICUI / AXIOS</h2>
                  <p>
                    Built with React and SemanticUI this project was done using
                    React and the SemanticUI framework. To pull the data from
                    the Rick and Morty API I implemented an asynchronous api
                    call using the axios library.
                  </p>
                  <br /> <br />
                  <a href="https://github.com/ron-hughes/Sprint-Challenge-Single-Page-Apps">
                    {" "}
                    <h3>Github Repo</h3>
                  </a>
                  DEMO PAGE
                  <br />
                  <a href="https://rickandmorty.ronhughes.dev">
                    https://rickandmorty.ronhughes.dev
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
