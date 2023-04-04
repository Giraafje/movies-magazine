import React from 'react'
import { NavLink } from 'react-router-dom';
import './menu.css'


export const Menu = () => {

    return (
        <nav className="menu">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/reviews' >Reviews</NavLink>
            <NavLink to='/articles' >Articles</NavLink>
            <NavLink to='/movies' >Movies</NavLink>
        </nav>
    )
};
