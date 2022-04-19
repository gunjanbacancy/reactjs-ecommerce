import React, { Component } from 'react';
import Greeting from './Greeting';

class Products extends Component {
  render() {
    const title = "Products Page";
    return <div>
      <Greeting greeting={title} />
      <p>This is Products page</p>
    </div>
  }
}

export default Products;