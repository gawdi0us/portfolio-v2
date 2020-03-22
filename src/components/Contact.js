import React from "react";
import FadeIn from 'react-fade-in';
import "../global/contact.css";



export const Contact = () => {
  return (
    <>
	<div className="react-transition swipe-down" style={{animationDuration: '1s'}}>
      <div className="contact-container">
		  <p style={{ fontSize: "80px", color: "black"}}>Contact</p>
        <FadeIn  transitionDuration={ 2700 }>
		<div className="contact-box">
      <div> 
      <ul>
		<li>Email: </li>	
		<li>LinkedIn: </li>
		<li>Twitter: </li>
		
		</ul>
      </div>
      <div> 
      <ul>
		<li>me@ronhughes.dev</li>	
		<li><a href="https://www.linkedin.com/in/ron-hughes/">@ron-hughes</a></li>	
		<li><a href="https://twitter.com/eyecodethings">@eyecodethings</a></li>
		
		</ul>
      </div>

		</div>
		</FadeIn>
	</div>
      </div>
	  
    </>
  );
};
