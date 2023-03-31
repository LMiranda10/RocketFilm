import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, MiniProfile } from "./styles";

export function Header() {
    return (
        <Container>
        <h1>RocketMovies</h1>

        <Input
        placeholder="Pesquisar pelo titulo"
        />

        <MiniProfile>
            <div>
                <Link className="Name" to="/profile">Rodrigo Gonçalves</Link>
                <Link className="Exit" href="/">Sair</Link>
            </div>

            <img src="https://github.com/LMiranda10.png" alt="Foto de perfil" />
        </MiniProfile>
    </Container>
    )
}