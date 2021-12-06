import React from 'react'
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div>
            <nav>        
            <NavLink to="/students">Students</NavLink>
            
            <NavLink to="/notes">Notes</NavLink>

            <NavLink to="/students/new">Create New Student</NavLink>

            <NavLink exact to="/notes/new">Create New Note</NavLink>
        </nav>
        </div>
    )
}

export default NavBar
