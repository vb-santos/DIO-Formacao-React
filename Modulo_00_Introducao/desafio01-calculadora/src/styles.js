import styled from 'styled-components';
import fundo from './images/365661.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0 2px 10px #000000;
    width: 50%;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`