import React, { Component } from 'react';

class SingleSkill extends Component {
  render() {
    return (
      <div className='side-container'>
        <img className='side-image' src={ this.props.sideImage } />
        <h4>{ this.props.sideName }</h4>
        <p>{ this.props.description }</p>
        <a href={ this.props.href } target="_blank">Live</a> | <a href={ this.props.github } target="_blank">Github</a>
      </div>
    );
  };
};
export default SingleSkill;