import React, { Component }  from 'react';
import Scroll, { Helpers }   from 'react-scroll';

class Link extends Component {
  render() {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    );
  }
};
export default Helpers.Scroll(Link);