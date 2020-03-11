import React from 'react'
import Placeholder from '../img/placeholder.png'

export const Portfolio = () => {

    const skillStyle = {
		display: 'flex',
		justifyContent: 'space-around',
		width: '100%',
		color: 'white',
		margin: '5rem auto',
		fontFamily: 'Poppins',

	
	};

	const skill = {
		textAlign: 'center',
		webkitBoxshadow: '0px 3px 40px 0px rgba(0,0,0,0.89)',
mozBoxShadow: '0px 3px 40px 0px rgba(0,0,0,0.89)',
boxShadow: '0px 3px 40px 0px rgba(0,0,0,0.89)',
        backgroundColor: "#8F5D89",
        border: "2px solid #ffffff",
		alignItems: "center",

        
	
	};



    return (
        <>
<div style={skillStyle}>

<div className="skills-one" style={skill}>
<div style={{ backgroundColor: "black"}}>RhymeBlock</div>

<img src={Placeholder} />
<div style={{ backgroundColor: "black"}}>
	Tools: 	React, Redux, Axios
	</div>
</div>

<div className="skills-two" style={skill}>
<div style={{ backgroundColor: "black"}}>RhymeBlock</div>

<img src={Placeholder} />

<div style={{ backgroundColor: "black"}}>Hello</div>
</div>


<div className="skills-three" style={skill}>
<div style={{ backgroundColor: "black"}}>RhymeBlock</div>
<img src={Placeholder} />


<div style={{ backgroundColor: "black"}}>Hello</div>
</div>

</div>

<hr></hr>
</>
)
}
