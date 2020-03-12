import React from 'react'

export const Skills = () => {

    const skillStyle = {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '100%',
		color: 'white',
		margin: '5rem auto',
		fontFamily: 'BioRhyme',

	
	};

	const skill = {
		
		backgroundColor: "#8F5D89"

	
	};



    return (
        <>
<div style={skillStyle}>

<div className="skills-one" style={skill}>

<ul>
	<li>HTML5/CSS3</li>
	<li>Vanilla Javascript</li>
	<li>SASS/LESS</li>
</ul>
</div>

<div className="skills-two" ><ul>
	<li>React</li>
	<li></li>
	<li>Visual Studio Code</li>
</ul></div>


<div className="skills-two" >

<ul>
	<li>HTML5/CSS3</li>
	<li>Vanilla Javascript</li>
	<li></li>
</ul>
</div>
</div>

<hr></hr>
</>
)
}
