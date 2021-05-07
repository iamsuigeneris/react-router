import React from 'react'

const Contact = ({history}) => {
    return (
        <>
           <h1>Contact</h1> 
           <button onClick={() => history.push('/')}>Go to home</button>
        </>
    )
}

export default Contact
