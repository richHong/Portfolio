import React, { Component } from 'react';

class Front extends Component {
  render(){
    return (
      <div id="title" className="slide header">
      <a className="down" style={{'font-size':'110%'}} href='#slide1'><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
        <h1>Richard Hong</h1>
        <br/>
        <img className='profile-pic' src='../assets/richard.png' />
        <br/>
        <h4>Full-stack Software Engineer</h4>
      </div>
    );
  };
};
export default Front;