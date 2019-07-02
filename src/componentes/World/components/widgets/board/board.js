import React, { Component } from 'react'
import './board.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getText } from '../../../../WorldFunctions'
import { saveText } from '../../../../WorldFunctions'
import placa from '../../../../static/placa.png'; 

const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
const userLogado = localStorage.usertoken == null ? -1 : jwt.decode(localStorage.usertoken).id;
const editavel = userId == userLogado ? true : false;


class board extends Component {

    constructor(props) {
        super(props)
        this.findText();
        this.state = {
            data: null
        }

    }

    findText = () => {

        const user = {
            id_user: userId
        }
        getText(user).then(res => {
            if (res.data.length == 0) {
                this.state.data = "<p>Adicione aqui suas principais anotações!</p><br/><strong><p>E customize como desejar. </p></strong> <br/><p></p><p></p>"
            } else {
                this.state.data = res.data[0].text;
                this.forceUpdate();
            }

        })

    }

    componentDidMount() {

    }
    onChange(content) {
        console.log('onChange', content);
    }
    render() {
        return (
            <div >
                <img class="imagem" src={placa} alt="Placa" />
                <div >
                    <textarea class="texto"   type="text" name="name" />
                </div>
            </div>

            )
        }
    }
    
export default board