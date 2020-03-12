import React from "react";
import Placeholder from "../img/placeholder.png";
import Macicon from "../img/mac-icon.png";
import Bookricon from "../img/bookr-back.png";
import Rickicon from "../img/rick-back.png"
import "../global/screen.css"

export const Portfolio = () => {
  const portfolioStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    width: "100%",
    color: "white",
    margin: "5rem auto",
    fontFamily: "Poppins",
    // backgroundColor: "#040F16"
    marginBottom: "0px"
  };

  const skill = {
    textAlign: "center",
    webkitBoxshadow: "0px 3px 40px 0px rgba(0,0,0,0.89)",
    mozBoxShadow: "0px 3px 40px 0px rgba(0,0,0,0.89)",
    boxShadow: "0px 3px 40px 0px rgba(0,0,0,0.89)",
    // backgroundColor: "#8F5D89",
    // backgroundColor: "tras"
    border: "6px solid #000",
    alignItems: "center",
    // borderRadius: "40px 0px 40px 0px"
    marginTop: "30px"
  };


  const portfolioContainer = {

    backgroundColor: '#1098F7',
  }


  return (
    <>
    <div id="Porfolio" className="portfolio container" style={portfolioContainer}>
    <center><h1>Portfolio</h1></center>
      <div className="portcontainer" style={portfolioStyle}>
        <div className="skills-two" style={skill}>
          <div style={{ backgroundColor: "black" }}>
            <h1>RhymeBlock</h1>
            Find rhyming words for your poetry and music lyrics
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={Bookricon} className="bookr" width="390px" height="235px"/>
      <img src={Macicon} className="macicon"alt="Avatar" width="480px" height="470px" />
              </div>
              <div className="flip-card-back">
                <h2>TOOLS: HTML5 / CSS3 / BOOTSTRAP 4</h2>
                <p>
                  Built with Bootstrap 4, this project was my first build week
                  at Lambda School. This was my first time using Bootstrap and I
                  had a lot of fun learning how to use it. Working on this
                  project gave me a solid familiarity with Bootstrap, and has
                  helped me learn other frameworks as well.
                </p>{" "}
                <br /> <br />
                <a href="">
                  <h3>Github Repo</h3>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-two" style={skill}>
          <div style={{ backgroundColor: "black" }}>
            <h1>Rick and Morty API</h1>
            Displays JSON data from Rick and Morty API
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                
              <img src={Rickicon} className="bookr" width="390px" height="235px"/>
      <img src={Macicon} className="macicon"alt="Avatar" width="480px" height="470px" />
              </div>
              <div className="flip-card-back">
                <br /> <br /> <br />
                <h2> REACT / JSX / SEMANTICUI / AXIOS</h2>
                <p>
                  Built with React and SemanticUI
                </p>{" "}
                <br /> <br />
                <a href="">
                  <h3>Github Repo</h3>
                  <a href="#">https://rickandmorty.ronhughes.dev</a>
                </a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="skills-two" style={skill}>
<div style={{ backgroundColor: "black" }}>
  <h1>BOOKR</h1>
  A mock website using Bootstrap 4 for displaying books
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
<img src={Bookricon} className="bookr" width="390px" height="235px"/>
      <img src={Macicon} className="macicon"alt="Avatar" width="480px" height="470px" />

    </div>
    <div className="flip-card-back">
      <br />
      <br />
      <br />
      <h2>HTML5 / CSS3 / BOOTSTRAP 4</h2>
      <p>
        Built with Bootstrap 4, this project was my first build week
        at Lambda School. This was my first time using Bootstrap and I
        had a lot of fun learning how to use it. Working on this
        project gave me a solid familiarity with Bootstrap, and has
        helped me learn other frameworks as well.
      </p>
      <br /> <br />
      <a href="">
        <h3>Github Repo</h3>
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



{/* <div className="skills-two" style={skill}>
<div>
  <h1>BOOKR</h1>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
<img src={Bookricon} className="bookr" width="390px" height="235px"/>
      <img src={Macicon} className="macicon"alt="Avatar" width="480px" height="470px" />

    </div>
    <div className="flip-card-back">
      <br />
      <br />
      <br />
      <h2>HTML5 / CSS3 / BOOTSTRAP 4</h2>
      <p>
        Built with Bootstrap 4, this project was my first build week
        at Lambda School. This was my first time using Bootstrap and I
        had a lot of fun learning how to use it. Working on this
        project gave me a solid familiarity with Bootstrap, and has
        helped me learn other frameworks as well.
      </p>
      <br /> <br />
      <a href="">
        <h3>Github Repo</h3>
      </a>
    </div>
  </div>
</div>
</div> */}