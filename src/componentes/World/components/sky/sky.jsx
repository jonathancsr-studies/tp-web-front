import React, { Component } from 'react'
import { skyType } from '../worldconstructor'
import './sky.css'
const textures = [
    "../../../static/sky.png"
]
class sky extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            userId : window.location.href.split('World')[1],
        }
    }
 
    
    componentDidMount() {
        const userId = this.state.userId;
        skyType(userId).then(res => {
            var sky = document.getElementById('sky')
            //sky.style.backgroundImage = textures[res.data.description]
        })
    }

    render() {
        return (
            <div ref='sky' id='sky'></div>
        )
    }
}

export default sky