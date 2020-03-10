import React from 'react'

export const Skills = () => {

    const skillStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#14213D',
		width: '70%',
		color: 'white',
		margin: '5rem auto',
		fontFamily: 'BioRhyme',

	
	};

	const skills = {
		marginLeft: "50px"
	}

    return (
        <>
<div style={skillStyle}>

<div className="skills-one" style={skills}>SKILLS GO HERE</div>




<div className="skills-two" style={skills}>SKILLS GO HERE</div>



<div className="skills-three" style={skills}>SKILLS GO HERE</div>




<div className="skills-four" style={skills}>SKILLS GO HERE</div>

</div>

<hr></hr>
</>
)
}
