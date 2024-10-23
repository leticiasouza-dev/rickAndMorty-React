import styled from "styled-components";


const ContainerBanner = styled.main`
    display: flex;
    justify-content: center;

    margin: 15px 0;
`

const Banner = ({imagem}) => {
    return(
        <ContainerBanner>
            <img src={imagem} alt="Banner" />
        </ContainerBanner>
    )
}

export default Banner;