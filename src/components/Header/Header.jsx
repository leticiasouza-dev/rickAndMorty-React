import styled from "styled-components";
import logo from '../../assets/logo-black.svg'
import NavBar from "../Navbar/NavBar";

const ContainerHeader = styled.header`

`
const Imagem = styled.figure`

`

const Header = () => {
    return( 
        <ContainerHeader>
            <Imagem>
                <img src={logo} alt="" />
            </Imagem>

            <NavBar/>
        </ContainerHeader>
    )
}

export default Header;