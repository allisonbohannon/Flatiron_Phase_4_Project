import React from 'react'
import { NavLink } from "react-router-dom";


const NavigationBar = () =>  {
    return (
        <div>
            <NavLink
                to="/"
                exact
                >
            </NavLink>
            <NavLink
                to="/wineries"
                exact
                >
                Wineries
            </NavLink>
            <NavLink
                to='users'
                exact
                >
                Users
            </NavLink>
        </div>
       
     )
}

export default NavigationBar