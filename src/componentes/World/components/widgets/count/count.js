import React, { Component } from 'react'
import './count.css'
import RetroHitCounter from 'react-retro-hit-counter';
import { getUserData } from '../../../../UserFunctions'
import { updateCountUser } from '../../../../UserFunctions'
const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
const userLogado = localStorage.usertoken == null ? -1 : jwt.decode(localStorage.usertoken).id;
const editavel = userId == userLogado ? true : false;


class count extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.findUserData();

  }

  findUserData = () => {

    const user = {
      id_user: userId
    }
    getUserData(user).then(res => {
      const user1 = {
        id_user: userId,
        count: res!=null && res.data != null ?  res.data.count + 1 : 1
      }
      updateCountUser(user1).then(res => {
        this.state.count = res!=null && res.data != null ?  res.data.count + 1 : 1
        this.forceUpdate();
      })
    })
  }

  componentDidMount() {
  }
  onChange(content) {
    console.log('onChange', content);
  }
  render() {
    return (
      <div className='count'>
        <RetroHitCounter
          hits={this.state.count}
          /* The following are all default values: */
          withBorder={true}
          withGlow={false}
          minLength={4}
          size={20}
          padding={4}
          digitSpacing={3}
          segmentThickness={4}
          segmentSpacing={0.5}
          segmentActiveColor="#76FF03"
          segmentInactiveColor="#315324"
          backgroundColor="#222222"
          borderThickness={3}
          glowStrength={0.5}
        />
      </div>
    )
  }
}

export default count