import React from "react";
import Placeholder from "../img/placeholder.png";
import Macicon from "../img/mac-icon.png";
import Bookricon from "../img/bookr-back.png";

export const Portfolio = () => {
  const skillStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    color: "white",
    margin: "5rem auto",
    fontFamily: "Poppins",
    backgroundColor: "#040F16"
  };

  const skill = {
    textAlign: "center",
    webkitBoxshadow: "0px 3px 40px 0px rgba(0,0,0,0.89)",
    mozBoxShadow: "0px 3px 40px 0px rgba(0,0,0,0.89)",
    boxShadow: "0px 3px 40px 0px rgba(0,0,0,0.89)",
    // backgroundColor: "#8F5D89",
    border: "2px solid #ffffff",
    alignItems: "center"
    // borderRadius: "40px 0px 40px 0px"
  };

  return (
    <>
      <div style={skillStyle}>
        <div className="skills-two" style={skill}>
          <div style={{ backgroundColor: "black" }}>
            <h1>RhymeBlock</h1>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Placeholder} alt="Avatar" />
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
            <h1>RhymeBlock</h1>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Placeholder} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <h2>TOOLS: HTML5 / CSS3 / BOOTSTRAP 4</h2>
                <p>
                  Built with Bootstrap 4, this project was my first build week
                  at Lambda School. This was my first time using Bootstrap and I
                  had a lot of fun learning how to use it. Working on this
                  project gave me a solid familiarity with Bootstrap, and has
                  helped me learn other frameworks like Semantic UI.
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
            <h1>BOOKR</h1>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
				<img src={Bookricon} width="350px" height="305px"/>
                <img src={Macicon} alt="Avatar" width="484px" height="500px" />

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

      <hr></hr>
    </>
  );
};
