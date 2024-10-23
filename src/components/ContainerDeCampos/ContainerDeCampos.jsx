import styled from "styled-components";
import CampoDePesquisa from "../CampoDePesquisa/CampoDePesquisa";
import CampoDeEscolha from "../CampoDeEscolha/CampoDeEscolha";

const ContainerDosCampos = styled.div`
    display: flex;

    justify-content: space-between;
`

const ContainerDeCampos = () => {
    return (
        <ContainerDosCampos>
            <CampoDePesquisa placeholder="Filtrar pelo Nome...."/>
            <CampoDeEscolha/>
            <CampoDeEscolha/>
            <CampoDeEscolha/>
        </ContainerDosCampos>
    )
}

export default ContainerDeCampos;