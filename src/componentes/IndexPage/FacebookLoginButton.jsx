import React, { Component } from "react"
import FacebookLogin from 'react-facebook-login'
const jwt = require("jsonwebtoken")

class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''
    }

    componentClicked = () => console.log("clicked");

    responseFacebook = response => {
        console.log(response);
        localStorage.setItem('usertoken', response)
    }

    render() {
        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = null;
        } else {
            fbContent = (
                <FacebookLogin
                appId="1444530185671719"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                />
            )
        }
        return (<div>{fbContent}</div>)
    }
}

export default Facebook