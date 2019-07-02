import React, { Component } from 'react'

import './floor.css'

//let textureSrc = "../../../static/flor_1.png";

class flor extends Component {

    componentDidMount() {
 //       const floor = this.refs.floor;
 //       floor.style.background= '"../../../static/flor_1.png"';
    }

    render() {
        return (
            <div ref='floor' className='floor'></div>
        )
    }
}

export default flor