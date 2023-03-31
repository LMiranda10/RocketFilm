import styled from "styled-components";
import backgroundimg from "../../assets/backgroundimg.png";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: stretch;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    text-align: left;

    div:nth-child(4) {
        margin-bottom: 8px;
    }

    div:nth-child(5) {
        margin-bottom: 8px;
    }

    div:nth-child(6) {
        margin-bottom: 8px;
    }

    h1 {
        color: ${({theme})=>theme.COLORS.PINK};
        font-size: 48px;
    }

    p {
        font-size: 14px;
        color: ${({theme})=>theme.COLORS.GRAY_100};
        margin-bottom: 48px;
    }

    h2 {
        font-size: 24px;
        color: ${({theme})=>theme.COLORS.WHITE};
        margin-bottom: 48px;

    }

    a {
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.PINK};
        text-align: center;
        max-width: max-content;
        margin: 42px auto 0;
    }
`

export const SigninBackground = styled.div`
    flex: 1;
    background: url(${backgroundimg}) no-repeat center center;
    background-size: cover;
    filter: brightness(0.5);
`