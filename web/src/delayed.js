import React from 'react';

export default class Delayed extends React.Component {
  constructor() {
    super();
    this.state = { text: 'hello' };
  }

  render() {
    let { text } = this.state;

    console.log(text, 'rendered');

    let newText = 'bye';
    if (text === 'bye') newText = 'hello';

    return <div onClick={() => this.setState({ text: newText })}>{text}</div>;
  }
}
