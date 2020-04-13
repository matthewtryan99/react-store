import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
        Header
        <br />
        <Link to='/'>Homepage</Link>
        <Link to='/container'>Container</Link>
        </>
    )
}

export default Header
