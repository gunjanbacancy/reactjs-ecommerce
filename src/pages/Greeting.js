import React, { Component } from 'react';
 
class Greeting extends Component {
  render() {
    return <h3>{this.props.greeting}</h3>;
  }
}
 
export default Greeting;