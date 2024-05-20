import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = ({role, username}) => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='navbar-brand'>Loaves and Fishes</Link>
            </div>
            <div className='navbar-right'>
                {role === 'admin' && <>
                    <Link to="/dashboard" className='navbar-link'>Dashboard</Link>
                    <Link to="/addclient" className='navbar-link'>Add Client</Link>
                </>
                }
                {role === 'client' && <>
                    <Link to={`/signup/${username}`} className='navbar-link'>Sign up</Link>                
                    <Link to={`/preferences/${username}`} className='navbar-link'>Set preferences</Link>                
                </>}
                {role === '' ?
                    <Link to="/login" className='navbar-link'>Login</Link>
                    : <Link to="/logout" className='navbar-link'>Logout</Link>
                }
                
            </div>
        </nav>
    )
}

export default Navbar