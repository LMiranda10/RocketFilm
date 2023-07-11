import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    > main {
        width: 100%;
        margin: 0 auto;
        padding: 40px 125px;

        h2 {
            color: ${({theme})=>theme.COLORS.WHITE};
        }

        .title {
            display: flex;
            align-items: center;

            justify-content: space-between;
            margin-bottom: 40px;
            
        }

        overflow-y: auto;
        ::-webkit-scrollbar-thumb {
            background-color: ${({theme})=>theme.COLORS.GRAY_100};
            border-radius: 10px;
        }

        ::-webkit-scrollbar-track {
            background-color: black;
            border-radius: 10px;
        }

        ::-webkit-scrollbar {
            width: 10px;
            height: 100%;
        }
    }
`

export const Card = styled.div`
    width: 100%;
    padding: 32px;
    margin-bottom: 25px;

    border-radius: 10px;

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_PINK};
    color: ${({theme})=>theme.COLORS.GRAY_100};

    a {
        color: ${({theme})=>theme.COLORS.WHITE};
        margin-bottom: 8px;
        font-size: 24px;
    }

    h3 {
        font-size: 24px;
        font-weight: bold;
        color: #F4EDE8;
    }

    p {
        font-size: 16px;
    }


    > .stars {
        margin-bottom: 15px;
    }


    .generos {
        margin-top: 30px;
        margin-bottom: 15px;

        >span {
            max-width: 121px;
            height: 24px;
            flex-direction: column;

            margin: 30px 8px 0 0;
            padding: 5px 16px;

            background-color: ${({theme})=>theme.COLORS.BACKGROUND_800};
            color: ${({theme})=>theme.COLORS.WHITE};
            border-radius: 10px;
        }
    }
`;

export const AddMovie = styled(Link) `
    width: 210px;
    background-color: ${({theme})=>theme.COLORS.PINK};
    color: #1C1B1E;

    height: 56px;
    border: none;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    display: flex;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }

    >svg {
        color: #1C1B1E;
        margin-right: 10px;
    }
`