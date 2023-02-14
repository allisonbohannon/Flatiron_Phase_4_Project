import styled from "styled-components";


const NavBar = styled.nav`
    position: sticky; 
    top: 0; 
    right: 0; 
    height: 10vh; 
    width: 100%; 
    @media screen and (min-width):790px { 
        width: 60%
    };
    background-color: rgba(150,78,108,.95); 
    z-index:99; 
    display:flex; 
    flex-direction: row; 
    justify-content: space-around; 
    align-items: center;
`
export default NavBar