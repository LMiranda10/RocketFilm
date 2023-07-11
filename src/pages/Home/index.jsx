import { FiStar } from "react-icons/fi";
import { RiAddLine, RiStarFill } from "react-icons/ri";
import { Generos } from "../../components/PreviewGerneros";

import { Header } from "../../components/Header";
import { Card, Container, AddMovie } from "./styles";
import { Link } from "react-router-dom";

export function Home() {
    return (
        <Container>

            <Header/>

            <main>

            <div className="title">
                <h2>Meus Filmes</h2>

                <AddMovie to="/newmovie">

                    <RiAddLine size={30}/>

                    Adicionar Filme

                </AddMovie>
            </div>

            <Link to="/preview">
                <Card>
                    <h3>Interestelar</h3>

                    <div className="stars">
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <FiStar/>
                        
                    </div>

                    <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>

                    <Generos/>
                </Card>
            </Link>

            <Link to="/preview">
                <Card>
                        <h3>Interestelar</h3>

                    <div className="stars">
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <FiStar/>
                        
                    </div>

                    <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>

                    <Generos/>
                </Card>
            </Link>

            <Link to="/preview">
                <Card>
                        <h3>Interestelar</h3>

                    <div className="stars">
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <RiStarFill/>
                        <FiStar/>
                        
                    </div>

                    <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...</p>

                    <Generos/>
                </Card>
            </Link>

            </main>
         </Container>
    )
}