import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { title } = this.state;
    console.log('header render');
    return (
      <header
        className="App-header"
        onClick={() => this.setState({ title: 'yooo' })}
      >
        <h1 className="App-title"> to {title}</h1>
      </header>
    );
  }
}

export default Header;
