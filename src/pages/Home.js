import React, { Component } from 'react';
import Greeting from './Greeting';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }


  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }

  render() {
    return <div>
      <Greeting greeting={"Welcome to home page!"}/>
      <p>Here is the testing page created by Clue Mediator.</p>

      <div>
          <h2>Props in React JS</h2>
          <Greeting greeting={"Welcome to home page!"}/>
        </div>
        <hr></hr>

        <div>
          <h2>State in React JS</h2>
          <button onClick={this.handleIncrement}>Click to increment by 1</button>
          <button onClick={this.handleDecrement}>Click to decrease by 1</button>
          <h3>{this.state.counter}</h3>
        </div>
        <hr></hr>
      
        <h2>Lorem ipsum dolor</h2>
        <h5>quam pellentesque, Dec 10, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Nisi vitae suscipit..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum. Ornare aenean euismod elementum nisi quis eleifend quam.</p>
        <br />
        <h2>Placerat vestibulum</h2>
        <h5>elementum integer enim neque, Sep 21, 2018</h5>
        <div className="fakeimg" style={{ height: 200 }}>Image</div>
        <p>Bibendum est ultricies..</p>
        <p>Semper quis lectus nulla at. Nullam ac tortor vitae purus faucibus ornare suspendisse. Nunc faucibus a pellentesque sit. Risus quis varius quam quisque id diam vel quam elementum.</p>

    </div>
  }
}

export default Home;