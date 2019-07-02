import React, { Component } from "react"
import Modal from 'react-bootstrap/Modal'
import { CustomPicker } from 'react-color';
import ButtonColor from './buttonColor'
//import './../../IndexPage/'

class ColorPicker extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            color1: '',
            color2: '',
            color3: '',
            color4: '',
            color5: '',
            color6: '',
        };

    }

    onChange(e) {
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <>
                <Modal show={this.state.show}
                    onHide={this.handleClose} >
                    <Modal.Header closeButton >
                        <Modal.Title> Selecione as Cores </Modal.Title> 
                    </Modal.Header>
                    <Modal.Body>
                        < ButtonColor/>
                        < ButtonColor/>
                        < ButtonColor/>
                        < ButtonColor/>
                        < ButtonColor/>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default(ColorPicker)