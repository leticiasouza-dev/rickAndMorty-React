import Banner from '../../components/Banner/Banner';
import * as S from './Style';

import banner from '../../assets/bannerRickEMorty.svg'
import styled from 'styled-components';

const Main = styled.main`

`

const Home = () => {
    return (
        <Main>
            <Banner imagem={banner}/>
        </Main>
    )
}

export default Home;