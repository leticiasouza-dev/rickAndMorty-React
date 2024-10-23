import styled from "styled-components";
import NavBar from "../Navbar/NavBar";

const ModalContainer = styled.div`
    /* background-color: red; */

    height: 80vh;

    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 20px;

    display: flex;
    justify-content: center;
`

const ListaModal = styled.ul`
height: 50%;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    justify-content: space-around;

    padding: 0;
`

const ElementoModal = styled.li`
    list-style: none;

    a{
        color: black;
        text-decoration: none;
    }
`

const ModalResponsivo = () => {
    return(
        <ModalContainer>
            <ListaModal>
                <ElementoModal>
                    <a href="">Characters</a>
                </ElementoModal>

                <ElementoModal>
                    <a href="">Locations</a>
                </ElementoModal>

                <ElementoModal>
                    <a href="">Episodes</a>
                </ElementoModal>
            </ListaModal>
        </ModalContainer>

    )
}

export default ModalResponsivo;