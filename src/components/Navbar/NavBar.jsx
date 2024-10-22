
import styled from "styled-components";

const Nav = styled.nav`

`

const Lista = styled.ul`

`
const Elemento = styled.li`

`

const NavBar = () => {
    return(
        <Nav>
            <Lista>
                <Elemento>Characters</Elemento>
                <Elemento>Locations</Elemento>
                <Elemento>Episodes</Elemento>
            </Lista>
        </Nav>
    )
}

export default NavBar;