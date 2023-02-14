import React from 'react'
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/esm/Button';


const NavigationBar = ({currentUser, setCurrentUser}) =>  {

    const handleLogoutClick = () => {}

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
                to='/users'
                exact
                >
                Users
            </NavLink>
            <p>{currentUser? `Cheers, ${currentUser}!` : ""}</p>
            <div>{currentUser?  (
                    <button onClick={handleLogoutClick}>Logout</button>) : (
                    <NavLink to="/Login"><Button>Log In</Button></NavLink>)}
            </div> 
        </div>
       
     )
}

export default NavigationBar