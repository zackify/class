import React from 'react';

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //this.setState({ title: 'First post' });
  }

  render() {
    let { posts } = this.state;
    let { description } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
}
