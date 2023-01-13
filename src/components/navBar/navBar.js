import React from 'react'
import './navBar.css'
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <Link to='/'>
            <div className='logo'><span>M</span>ovie</div>
            </Link>
        </nav>
    )
}

export default NavBar