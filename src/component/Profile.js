import React, { Component } from 'react'
import pic from './assets/boutheina.jpg'

export default class Profile extends Component {
    state = {
        fullName: "Maazaoui Boutheina",
        bio: "Dotée d'un sens de responsabilité et de créativité ", 
        profession: "Enseingante",
        imgSrc : {pic}, 
        count: 0,

    };

    componentDidMount() {
      this.myInterval = setInterval(() => {
        this.setState({
          count: this.state.count + 1,
        });
      }, 1000);
    }


  render() {
    let {count} = this.state;
    return (
      <div>

        <div>Counter: {count}s</div>
        <div>
          <img src={pic} alt="profile-pic" />
          <h1>{this.state.fullName}</h1>
          <h2>{this.state.bio}</h2>
          <h2>{this.state.profession}</h2>
        </div>
      </div>
    )
  }
}

