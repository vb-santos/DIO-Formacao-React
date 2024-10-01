import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 30px;

    height: 62px;
    width: 20%;
    font-size: 16px;

    margin: 20px;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: transparent;
        transform: scale(1.01);
        color: white;
    }
`