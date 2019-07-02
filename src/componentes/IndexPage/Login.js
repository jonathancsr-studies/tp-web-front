import React, { Component } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link, withRouter } from 'react-router-dom'

import './loginAndRegister.css'
import Facebook from './FacebookLoginButton'
import { login } from "../UserFunctions"
import { userStatus } from "../World/components/widgets/cardProfile/cardUtils"
const jwt = require("jsonwebtoken")

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            email: '',
            password: '',
            show: false,
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.props.history.push('/World' + jwt.decode(localStorage.usertoken).id)
            }
        })
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return ( <
            >
            <
            Button variant = "secondary mrl-small textBlueColor buttons"
            onClick = { this.handleShow } >
            Login <
            /Button> <
            Modal show = { this.state.show }
            onHide = { this.handleClose } >
            <
            Modal.Header closeButton >
            <
            Modal.Title > Login < /Modal.Title> <
            /Modal.Header> <
            Modal.Body >
            <
            Form >
            <
            Form.Group controlId = "formBasicEmail" >
            <
            Form.Label > Email < /Form.Label> <
            Form.Control name = "email"
            value = { this.state.email }
            onChange = { this.onChange }
            type = "email"
            placeholder = "Enter email" / >
            <
            /Form.Group> <
            Form.Group controlId = "formBasicPassword" >
            <
            Form.Label > Senha < /Form.Label> <
            Form.Control name = "password"
            value = { this.state.password }
            onChange = { this.onChange }
            type = "password"
            placeholder = "Password" / >
            <
            /Form.Group> <
            Button variant = "primary center blueBackgroundColor textGoldColor"
            type = "submit" >
            <
            Link to = '/myWorld'
            onClick = { this.onSubmit } > LOGIN < /Link> <
            /Button> <
            Button variant = "primary center blueBackgroundColor textGoldColor"
            type = "submit" >
            <
            Link onClick = { this.userStatus } > teste < /Link> <
            /Button> <
            Facebook / >
            <
            /Form> <
            /Modal.Body> <
            /Modal> <
            />
        );
    }
}

export default withRouter(Login)