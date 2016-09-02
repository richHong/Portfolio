import React, { Component } from 'react';

class Slide extends Component {
  render(){
    return (
      <div id={ this.props.id } className="slide" name={ this.props.id }>
      <a className="up" href={ this.props.up }><i className="fa fa-arrow-up" aria-hidden="true"></i></a>
      <a className="home" href="#home"><i className="fa fa-home" aria-hidden="true"></i></a>
      <a className="down" href={ this.props.down }><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
          <div className="title">
            <h1>{ this.props.title }</h1>
            <br />
            <p>{ this.props.description }</p>
            <br />
            <span className='techStack'>{this.props.techStack.join(' • ')}</span>
            <br /><br/>
            <a href={ this.props.href } target="_blank">Live</a> | <a href={ this.props.github } target="_blank">Github</a>
          </div>
        <a href={ this.props.href } target="_blank">
          <img className={ this.props.picSide } src={ this.props.image } />
        </a>
      </div>
    )
  }
};

export default Slide;