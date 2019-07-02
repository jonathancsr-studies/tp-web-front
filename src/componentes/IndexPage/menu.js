import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import { Link, withRouter } from 'react-router-dom'

import './loginAndRegister.css'
import Register from './Register'
import Login from './Login'
import logo from './static/logo.png'

const jwt = require("jsonwebtoken")

class menu extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    loginLogo(){
        this.props.history.push('/World'+ jwt.decode(localStorage.usertoken).id)
    }

    render() {
        if (!localStorage.usertoken) {
            return (
                <>
                    <Navbar fixed="top" className="justify-content-between" bg="dark" variant="dark">
                        <Navbar.Brand><Link className='textGoldColor' to='/'><img className='logo' src={logo} /></Link></Navbar.Brand>
                        <Navbar.Brand >
                            <Register />
                            <Login />
                        </Navbar.Brand>
                    </Navbar>
                    <br />
                </>
            )
        } else
            return (
                <>
                    <Navbar fixed="top" className="justify-content-between" bg="dark" variant="dark">
                        <Navbar.Brand><Link className='textGoldColor' onClick={this.loginLogo}><img className='logo' src={logo} /></Link></Navbar.Brand>
                        <Navbar.Brand >
                            <Button className='textGoldColor' variant="primary blueBackgroundColor marginCenter textGoldColor" type="submit">
                                <Link to='/' onClick={this.logOut.bind(this)}>
                                    Logout </Link>
                            </Button>
                        </Navbar.Brand>
                    </Navbar>
                    <br />

                </>
            )
    }
}
export default withRouter(menu)