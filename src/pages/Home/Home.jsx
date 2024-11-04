import * as S from './Style';
import styled from 'styled-components';
import { useEffect } from 'react';

import banner from '../../assets/bannerRickEMorty.svg'
import Banner from '../../components/Banner/Banner';

import ContainerDeCampos from '../../components/ContainerDeCampos/ContainerDeCampos';
import ContainerDeCards from '../../components/ContainerDeCards/ContainerDeCards';

import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';



const Main = styled.main`
    padding: 0 120px;
`

const Home = () => {
    const {data, fetchData} = useContext(DataContext);

    useEffect(() => {
        fetchData('character'); // Chamada correta do endpoint
        console.log(data)
      }, []);

    return (
        <Main>
            <Banner imagem={banner}/>

            <ContainerDeCampos/>

            <ContainerDeCards/>

        </Main>
    )
}

export default Home;