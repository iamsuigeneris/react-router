import React from 'react'
import { useLocation } from 'react-router-dom'

const Path = () => {
    const { pathname } = useLocation()
    return (
        <>
            <h1>My path</h1>
            <p>Current URL: {pathname} </p>
        </>
    )
}

export default Path
