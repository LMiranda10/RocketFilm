import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar-thumb {
            background-color: ${({theme})=>theme.COLORS.GRAY_100};
        }
    
    > main {
        width: 100%;
        padding: 40px 125px 85px;
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
        
        > h1 {
            color: ${({theme})=>theme.COLORS.WHITE};
            margin: 25px 0 40px;

            text-align: left;      
        }

        > h3 {
            color: ${({theme})=>theme.COLORS.GRAY_100};
            font-size: 20px;
        }

        > a {
            text-decoration: none;

            color: ${({theme})=>theme.COLORS.PINK};

            svg {
                margin-right: 8px;
            }
        }

        .TitleNote {
            display: flex;
            gap: 40px;
            margin-bottom: 32px;
        }

        .markers {
            display: flex;
            gap: 25px;

            background-color: black;
            border-radius: 10px;
            
            padding: 16px;
            margin-top: 25px;
            margin-bottom: 40px;
        }

        .buttons {
            display: flex;
            gap: 40px;
        }

    }
`

export const BlackBtn = styled.button`
    width: 100%;
    background-color: black;
    color: #FF859B;


    height: 56px;
    border: none;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    &:disabled {
        opacity: 0.5;
    }
`