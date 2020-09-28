import React from "react";
import FadeIn from 'react-fade-in';
import "../global/skills.css";


export const Skills = () => {
  return (
    <>
	<div className="react-transition swipe-down" style={{animationDuration: '1s'}}>
      <div className="skill-container">
		  <p style={{ fontSize: "80px", color: "black"}}>Skills</p>
        <FadeIn  transitionDuration={ 2700 }>
		<div className="skills-left">
		<ul>
		<li>HTML/CSS3/LESS</li>	
		<li>Javascript</li>	
		<li>Bootstrap 4</li>
		<li>RestFUL API</li>
		
		
		</ul>
		</div>
		</FadeIn>
		<FadeIn  transitionDuration={ 4200 }>
		<div className="skills-right">
		<ul>
		<li>React/Redux</li>
		<li>Node.js</li>
		<li>Agile Development</li>
		<li>Blockchain / Truffle</li>
		
		</ul>
		</div>
		</FadeIn>
	</div>
      </div>
	  
    </>
  );
};
