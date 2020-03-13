import React from 'react';
import "../global/navigation.css";



export const Nav = () => {
	// STYLES

	const navStyle = {
		position: '-webkit-sticky',
  		position: 'sticky',
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#084887',
		height: '7rem',
		width: '100%',
		fontFamily: 'BioRhyme',
		color: 'white',
		alignItems: 'center',
		borderBottom: '10px solid #95190C',
	};

	const titleStyle = {
		fontSize: '2rem',
		marginLeft: '1rem',

	};

	const menuStyle = {
		fontSize: '1.4rem',
		marginRight: '1rem'
	};

	return (
		<div className="nav" style={navStyle}>
			{/* Navigation */}
			<div className="title" style={titleStyle}>
				<span>ronhughes.dev
			 
				</span>
				
			</div>
			<div className="nav-menu" style={menuStyle}>
				<a href="">Home</a>
				<a href="#Portfolio" className="zoom">Projects</a>
				<a href="">Skills</a> 
				<a href="">Git Stats</a>
				<a href="">Contact</a>
			</div>
		</div>
	);
};
