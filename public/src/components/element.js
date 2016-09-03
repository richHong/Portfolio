import React, { Component }  from 'react';
import Scroll, { Helpers }   from 'react-scroll';

class Element extends Component {
  render() {
    return (
      <div {...this.props}>
        {this.props.children}
      </div>
    );
  }
};

export default Helpers.Element(Element);