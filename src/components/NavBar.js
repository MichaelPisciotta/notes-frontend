import React from 'react'
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div>
            <nav>        
            <NavLink exact to="/students">Students</NavLink>

            <NavLink exact to="/students/search">Student Search</NavLink>
            
            <NavLink exact to="/notes">Notes</NavLink>

            <NavLink exact to="/students/new">Create New Student</NavLink>

            <NavLink exact to="/notes/new">Create New Note</NavLink>
        </nav>
        </div>
    )
}

export default NavBar
