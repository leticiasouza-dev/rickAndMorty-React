import Banner from '../../components/Banner/Banner';
import * as S from './Style';

import banner from '../../assets/bannerRickEMorty.svg'
import styled from 'styled-components';
import CampoDePesquisa from '../../components/CampoDePesquisa/CampoDePesquisa';
import CampoDeEscolha from '../../components/CampoDeEscolha/CampoDeEscolha';

const Main = styled.main`
    padding: 0 120px;
`

const Home = () => {
    return (
        <Main>
            <Banner imagem={banner}/>

            <CampoDePesquisa placeholder='Digite aqui a sua pesquisa'/>
        <CampoDeEscolha/>

        </Main>
    )
}

export default Home;