import React, { Component } from 'react'
import disableScroll from 'disable-scroll';

import Floor from './floor/floor'
import Sky from './sky/sky'
import Widgets from './widgets'
import Character from './../character/character'

import './world.css'

const userId = window.location.href.split('World')[1]

class world extends Component {
    

    componentDidMount(){
        disableScroll.on();
        var world = document.querySelector('body')
        world.style.overflowX ='hidden'
        world.style.overflowY ='hidden'
    }

    componentWillUnmount(){
        disableScroll.off();
        var world = document.querySelector('body')
        world.style.overflowX =''
        world.style.overflowY =''
   
    }

    render() {
        return (
            <div className='world' ref='world'>
                <Sky />
                <Widgets />
                <Floor />
                <Character/>
            </div>
        )
    }
}

export default world