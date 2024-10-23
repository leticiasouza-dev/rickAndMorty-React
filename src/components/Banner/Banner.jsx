import styled from "styled-components";


const ContainerBanner = styled.main`
    display: flex;
    justify-content: center;
`

const Banner = ({imagem}) => {
    return(
        <ContainerBanner>
            <img src={imagem} alt="Banne5r" />
        </ContainerBanner>
    )
}

export default Banner;