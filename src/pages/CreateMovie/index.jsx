import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Marker } from "../../components/Markers";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button"

import { FiArrowLeft } from "react-icons/fi";

import { Container, BlackBtn } from "./styles";
import { Link } from "react-router-dom";

export function CreateMovie() {
    return (
        <Container>
            <Header/>

            <main>
                <Link to="/">
                    <FiArrowLeft/>

                    Voltar
                </Link>

                <h1>Novo Filme</h1>

                <div className="TitleNote">
                    <Input
                    placeholder="Título"
                    type="text"
                    />

                    <Input
                    placeholder="Sua nota(0 a 5)"
                    type="text"
                    />
                </div>

                <Textarea
                placeholder="Observações"

                />


                <Section title={"Marcadores"}>
                    <Marker placeholder="React"/>
                    <Marker placeholder="Novo Marcador" isNew/>
                </Section>

                <Section>
                    <Button title="Salvar alterações"/>
                    <BlackBtn>
                        Excluir filme
                    </BlackBtn>
                </Section>
            </main>
        </Container>
    )
}