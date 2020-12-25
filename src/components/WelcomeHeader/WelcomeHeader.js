import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarLogo from "../../images/navbarLogo.png";

import mm from "moment";

class WelcomeHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInName: "Guest",
      date: mm().format("MMM Do YYYY, h:mm:ss a"),
    };
  }

  render() {
    return (
      <Navbar expand="xl" bg="dark" variant="dark" className="pt-1 pb-1">
        <Container>
          <Navbar.Brand>
            <img
              src={NavbarLogo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              alt=""
            />
            Todo Application
          </Navbar.Brand>
          <Navbar.Text>{this.state.date}</Navbar.Text>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as: {this.state.loggedInName}</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.setState({ date: mm().format("MMM Do YYYY, h:mm:ss a") }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default WelcomeHeader;
