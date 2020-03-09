import React from 'react'
import Gitlogo from '../img/github-icon.png'
import Linkedlogo from '../img/linkedin-icon.png'



export const Top = () => {

    const topStyle = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#272259",
        height: "130px",
        width: "100%",
        fontFamily: 'BioRhyme',
        fontSize: '1.4rem',
        color: 'white',
        alignItems: 'center'
    }

    const brandStyle = {
        width: "20rem",
        marginLeft: "2rem",
    
    }
    
    return (
     
        <div className="container">
            <div className="top" style={topStyle}>
                <div className="brand" style={brandStyle}>
                <p>Ron Hughes <br /> 
                Full Stack Web Developer</p>
                </div>
                <div className="social-icons"><p><img src={Linkedlogo} /> <img src={Gitlogo} /></p></div>
            </div>
            


            
        </div>
        
    )
}
