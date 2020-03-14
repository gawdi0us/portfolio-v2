import React from 'react';
import HandsomeMan from '../img/handsome-man.jpg'
import Giticon from '../img/github-icon.png'
import Linkedicon from '../img/linkedin-icon.png'
import "../global/header.css";


export const Header = () => {


	const photoStyle = {
		webkitBoxshadow: '0px 3px 40px 0px rgba(0,0,0,0.89)',
		mozBoxShadow: '0px 3px 40px 0px rgba(0,0,0,0.89)',
		boxShadow: '0px 3px 40px 0px rgba(0,0,0,0.89)',
		borderRadius: "40px 0px 40px 0px",
		width: '340px',
		height: '340px',
		border: "10px solid whitesmoke",
		marginTop: "50px"

	}

	const aboutStyle = {
		marginTop: "50px",
		marginLeft: "2.5rem",
		borderRadius: "2px 2px 2px 2px",

	}

return (
    <>
	<div className="header">
		
				<img className="zoom" src={HandsomeMan} style={photoStyle}/>
	
			<div className="about-me" style={aboutStyle}>
			I am a full-stack web developer and serial learner. I enjoy working with React, Bootstrap, and Blockchain technology. 
			Need a developer? Feel free to contact me.
				<br /> <br /><div>
				Find me on social media:<br />
				<a href="https://www.github.com/ron-hughes"><img src={Giticon} /></a> <a href="https://www.linkedin.com/in/ron-hughes/"><img src={Linkedicon} /></a>	
				</div>
				
				
			</div>

		</div>
		
    </>
)
}

