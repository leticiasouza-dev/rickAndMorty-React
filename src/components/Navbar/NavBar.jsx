
import styled from "styled-components";

const Nav = styled.nav`
    width: 300px;
`

const Lista = styled.ul`
    display: flex;
    justify-content: space-evenly;

    padding: 0;
`
const Elemento = styled.li`
    list-style: none;

    a{
        color: black;
        text-decoration: none;
    }
`

const NavBar = () => {
    return(
        <Nav>
            <Lista>
                <Elemento>
                    <a href="">Characters</a> 
                </Elemento>
                <Elemento>
                    <a href="">Locations</a>    
                </Elemento>
                <Elemento>
                       <a href="">Episodes</a> 
                </Elemento>
            </Lista>
        </Nav>
    )
}

export default NavBar;