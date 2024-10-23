import styled from "styled-components";
import lupa from '../../assets/iconeLupa.svg';

const ContainerCampo = styled.div`
    width: 20%;

    display: flex;
    align-items: center;
    flex-grow: 1;

    padding: 15px 15px;

    border: 1px solid #a39e9e;
    border-radius: 9px;
`

const CampoTexto = styled.input`
    width: 100%;

    border: none;
    outline: none;
`

const IconeLupa = styled.img`
    padding-right:9px ;
`

const CampoDePesquisa = ({placeholder}) => {
    return(
        <ContainerCampo>
            <IconeLupa src={lupa} alt="" />
            <CampoTexto type="text" placeholder={placeholder}/>
        </ContainerCampo>
    )
}


export default CampoDePesquisa;