import React from 'react'
import Gitlogo from '../img/github-icon.png'
import Linkedlogo from '../img/linkedin-icon.png'



export const Top = () => {
    // STYLES
    const topStyle = {
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#084887",
        height: "10rem",
        width: "100%",
        fontFamily: 'BioRhyme',
        fontSize: '2rem',
        color: 'white',
        alignItems: 'center',
        borderBottom: "9px solid whitesmoke"
    }

    const brandStyle = {
        width: "30rem", 
        // marginTop: "3rem",
        marginLeft: "3rem",
    }
    const titleStyle = {
        marginTop: "-3rem",
    }

    const img = {
        marginRight: "40px"
    }
    
    return (
     
        <div className="container">
            {/* Navigation */}
            <div className="top" style={topStyle}>
                <div className="brand" style={brandStyle}>
                <p>ronhughes.dev</p>
                <div className="title" style={titleStyle}>
                <h5>Full-Stack Web Developer</h5>
                </div> 
                </div>
                <div className="social-icons"><p><img src={Linkedlogo} style={img} /> <img src={Gitlogo} /></p></div>
            </div>

           
            


            
        </div>
        
    )
}
