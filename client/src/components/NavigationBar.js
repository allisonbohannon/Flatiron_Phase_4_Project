import React from 'react'
import { NavLink } from "react-router-dom";
import { NavBar, Button, NavLinkStyles, NavLinkStyle } from "../styles";




const NavigationBar = ({currentUser, setCurrentUser}) =>  {

    const handleLogoutClick = () => {}

    return (
        <NavBar>
            <NavLink
                to="/"
                exact
                >
                WineFriends
            </NavLink>
            <NavLinkStyle>
                <NavLink
                    to="/wineries"
                    exact
                    >
                    Wineries
                </NavLink>
            </NavLinkStyle>
            <NavLinkStyle>
                <NavLink
                    to='/users'
                    exact
                    >
                    Users
                </NavLink>
            </NavLinkStyle>
            <NavLinkStyle>Maps</NavLinkStyle>

            <p>{currentUser? `Cheers, ${currentUser}!` : ""}</p>
            <div>{currentUser?  (
                    <button onClick={handleLogoutClick}>Logout</button>) : (
                    <NavLink to="/Login"><Button>Log In</Button></NavLink>)}
            </div> 
        </NavBar>
       
     )
}

export default NavigationBar