import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > main {
        padding: 40px 125px 85px;

        > a {
            color: ${({theme})=>theme.COLORS.PINK};

            svg {
                margin-right: 8px;
            }
        }

        p {
            margin-top: 40px;
            color: #F4EDE8;
        }
    }
`

