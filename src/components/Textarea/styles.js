import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 275px;
    
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    color: ${({theme})=> theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin-top: 8px;
    margin-bottom: 40px;
    border-radius: 10px;
    padding: 12px;

    &::placeholder {
        color: ${({theme})=> theme.COLORS.GRAY_300};
        padding: 12px;
    }
`