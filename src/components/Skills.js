import React from 'react'

export const Skills = () => {

    const skillStyle = {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '100%',
		color: 'white',
		margin: '0rem auto',
		fontFamily: 'BioRhyme',
		borderBottom: '6px solid black',
		marginBottom: "-20px"
	};

	const skill = {
		
		// backgroundColor: "#8F5D89"

	
	
	};

	const skillsContainer = {
		// height: "1000px",
		backgroundColor: '#15398C',
		color: 'white'
	
	};



    return (
        <>
<div className="skills container" style={skillsContainer}>
<center><h1>SKILLS</h1></center>
<div style={skillStyle}>


<div className="skills-one" style={skill}>
<h1>
<ul>
	<li>◙ HTML5/CSS3 </li>
	<li>◙ Vanilla Javascript</li>
	<li>◙ Bootstrap 4</li>
</ul>
</h1>
</div>

<div className="skills-two" >
	<h1>
	<ul>
	<li>◙ React</li>
	<li>◙ Redux</li>
	<li>◙ Blockchain</li>
	
</ul>
</h1>
</div>

</div>
</div>

</>
)
}
