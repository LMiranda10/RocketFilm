import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 116px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px 125px;
    gap: 64px;

    h1 {
        font-size: 24px;
        color: ${({theme})=> theme.COLORS.PINK};
    }

    border-bottom-width: 1px;
    border-bottom-style:solid ;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
`

export const MiniProfile = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;

    > a {
        text-decoration: none;
    }

    .Name {
        color: ${({theme})=>theme.COLORS.WHITE};
        font-size: 14px;
        white-space: nowrap;
        line-height: 18px;
    }

    .Exit {
        color: ${({theme})=>theme.COLORS.GRAY_100};
        text-align: right;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    > img {
        width: 64px;
        height: 64px;

        border-radius: 50%;
    }
`