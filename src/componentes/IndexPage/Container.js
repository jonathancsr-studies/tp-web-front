import React, { Component } from "react";

import BackgroundImg from './static/img8.jpg'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

class center extends Component {

    render() {
        return (
            <div className='conteudo'>
                <Container className="justify-content-md-center">
                    <Row>
                        <Col lg="7">
                            <img src={BackgroundImg} alt="Imagem 1" className='img-fluid rounded img-shadow' />
                        </Col>
                        <Col lg="4">
                            <h3 className='mb-3'>Sobre nós</h3>
                            <p>My universe LOL é um portal em que você pode exibir suas conquistas de League of Legends do seu jeito.
                                        Experimente e entre nesse Universo.</p>
                            <p>Aqui você pode criar um mundo e customiza-lo. Postar fotos e acontecimentos como campeonatos que você participou.
                                        Ver algumas estatísticas do jogo e seu perfil entre outras funcionalidades.</p>
                            <p>Para te acompanhar durante as aventuras no My Universol lol, você poderá escolher
                                        seu Poro preferido e controla-lo na navegação da sua página customizada.</p>


                        </Col>
                    </Row>
                </Container>
                <Container className="justify-content-md-center">
                    <Row>
                        <Col>
                            <br />
                            <h2>O que é League of Legends?</h2>
                            <p>League of Legends é um jogo online competitivo que mistura a velocidade e a
                                intensidade de um RTS com elementos de RPG. Duas equipes de poderosos campeões,
                                cada um com design e estilo único, lutam em diversos campos de batalha e modos de jogo.
                                Com um elenco de campeões em constante expansão, atualizações frequentes e uma cena competitiva
                                exuberante, League of Legends oferece diversão incessante para jogadores de todos os níveis de habilidade.
                                Junte-se à maior comunidade de jogos online: faça amigos, forme equipes e enfrente dezenas de milhões de oponentes
                                de países do outro lado do mundo, depois troque experiências no reddit, no YouTube, nos fóruns e onde mais quiser</p>
                            <br />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <br />
                            <h2>Curiosidades sobre os Poros</h2>
                 
                            <p>Apesar de que, em dado momento, animamos os poros
                                para cair de costas e tremer se esbarrassem nas fontes de Howling Abyss.
                                <br></br>
                                Os chifres de um poro se empinam quando eles estão empolgados, ou abaixam quando estão com medo.
                                <br></br>
                                Poros têm uma barriguinha em formato de coração porque são feitos de amor
                                <br></br>
                                A cor que melhor os descreve é “azul muito claro, como a neve de Freljord.
                                <br></br>
                                Poros são compostos por partes iguais de verdade, coragem e inocência.
                                <br></br>
                                Devido a feitos heroicos recentes, Braum é amigo dos poros .
                                <br></br>
                                Poros nadam pela neve profunda com suas patas dianteiras.
                                <br></br>
                                Poritos são recobertos de cristais de gelo de Freljord.
                                <br></br>
                                Há quem acredite que poros são indestrutíveis.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default center