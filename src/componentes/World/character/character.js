import React, { Component } from "react";
import './character.css';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: 0, widthFrame: 24, heightFrame: 32, speed: 1, srcX: 0, srcY: 0, posX: 0, posY: 0,
            mvRight: false, mvLeft: false, mvUp: false, mvDown: false, countAnim: 0
        };
        this.tick = this.tick.bind(this);
        this.paint = this.paint.bind(this);
        this.move = this.move.bind(this);
        // this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKey);
        document.addEventListener("keyup", this.handleKeyUp);
        //requestAnimationFrame(this.tick);
        this.tick();
    }
    componentWillUnmount() {
        // document.removeEventListener('keydown', handleKeyPress);
    }
    componentDidUpdate() {
        this.paint();
        this.move();
    }

    paint() {

        const context = this.refs.canvas.getContext("2d");
        var image = new Image();
        image.src = "https://i.imgur.com/abkQcYt.png";
        let width = window.screen.width;
        context.clearRect(0, 0, width, 500);
        context.save();

        context.drawImage(image, //Imagem de origem
            //Captura da imagem
            this.state.srcX, //Origem da captura no eixo X
            this.state.srcY, //Origem da captura no eixo Y
            this.state.widthFrame, //Largura da imagem que será capturada
            this.state.heightFrame, //Altura da imagem que será capturada
            //Exibição da imagem
            this.state.posX, //Posição no eixo X onde a imagem será exibida 
            this.state.posY, //Posição no eixo Y onde a imagem será exibida 
            this.state.widthFrame, //Largura da imagem a ser exibida 
            this.state.heightFrame //Altura da imagem a ser exibida 
        );
        context.restore();

    }

    move() {
        if (( (0.7895*window.screen.width) > this.state.posX && this.state.mvRight)) {
            this.state.posX = this.state.posX + 2;
            this.state.srcY = this.state.heightFrame * 3;
        }
        else if ((0 < this.state.posX && this.state.mvLeft)) {
            this.state.posX = this.state.posX - 2;
            this.state.srcY = this.state.heightFrame * 2;
        }
        /*else if (this.state.mvUp) {
            this.state.posY = this.state.posY - 2;
            this.state.srcY = this.state.heightFrame * 1;
        }
        else if (this.state.mvDown) {
            this.state.posY = this.state.posY + 2;
            this.state.srcY = this.state.heightFrame * 0;
        }*/

    };

    handleKey = e => {
        switch (e.keyCode) {
            case 39:
                this.state.mvRight = true;
                this.state.mvLeft = false;
                this.state.mvUp = false;
                this.state.mvDown = false;
                break;
            case 37:
                this.state.mvRight = false;
                this.state.mvLeft = true;
                this.state.mvUp = false;
                this.state.mvDown = false;
                break;
            /* case 38:
                 this.state.mvRight = false;
                 this.state.mvLeft = false;
                 this.state.mvUp = true;
                 this.state.mvDown = false;
                 break;
             case 40:
                 this.state.mvRight = false;
                 this.state.mvLeft = false;
                 this.state.mvUp = false;
                 this.state.mvDown = true;
                 break;*/
        }
        const mvRight = this.state.mvRight;
        const mvLeft = this.state.mvLeft;
        const mvUp = this.state.mvUp;
        const mvDown = this.state.mvDown;
        this.setState({ mvRight, mvLeft, mvUp, mvDown });


    }

    handleKeyUp = e => {

        switch (e.keyCode) {
            case 39:
                this.state.mvRight = false;
                break;
            case 37:
                this.state.mvLeft = false;
                break;
            /*case 38:
                this.state.mvUp = false;
                break;
            case 40:
                this.state.mvDown = false;
                break;*/
        }

        const mvRight = this.state.mvRight;
        const mvLeft = this.state.mvLeft;
        const mvUp = this.state.mvUp;
        const mvDown = this.state.mvDown;
        this.setState({ mvRight, mvLeft, mvUp, mvDown });
    }

    tick() {
        if (this.state.mvLeft || this.state.mvUp || this.state.mvRight || this.state.mvDown) {
            //Caso qualquer seta seja pressionada, o contador de animação é incrementado
            this.state.countAnim = this.state.countAnim + 1;
            if (this.state.countAnim >= 40) {
                this.state.countAnim = 0;
            }
            this.state.srcX = Math.floor(this.state.countAnim / 5) * this.state.widthFrame;
        }
        else {
            //Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
            this.state.srcX = 0;
            this.state.countAnim = 0;
        }


        const countAnim = this.state.countAnim;
        const posX = this.state.posX;
        const srcX = this.state.srcX;
        this.setState({ posX, countAnim, srcX });

        requestAnimationFrame(this.tick);
    }

    render() {
        return (
            <div className='div-style' >
                <canvas className='no-margin-and-padding full-height canvas'
                    ref="canvas"
                    width={window.screen.width}
                    height="80px"
                />
            </div>
        )
    }
}

export default Character