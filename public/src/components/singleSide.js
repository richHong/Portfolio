import React, { Component } from 'react';

class SingleSide extends Component {
  render() {
    return (
      <div className='side-container'>
        <h2>{ this.props.sideName }</h2>
        <br/>
        <a href={ this.props.href } target="_blank"><img className='side-image' src={ this.props.sideImage } /></a>
        <br/>
        <p>{ this.props.description }</p>
        <br />
        <a href={ this.props.href } target="_blank">Live Demo</a> | <a href={ this.props.github } target="_blank">Github</a>
        <br/>
        <span className='techStack'>{ this.props.techStack.join(' • ') }</span>
      </div>
    );
  };
};
export default SingleSide;