import React from 'react';
import HandsomeMan from '../img/handsome-man.jpg'


export const Header = () => {

    const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		// backgroundColor: '#14213D',
		backgroundColor: 'white',
		width: '70%',
		color: 'red',
		margin: '5rem auto',
		fontFamily: 'BioRhyme',

	};

	const photoStyle = {

		borderRadius: "50%",
		width: '340px',
		height: '340px',

	}

return (
    <>
        <div style={headerStyle}>

			<div className="header-photo" style={photoStyle}>
				<img src={HandsomeMan} style={photoStyle}/>
			</div>
			<div className="about-me">
				I am a Full-Stack Web Developer with a natural knack for programming and design. 
				I consider myself to be an avid learner and I am always looking for new things to learn and 
				experience. 
				
			</div>

		</div>

	<hr />
    </>
)
}

