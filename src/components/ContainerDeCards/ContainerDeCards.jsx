import styled from "styled-components";
import CardPersonagem from "../CardPersonagem/CardPersonagem";

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;

    margin: 40px 0;
`

const ContainerDeCards = () => {
    return(
        <ContainerCards>
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
            <CardPersonagem/>
        </ContainerCards>
    )
}

export default ContainerDeCards;