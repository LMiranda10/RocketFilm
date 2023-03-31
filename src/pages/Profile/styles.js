import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    header {
        width: 100%;
        height: 144px;

        display: flex;
        align-items: center;

        background-color: ${({theme})=>theme.COLORS.BACKGROUND_PINK};
        padding: 0 125px;

        a {
            color: ${({theme})=>theme.COLORS.PINK};
        }

        svg {
            margin-right: 8px;
        }
    }

    main {
        margin: 0 auto;
    }
`

export const Form = styled.form`
    max-width: 340px;
    margin: 0 auto;

    div:nth-child(2) {
        > svg {
            color: gray;
        }
        margin-bottom: 8px;
    }

    div:nth-child(3) {
        margin-bottom: 25px;
        > svg {
            color: gray;
        }
    }

    div:nth-child(4) {
        > svg {
            color: gray;
        }
        margin-bottom: 8px;
    }

    div:nth-child(5) {
        > svg {
            color: gray;
        }
        margin-bottom: 9px;
    }
`

export const ProfilePic = styled.div`
    width: 186px;
    height: 186px;

    border-radius: 50%;

    background-image: url("https://github.com/LMiranda10.png");
    background-size: cover;
    margin: 0 auto;
    position: relative;

    margin-bottom: 65px;
    margin-top: -90px;

    label {
        width: 45px;
        height: 45px;
        right: 0px;
        bottom: 0px;
        position: absolute;

        background-color: ${({theme})=> theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            color: ${({theme})=> theme.COLORS.BACKGROUND_900};
        }
    }

    
`