import React from 'react';
import HandsomeMan from '../img/handsome-man.jpg'
import Giticon from '../img/github-icon.png'
import Linkedicon from '../img/linkedin-icon.png'

export const Header = () => {

    const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		// backgroundColor: '#084887',
		width: '70%',
		color: 'black',
		margin: '0rem auto',
		fontFamily: 'Poppins',
		fontSize: '2rem',

	};
	const headerContainer = {
		// height: "1000px",
		backgroundColor: '#FFFFFF',
		marginBottom: "-30px"
	
	};

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
	<div className="header container" style={headerContainer}>
        <div style={headerStyle}>

			<div className="header-photo">
				<img className="zoom" src={HandsomeMan} style={photoStyle}/>
			</div>
			<div className="about-me" style={aboutStyle}>
				I am a Full-Stack Web Developer with a natural knack for programming and design. 
				I consider myself to be an avid learner and I am always looking for new things to learn and 
				experience. 
				<br /> <br /><div>
				Find me on social media:<br />
				<img src={Giticon} /> <img src={Linkedicon} />	
				</div>
				
				
			</div>

		</div>
		</div>

    </>
)
}

