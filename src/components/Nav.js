import React from 'react';


export const Nav = () => {
	// STYLES

	const navStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#084887',
		height: '7rem',
		width: '100%',
		fontFamily: 'BioRhyme',
		color: 'white',
		alignItems: 'center',
		borderBottom: '6px solid'
	};

	const titleStyle = {
		fontSize: '2rem',
		marginLeft: '1rem',

	};

	const menuStyle = {
		fontSize: '1rem'
	};

	return (
		<div className="nav" style={navStyle}>
			{' '}
			{/* Navigation */}
			<div className="title" style={titleStyle}>
				<span>Ron Hughes
			 
				</span>
				
			</div>
			<div className="nav-menu" style={menuStyle}>
				Home - Portfolio - Skills - LinkedIn - Github - Resume
			</div>
		</div>
	);
};
