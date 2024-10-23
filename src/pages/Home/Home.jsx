import Banner from '../../components/Banner/Banner';
import * as S from './Style';

import banner from '../../assets/bannerRickEMorty.svg'
import styled from 'styled-components';
import CampoDePesquisa from '../../components/CampoDePesquisa/CampoDePesquisa';
import CampoDeEscolha from '../../components/CampoDeEscolha/CampoDeEscolha';
import ContainerDeCampos from '../../components/ContainerDeCampos/ContainerDeCampos';

const Main = styled.main`
    padding: 0 120px;
`

const Home = () => {
    return (
        <Main>
            <Banner imagem={banner}/>

            <ContainerDeCampos/>

        </Main>
    )
}

export default Home;