import styled from "styled-components";

const NavLinkStyle = styled.div`
    font-family: verdana; 
    font-weight: bold; 
    list-style-type: none;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {    
    margin: 0px 10px;
    }
    a:link { text-decoration: none; }
    a:active {color: rgb(208,161,190)}
`
export default NavLinkStyle