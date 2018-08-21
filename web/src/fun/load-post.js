import React from 'react';

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    let { id } = this.props;

    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );

    let json = await response.json();

    this.setState(json);
    this.test();
  }

  test() {
    console.log('hi');
  }

  render() {
    let { title, body } = this.state;
    console.log(this.state);
    if (!title) return 'Loading...';
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
