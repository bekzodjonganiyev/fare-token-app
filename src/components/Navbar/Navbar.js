import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"

const Navbar = () => {
    return (

        <nav className="navbar sticky-top bg-light shadow p-3 mb-5 bg-body rounded">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand" href="/">Sticky top</a>
                <div className='d-flex'>
                    <Link to="/" className='btn btn-primary mx-4'>Login</Link>
                    <Link to="/register" className='btn btn-secondary'>Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar