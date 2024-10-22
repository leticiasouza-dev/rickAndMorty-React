import styled from "styled-components";
import logo from '../../assets/logo-black.svg'
import menu from '../../assets/menu_24px.svg'

import NavBar from "../Navbar/NavBar";
import { useState } from "react";
import { useEffect } from "react";

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
        /* justify-content: space-between; */
    }

`
const Imagem = styled.figure`
`

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Capturando a largura do dispositivo

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);  // aqui retorna a largura atual da janela (dispositivo)
        };
    
        window.addEventListener('resize', handleResize); // sempre que mudar a dimensão do dispositivo muda o valor do estado
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return( 
        <ContainerHeader>
            <Imagem>
                <img src={logo} alt="" />
            </Imagem>

            { windowWidth < 430 ? (
                <Imagem>
                    <button>
                        <img src={menu} alt="" />
                    </button>
                </Imagem>
            )  : (
                <NavBar/>
            )

            }

            
        </ContainerHeader>
    )
}

export default Header;