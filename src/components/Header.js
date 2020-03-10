import React from 'react';
import HandsomeMan from '../img/handsome-man.jpg'


export const Header = () => {

    const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		// backgroundColor: '#14213D',
		backgroundColor: 'red',
		width: '70%',
		color: 'white',
		margin: '5rem auto',
		fontFamily: 'BioRhyme',
		borderRadius: "50%"

	};

	const photoStyle = {

		borderRadius: "50%"

	}

return (
    <>
        <div style={headerStyle}>

			<div className="header-photo" style={photoStyle}>
				<img src={HandsomeMan} style={photoStyle}/>
			</div>
			<div className="about-me">
				I am a Full-Stack Web Developer
			</div>

		</div>

	<hr />
    </>
)
}

