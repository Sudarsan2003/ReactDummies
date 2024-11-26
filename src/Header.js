import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

function Header() {
    
    return (
        <>
            <nav className="navbar border-bottom border-body " >
                <img src='https://images.sftcdn.net/images/t_app-icon-m/p/e411cdb3-af23-4bd2-b753-610ecc6968cd/376407309/mflix-watch-movies-live-tv-logo' />
                <NavLink className="navlinks" style={{ textDecoration: 'none' }} to='/'>Home</NavLink>
                <NavLink className="navlinks" style={{ textDecoration: 'none' }} to='/products'>Products</NavLink>
                <NavLink className="navlinks" style={{ textDecoration: 'none' }} to='/returns'>Returns&Orders</NavLink>
                <NavLink className="navlinks" style={{ textDecoration: 'none' }} to='/contact'>Contact</NavLink>
                <NavLink className="navlinks" style={{ textDecoration: 'none' }} to='/profile'>Profile</NavLink>


            </nav>
            <div id='landing-page'>

            </div>
        </>
    )
}

export default Header