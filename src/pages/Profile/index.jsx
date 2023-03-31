import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container,Form, ProfilePic } from "./styles";

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>

                    Voltar
                </Link>
            </header>

            <main>
                <Form>
                    <ProfilePic>
                        <label htmlFor="ProfilePic">
                            <FiCamera/>

                            <input 
                            type="file"
                            id="ProfilePic"
                            />
                        </label>
                    </ProfilePic>

                    <Input
                    icon={FiUser}
                    placeholder="Nome de usuário"
                    type="text"
                    />

                    <Input
                    icon={FiMail}
                    placeholder="E-mail"
                    type="mail"
                    />

                    <Input
                    icon={FiLock}
                    placeholder="Senha"
                    type="password"
                    />

                    <Input
                    icon={FiLock}
                    placeholder="Repita a senha"
                    type="password"
                    />

                    <Button title={"Salvar"}/>
                </Form>
            </main>
        </Container>
    )
}