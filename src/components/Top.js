import React from 'react';
import Gitlogo from '../img/github-icon.png';
import Linkedlogo from '../img/linkedin-icon.png';

export const Top = () => {
	// STYLES

	const topStyle = {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#084887',
		height: '10rem',
		width: '100%',
		fontFamily: 'BioRhyme',
		fontSize: '4rem',
		color: 'white',
		alignItems: 'center',
		borderBottom: '9px solid whitesmoke'
	};

	const navStyle = {
        width: '30rem',
	};
	// const titleStyle = {
    //     verticalAlign: "middle"
	// };

	// const img = {
	// 	verticalAlign: "bottom"
	// };

	return (
		<div className="container">
			{/* Navigation */}
			<div className="top" style={topStyle}>
				<div className="brand" style={navStyle}>
				
				</div>
			</div>
		</div>
	);
};
