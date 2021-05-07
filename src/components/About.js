import React from 'react'
import {Redirect} from 'react-router-dom'


const About = ({ match:{params:{name}}}) => {
    return (
        <>
        {name !== 'John Doe' ? <Redirect to='/' /> : null}
           <h1>About {name}</h1> 
        </>
    )
}

export default About
