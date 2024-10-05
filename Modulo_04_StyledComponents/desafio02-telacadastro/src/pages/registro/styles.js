import styled from "styled-components";

export const ContainerRegistro = styled.div`
    width: 100%;
    max-width: 80%; 

    margin: 0 auto;
    margin-top: 100px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

export const TituloEsquerda = styled.h1`
    font-size: 36px;
    color: #FFFFFF;
    width: 40%;
`

export const ColumnRegistro = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1{
        font-size: 36px;
        margin-bottom: 12px;
        color: #FFFFFF;
    }

    p{
        font-size: 16px;
        margin-bottom: 12px;
        color: #FFFFFF90;
    }

    form{
        width: 75%;
        margin: 30px 0;
    }
`

export const LoginText = styled.p`
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 700;

    span{
        color: #008800;
        cursor: pointer;
        
    }
`