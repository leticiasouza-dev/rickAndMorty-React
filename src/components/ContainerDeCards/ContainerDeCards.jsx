import styled from "styled-components";
import CardPersonagem from "../CardPersonagem/CardPersonagem";

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 50px;

    margin: 40px 0;
`

const ContainerDeCards = ({data}) => {
    return(
        <ContainerCards>
            {data && data.results ? (data.results.map((personagem) => (
                <CardPersonagem 
                    key={personagem.id} 
                    name={personagem.name} 
                    species={personagem.species} 
                    logo={personagem.image} 
                />
                ))
                ) : (
                <p>Carregando...</p>
                )
            }
        </ContainerCards>
    )
}

export default ContainerDeCards;