import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 15px;

    > span {
        max-width: 121px;
        height: 24px;
        flex-direction: column;

        margin: 30px 8px 0 0;
        padding: 5px 16px;

        background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
        color: ${({theme})=>theme.COLORS.WHITE};
        border-radius: 10px;
    }
`