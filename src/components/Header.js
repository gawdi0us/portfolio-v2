import React from 'react';
import HandsomeMan from '../img/handsome-man.jpg'


export const Header = () => {

    const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		// backgroundColor: '#084887',
		width: '70%',
		// height: '10rem',
		color: 'black',
		margin: '5rem auto',
		fontFamily: 'Poppins',
		fontSize: '2rem',

	};

	const photoStyle = {

		borderRadius: "40px 0px 40px 0px",
		width: '340px',
		height: '340px',
		border: "10px solid whitesmoke"

	}

	const aboutStyle = {
		marginLeft: "2.5rem",
		border: "2px solid whitesmoke",
		borderRadius: "2px 2px 2px 2px",
	}

return (
    <>
        <div style={headerStyle}>

			<div className="header-photo">
				<img className="zoom" src={HandsomeMan} style={photoStyle}/>
			</div>
			<div className="about-me" style={aboutStyle}>
				I am a Full-Stack Web Developer with a natural knack for programming and design. 
				I consider myself to be an avid learner and I am always looking for new things to learn and 
				experience. 
				<br /> <br />
				social icons go here
				
			</div>

		</div>

	<hr />
    </>
)
}

