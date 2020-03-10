import React from 'react'

export const Portfolio = () => {

    const skillStyle = {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '100%',
		color: 'white',
		margin: '5rem auto',
		fontFamily: 'BioRhyme',

	
	};

	const skill = {
		
        backgroundColor: "#8F5D89",
        border: "2px solid #ffffff",
        alignItems: "center",
        
	
	};



    return (
        <>
<div style={skillStyle}>

<div className="skills-one" style={skill}>

<ul>
	<li>HTML5/CSS3</li>
	<li>Vanilla Javascript</li>
	<li>Flexbox/CSS Grid</li>
</ul>
</div>

<div className="skills-two" style={skill}><ul>
	<li>HTML5/CSS3</li>
	<li>Vanilla Javascript</li>
	<li>Visual Studio Code</li>
</ul></div>


<div className="skills-two" style={skill}>

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
