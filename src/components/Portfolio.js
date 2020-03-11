import React from 'react'

export const Portfolio = () => {

    const skillStyle = {
		display: 'flex',
		justifyContent: 'space-between',
		width: '100%',
		color: 'white',
		margin: '5rem auto',
		fontFamily: 'Poppins',

	
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

THIS IS A REACT APPICATION THAT I BUILT 
<div style={{ backgroundColor: "black"}}>Hello</div>
</div>

<div className="skills-two" style={skill}>

THIS IS A REACT APPICATION THAT I BUILT FROM SCRATCH USING XYZ AND 123

<div style={{ backgroundColor: "black"}}>Hello</div>
</div>


<div className="skills-two" style={skill}>
THIS IS A REACT APPICATION THAT I BUILT FROM SCRATCH USING XYZ AND 123


<div style={{ backgroundColor: "black"}}>Hello</div>
</div>

</div>

<hr></hr>
</>
)
}
