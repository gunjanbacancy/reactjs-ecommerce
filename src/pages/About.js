import React, { Component } from 'react';
import Greeting from './Greeting';

class About extends Component {
  render() {
    const title = "About Page";
    return <div>
      <Greeting greeting={title} />
      <p>This is testing page</p>
    </div>
  }
}

export default About;