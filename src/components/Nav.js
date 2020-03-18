import React from 'react';
import "../global/navigation.css";
// import "../global/mediaqueries.css";



export const Nav = () => {
	// STYLES

	const titleStyle = {
		fontSize: '2rem',
		marginLeft: '1rem',

	};

	const menuStyle = {
		fontSize: '1.4rem',
		marginRight: '1rem'
	};

	return (
		
			<div className="nav-menu">

<span>ronhughes.dev</span>

				<nav>	
				<a href="">Home</a>
				<a href="#Portfolio">Projects</a>
				<a href="">Git Stats</a>
				<a href="">Contact</a>
				</nav>
			
			</div>
	
	);
};
