import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800 };
    color: ${({theme}) => theme.COLORS.GRAY_300 };

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none' };

    margin-top: 8px;
    border-radius: 10px;
    /* padding:12px; */

    > button {
        border:none;
        background: none;
        margin-right:12px;
    }

    .button-delete {
        color:red;
    }

    .button-add {
        color:orange;
    }

    > input {
        height:100%;
        width: 100%;

        padding:24px;

        color: ${({theme})=>theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({theme})=>theme.COLORS.GRAY_300};
        }
    }
`