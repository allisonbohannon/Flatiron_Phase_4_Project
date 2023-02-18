import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import { NavBar, Button, NavLinkStyle } from "../styles";
import { UserContext } from '../context/User';

const NavigationBar = () =>  {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleLogout = () =>{

        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setCurrentUser(null);
            }
          });
    }

    return (
        <NavBar>
            <NavLinkStyle>
                <NavLink
                    to="/"
                    exact
                    style={{font:'Arial', 'font-size':'2em', color:'#aaa'}}
                    >
                    WineFriends
                </NavLink>
            </NavLinkStyle>
            <NavLinkStyle>
                <NavLink
                    to="/wineries"
                    exact
                    style={{color: '#ffffff'}}
                    >
                    Wineries
                </NavLink>
            </NavLinkStyle>
            <NavLinkStyle>
                <NavLink
                    to='/users'
                    exact
                    style={{color: '#ffffff'}}
                    >
                    Users
                </NavLink>
            </NavLinkStyle>
            <NavLinkStyle>
                <NavLink 
                     to='/maps'
                     exact
                     style={{color: '#ffffff'}}
                    >
                     Maps
                </NavLink>
            </NavLinkStyle>

            <p style={{color: '#ffffff'}}>{currentUser? `Cheers, ${currentUser.username}!` : ""}</p>
            <div>{currentUser?  (
                    <Button onClick={handleLogout}>Logout</Button>) : (
                    <NavLink to="/Login"><Button>Log In</Button></NavLink>)}
            </div> 
        </NavBar>
       
     )
}

export default NavigationBar