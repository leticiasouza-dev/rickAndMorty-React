import styled from "styled-components";
import logo from '../../assets/logo-black.svg'
import NavBar from "../Navbar/NavBar";

const ContainerHeader = styled.header`
    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 120px;

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