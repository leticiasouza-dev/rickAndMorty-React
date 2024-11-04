import styled from "styled-components";
import logo from '../../assets/logo-black.svg'

const Card = styled.article`
    flex-grow: 1;
    background-color: red;

    border-radius: 4px;

    width: 240px;
    height: 244px;
`

const Figure = styled.figure`
    /* margin: 0;
    padding: 0; */
    background-color: blue;
    height: 65%;

    img{
        width: 100%;
        height: 100%;
    }
`

const CardPersonagem = () => {
    return(
        <Card>
            <Figure>
                <img src={logo} alt="" />
            </Figure>

            <h4></h4>
            <p></p>

        </Card>
    )
}

export default CardPersonagem;