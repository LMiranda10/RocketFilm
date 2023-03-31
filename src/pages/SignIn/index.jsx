import { FiLock, FiMail } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

import { Container,Form, SigninBackground } from "./styles";

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
            
                <Input 
                placeholder="E-Mail"
                type="mail"
                icon={FiMail}
                />

                <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />

                <Button
                title={"Entrar"}
                />

                <Link to="/register">Criar conta</Link>
            </Form>

            <SigninBackground/>
        </Container>
    )
}