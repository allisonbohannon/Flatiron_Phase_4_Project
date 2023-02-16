import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import { NavBar, Button, NavLinkStyle } from "../styles";
import { UserContext } from '../context/User';

const NavigationBar = () =>  {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleLogout = () =>{

        // fetch("/logout", { method: "DELETE" }).then((r) => {
        //     if (r.ok) {
        //       setCurrentUser(null);
        //     }
        //   });


        setCurrentUser(null)
    }

    return (
        <NavBar>
            <NavLinkStyle>
                <NavLink
                    to="/"
                    exact
                    style={{font:'Montserrat', 'font-size':'2em', color:'rgb(227,210,139)'}}
                    >
                    WineFriends
                </NavLink>
            </NavLinkStyle>
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
                    <button onClick={handleLogout}>Logout</button>) : (
                    <NavLink to="/Login"><Button>Log In</Button></NavLink>)}
            </div> 
        </NavBar>
       
     )
}

export default NavigationBar