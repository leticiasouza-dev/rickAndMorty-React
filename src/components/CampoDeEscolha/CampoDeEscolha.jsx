import styled from "styled-components";

const FormularioDeEscolha = styled.form`
    width: 20%;

    display: flex;
    align-items: center;


    padding: 15px 15px;

    border: 1px solid #a39e9e;
    border-radius: 9px;
`

const Selecao = styled.select`
     border: none;
     outline: none;
     margin: auto;
`

const Opcao = styled.option`

`

const CampoDeEscolha = () => {
    return(
        <FormularioDeEscolha>
            <Selecao>
                <Opcao value="">Species</Opcao>
                <Opcao value="Human">Human</Opcao>
                <Opcao value="Alien">Alien</Opcao>
            </Selecao>
        </FormularioDeEscolha>
    )
}

export default CampoDeEscolha;