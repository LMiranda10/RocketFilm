import { FiStar } from "react-icons/fi";
import { RiStarFill } from "react-icons/ri";
import { Container } from "./styles";

export function PreviewTitle({title}) {
    return (
        <Container>
            <h1>{title}</h1>

            <div>
                <RiStarFill size={20}/>
                <RiStarFill size={20}/>
                <RiStarFill size={20}/>
                <RiStarFill size={20}/>
                <FiStar size={20}/>
            </div>
        </Container>
    )
}