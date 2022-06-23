import React, { Component } from 'react'
import Profile from './component/Profile';

export default class App extends Component {
  state = {
    show: true,
  };
  
  render() {
    let profileEl = this.state.show ? (
      <Profile />
    ) : (
      <div>Click the button to show profile</div>
    );

    let buttonText = this.state.show ? "hide" : "show";

    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {buttonText} 
        </button>

        
        {profileEl}
      </div>
    );
  }
}


