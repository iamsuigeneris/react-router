import React from 'react'
import { useHistory } from 'react-router-dom'

const Blog = () => {
    const history = useHistory()
    return (
        <>
        <div style={{maxWidth:'500px',margin:'auto'}}>
            <h1>Blog Post</h1>
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button onClick={() => history.push('/')}>Go to home</button>
        </div>    
        </>
    )
}

export default Blog
