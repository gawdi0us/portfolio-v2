import React from "react";
import "../global/skills.css";
import "../global/circles.css";

export const Skills = () => {
  return (
    <>
      <div className="skill-container">
		  <p style={{ fontSize: "80px", color: "black"}}>Skills</p>
        <div className="skills-left">
		<ul>
		<li>HTML/CSS3</li>	
		<li>Vanilla Javascript</li>	
		<li>Bootstrap 4</li>
		
		</ul>
		</div>
		<div className="skills-right">
		<ul>
		<li>React/Redux</li>
		<li>Node.js</li>
		<li>Blockchain</li>
		</ul>
		</div>

	
      </div>
    </>
  );
};
