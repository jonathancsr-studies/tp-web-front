import React, {Component} from 'react'

import './widgets.css'

import Gallery from './widgets/gallery/Gallery'
import BoxText from './widgets/boxText/boxText'
import Board from './widgets/board/board'
import Count from './widgets/count/count'
let widgetsList;

class widgets extends Component
{
    componentDidMount(){

    }

    render(){
        return(
            <div className='containerWidgets' ref='containerWidgets'>
                <ul className="ul-widgets">
                    <li>
                        <Gallery></Gallery>
                    </li>
                    <li>
                        <BoxText></BoxText>
                    </li>
                    <li>
                        <Board></Board>
                    </li>
                    <li>
                        <Count></Count>
                    </li>
                </ul>
            </div>
        )
    }
}

export default widgets