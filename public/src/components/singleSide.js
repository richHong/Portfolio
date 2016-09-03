import React, { Component } from 'react';

class SingleSide extends Component {
  render() {
    return (
      <div className='side-container'>
        <h2>{ this.props.sideName }</h2>
        <br/>
        <img className='side-image' src={ this.props.sideImage } />
        <br/>
        <span>{ this.props.description }</span><br/>
        <a href={ this.props.href } target="_blank">Live Demo</a>
      </div>
    );
  };
};
export default SingleSide;