import React from 'react';
import { Link } from 'react-router-dom';
import "../global/navigation.css";
// import "../global/mediaqueries.css";



export const Nav = () => {

	return (
		
			<div className="nav-menu">

<span>ronhughes.dev</span>

				<nav>	
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/skills">Skills</Link>
				<a href="">Git Stats</a>
				<Link to="/contact">Contact</Link>
				</nav>
			
			</div>
	
	);
};
