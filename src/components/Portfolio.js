import React from 'react' 
import Devicon from '../img/dev-icon.png';

export const Portfolio = () => {

    const portStyle = {
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

<img src={Devicon} style={{ width: '128px', height: '128px'}}/>
<div style={portStyle}>

<div>PORTFOLIO GOES HERE</div>


</div>

<hr></hr>
        </>
    )
}