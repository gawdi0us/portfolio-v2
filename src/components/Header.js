import React from 'react';


export const Header = () => {

    const headerStyle = {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: '#14213D',
		height: '10rem',
		width: '100%',
		fontFamily: 'BioRhyme',
		fontSize: '4rem',
		color: 'white',
		alignItems: 'center',
		borderBottom: '9px solid whitesmoke'
	};

return (
    <>
        <div style={headerStyle}></div>
    </>
)
}

