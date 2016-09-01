import React, { Component } from 'react';

class Front extends Component {
  render(){
    return (
      <div id="title" className="slide header">
        <h1>Richard Hong</h1>
        <br/>
        <img className='profilePic' src='../assets/richard1.png' />
        <h4>Full-stack Software Engineer</h4>
      </div>
    );
  }
};
export default Front;