import { Container } from "./styles";
import { FiClock } from "react-icons/fi"

export function ProfileDate({url, name, date, time, ...rest }) {
    return (
        <Container {...rest}>
            <img src={url} alt="Foto de perfil" />

            <span>Por {name}</span>

            <FiClock size={16}/>

            <span>{date} às {time}</span>
        </Container>
    )
}