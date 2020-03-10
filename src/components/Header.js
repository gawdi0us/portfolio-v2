import React from 'react';


export const Header = () => {

    const headerStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#14213D',
		width: '70%',
		color: 'white',
		margin: '5rem auto',
		fontFamily: 'BioRhyme',

	
	};

return (
    <>
        <div style={headerStyle}>

			<div>PHOTO GOES HERE</div>
			<div>ABOUT ME SECTION</div>

		</div>

	<hr />
    </>
)
}

