import { Link } from "react-router-dom";
import { Input } from "../Input";
import { Container, MiniProfile } from "./styles";

export function Header() {
    return (
        <Container>
            
            <Link className="logo" to="/"><h1>RocketMovies</h1></Link>

        <Input
        placeholder="Pesquisar pelo titulo"
        />

        <MiniProfile>
            <div>
                <Link className="Name" to="/profile">Luan Miranda</Link>
                <Link className="Exit" href="/">Sair</Link>
            </div>

            <Link className="profile-img" to="/profile"><img src="https://github.com/LMiranda10.png" alt="Foto de perfil" /></Link>
        </MiniProfile>
    </Container>
    )
}