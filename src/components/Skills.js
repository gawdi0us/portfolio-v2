import React from 'react'
import "../global/skills.css";

export const Skills = () => {



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
<div className="skillstyle">
<h1 style={{ fontSize: "3rem"}}>SKILLS</h1> <br />


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
