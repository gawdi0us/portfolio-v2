import React from 'react';


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
		borderBottom: '10px double #000',
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
				Home -  
				<a href="#Portfolio">Portfolio</a> - 
				Skills - 
				Git Stats - 
				Contact
			</div>
		</div>
	);
};
