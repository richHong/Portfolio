import React, { Component } from 'react';

class Sides extends Component {
  render() {
    return (
      <div id='sides' className='slide'>
        <a className="up" href="#slide3"><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
        <a className="home" href="#home"><i className="fa fa-home" aria-hidden="true"></i></a>
        <a className="down" href="#aboutme"><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
        <h1>Side Projects</h1>
       
      </div>
    );
  }
};
export default Sides;