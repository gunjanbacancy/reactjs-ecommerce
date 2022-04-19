import React, { Component } from 'react';
import Greeting from './Greeting';

class Contact extends Component {
  render() {
    return <div>
      <Greeting greeting={"Welcome to Contact page!"}/>
      <p>Here is the testing page created by Clue Mediator.</p>
    </div>
  }
}

export default Contact;