import React from 'react';
import Particles from 'react-particles-js';
import HandsomeMan from '../img/handsome-man.jpg'
import Giticon from '../img/github-icon.png'
import Linkedicon from '../img/linkedin-icon.png'
import "../global/header.css";


export const Header = () => {


return (
    <>
	 <Particles height={ 600 }/>
	<div className="header">
		<div>
		<img src={HandsomeMan} className="zoom" />
		</div>
	<div className="about-me">
		<p> Ron Hughes is a Father, and Full-Stack Software Engineer </p> 
		<p> I am also a lover of Star Wars and serial learner. I enjoy working with React, Bootstrap, and Blockchain technology. Need a developer? Feel free to contact me. </p> <br />

<a href="https://www.github.com/gawdi0us"><img src={Giticon} /></a>  <img src={Linkedicon} />
</div>

	</div>

	
    </>
)
}

