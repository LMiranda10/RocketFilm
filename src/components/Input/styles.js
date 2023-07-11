import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
    color: ${({theme})=>theme.COLORS.GRAY_300};



    border-radius: 10px;

    display: flex;
    text-align: center;
    align-items: center;

    input {
        color: ${({theme}) => theme.COLORS.GRAY_100};
        background: transparent;
        border: 0;

        border: none;
        font-size: 16px;
        font-family: 'Roboto Slab', serif;

        padding: 16px;
        width: 100%;
    }

    >svg {
            margin-left: 16px;
        }
`