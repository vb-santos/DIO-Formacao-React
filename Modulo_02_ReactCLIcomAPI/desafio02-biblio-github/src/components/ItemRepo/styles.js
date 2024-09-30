import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    display: block;

    h3{
        font-size: 32px;
        color: #5398F5;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        padding-bottom: 20px;
    }

    a{
        text-decoration: none;
        color: #FFF;
        transition: 0.2s ease-in-out;

        &:hover{
            color: #C5D5FA;
        }
    }

    button.remover {
        background-color: #FFF;
        margin-top: 10px;
        padding: 5px 10px;

        border: none;
        border-radius: 20px;

        color: #FF0000;
        cursor: pointer;

        transition: 0.2s ease-in-out;

        &:hover{
            transform: scale(1.01);
            background-color: #FF0000;
            color: #FFF;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`