import styled from "styled-components";
// import logo from '../../assets/logo-black.svg'

const Card = styled.article`
    flex-grow: 1;

    border-radius: 4px;

    width: 240px;
    height: 244px;
`

const Figure = styled.figure`
    height: 65%;

    img{
        width: 100%;
        height: 100%;
    }
`

const CardPersonagem = ({logo ,name, species}) => {
    return(
        <Card>
            <Figure>
                <img src={logo} alt="" />
            </Figure>

            <h4>{name}</h4>
            <p>{species}</p>
        </Card>
    )
}

export default CardPersonagem;