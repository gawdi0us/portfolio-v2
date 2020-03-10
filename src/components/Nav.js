import React from 'react';
import Gitlogo from '../img/github-icon.png';
import Linkedlogo from '../img/linkedin-icon.png';

export const Nav = () => {
	// STYLES

	const navStyle = {
        display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#084887',
		height: '5rem',
		width: '100%',
		fontFamily: 'BioRhyme',
		color: 'white',
		alignItems: 'center',
		borderBottom: '6px solid'
	};

	const titleStyle = {
		fontSize: '2rem'
	}

	const menuStyle = {
		fontSize: '1rem'
	}

	return (

			<div className="nav" style={navStyle}> {/* Navigation */}
			<div className="title" style={titleStyle}>Ron Hughes
			<br />Full-Stack Web Developer
			</div>

			<div className="nav-menu" style={menuStyle}>
				Home - Portfolio - LinkedIn - Github - Resume
			</div>
             
                </div>
				
		
	
	);
};
