import React from 'react';
import Particles from 'react-particles-js';
import HandsomeMan from '../img/handsome-man.jpg'
import Giticon from '../img/github-icon.png'
import Linkedicon from '../img/linkedin-icon.png'
import "../global/header.css";


export const Header = () => {


	const aboutStyle = {
		marginTop: "50px",
		marginLeft: "2.5rem",
		borderRadius: "2px 2px 2px 2px",

	}

return (
    <>
	 <Particles height={ 600 }/>
	<div className="header">
		<div>
		<img src={HandsomeMan} className="zoom" />
		</div>
	<div className="about-me">
		<p> Ron Hughes - Full-Stack Software Engineer </p> 
		<p> I am a full-stack web developer and serial learner. I enjoy working with React, Bootstrap, and Blockchain technology. Need a developer? Feel free to contact me. </p> <br />

<img src={Giticon} /> <img src={Linkedicon} />
</div>

	</div>

	
    </>
)
}

