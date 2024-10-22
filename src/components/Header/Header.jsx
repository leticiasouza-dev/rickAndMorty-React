import styled from "styled-components";
import logo from '../../assets/logo-black.svg'
import menu from '../../assets/menu_24px.svg'

import NavBar from "../Navbar/NavBar";
import { useState } from "react";
import { useEffect } from "react";
import ModalResponsivo from "../ModalResponsivo/ModalResponsivo";

const ContainerHeader = styled.header`
    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 120px;

    @media screen and (max-width: 430px){
        padding: 0;
    }

`
const Imagem = styled.figure`
`

const Botao = styled.button`

`

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Capturando a largura do dispositivo
    const [botaoClicado, setBotaoClicado] = useState(false);

    const handleClick = () => {
        setBotaoClicado(!botaoClicado);
    }

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);  // aqui retorna a largura atual da janela (dispositivo)
        };
    
        window.addEventListener('resize', handleResize); // sempre que mudar a dimensão do dispositivo muda o valor do estado
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return( 
        <>
        <ContainerHeader>
            <Imagem>
                <img src={logo} alt="" />
            </Imagem>

            { windowWidth < 430 ? (
                <Botao onClick={handleClick}>
                    <img src={menu} alt="" />
                </Botao>
            )  : (
                <NavBar/>
            )

            }
        </ContainerHeader>

        {botaoClicado && (
            <ModalResponsivo/>
        )}
        </>
        
    )
}

export default Header;