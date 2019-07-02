import React, { Component } from 'react'
import './board2.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getText } from '../../../../WorldFunctions'
import { saveText } from '../../../../WorldFunctions'
import placa from '../../../../static/placa.png';
import { getUserData } from '../../../../UserFunctions'
const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
const userLogado = localStorage.usertoken == null ? -1 : jwt.decode(localStorage.usertoken).id;
const editavel = userId == userLogado ? true : false;


class board2 extends Component {

    constructor(props) {
        super(props)
        this.findUserData();
        this.state = {
            data: null,
            nameUser: null,
            msg: ""
        }

    }

    findUserData = () => {
        if (userId != null) {
            const user = {
                id_user: userId
            }
            getUserData(user).then(res => {
                console.log("#####USER######")
                console.log(user)
                this.state.nameUser = res.data.name
                this.state.msg = editavel ? "Seja bem vindo " + this.state.nameUser + "!" : "Seja bem vindo ao mundo de " + this.state.nameUser + "!"
                this.forceUpdate()
            })
        }


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
                <div class="texto" >
                    {this.state.msg}
                </div>
            </div>

        )
    }
}

export default board2