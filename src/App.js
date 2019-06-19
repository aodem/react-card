import React from 'react';
import Card from './components/ecomCard';
import styled from 'styled-components';

const numArr = ['01', '02', '03', '04', '05'];

const AppStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    align-content: space-around;
    width: 100%;
    height: 100%;
`;

const ProdCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

}

const App = () => {
    return (
        <ProdCont>
            <AppStyle>
                    <Card />
            </AppStyle> 
        </ProdCont>           
    )
}

export default App