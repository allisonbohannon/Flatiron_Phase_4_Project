import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export class NavigationBar extends Component {
  render() {
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
}

export default NavigationBar