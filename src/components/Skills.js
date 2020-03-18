import React from "react";
import FadeIn from 'react-fade-in';
import "../global/skills.css";


export const Skills = () => {
  return (
    <>
      <div className="skill-container">
		  <p style={{ fontSize: "80px", color: "black"}}>Skills</p>
        <FadeIn  transitionDuration={ 2700 }>
		<div className="skills-left">
		<ul>
		<li>HTML/CSS3</li>	
		<li>Vanilla Javascript</li>	
		<li>Bootstrap 4</li>
		
		</ul>
		</div>
		</FadeIn>
		<FadeIn  transitionDuration={ 4200 }>
		<div className="skills-right">
		<ul>
		<li>React/Redux</li>
		<li>Node.js</li>
		<li>Blockchain</li>
		</ul>
		</div>
		</FadeIn>
	
      </div>
    </>
  );
};
