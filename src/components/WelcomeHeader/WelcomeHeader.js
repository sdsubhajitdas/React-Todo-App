import React from "react";
import mm from "moment";

class WelcomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeName: "World",
      date: mm().format("MMMM Do YYYY, h:mm:ss a"),
    };
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.welcomeName}, welcome to your TODO app</h1>
        <h5>Date: {this.state.date}</h5>
      </div>
    );
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({ date: mm().format("MMMM Do YYYY, h:mm:ss a") }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default WelcomeHeader;
