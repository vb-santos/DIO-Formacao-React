import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;

    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;

    ${({variant}) => variant !== 'primary' && css`
        min-width: 167px;
        height: 33px;

        background: #E4105D;
        transition: 0.2s;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
        }

        &:after{
            content: '';
            border: 1px solid #E4105D;
            border-radius: 22px;
            
            position: absolute;
            top: -5px;
            left: -6px;

            width: calc(100% + 10px);
            height: calc(100% + 10px);
        }
    `}
`