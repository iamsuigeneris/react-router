import React from 'react'
import { useParams,Redirect} from 'react-router-dom'

const Email = () => {
    const { name } = useParams()
    return (
        <>
           { name !== 'John Doe' ? <Redirect to="/" /> : null} 
           <h1>Email {name} </h1>
        </>
    )
}

export default Email
