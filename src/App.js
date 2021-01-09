import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import WelcomeHeader from "./components/WelcomeHeader/WelcomeHeader";
import AddItem from "./components/AddItem/AddItem";
import ItemList from "./components/ItemList/ItemList";
import SignInButton from "./components/SignInButton/SignInButton";
import { AuthContext } from "./context/AuthContextProvider";

class App extends React.Component {
  render() {
    if (this.context) {
      return (
        <>
          <WelcomeHeader displayName={this.context.displayName} />
          <Container className="mt-4 ">
            <Row className="justify-content-md-center">
              <Col>
                <AddItem />
              </Col>
            </Row>
            <Row className="justify-content-md-center mt-4">
              <Col>
                <ItemList />
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return (
        <Container>
          <Row className="middle-fullscreen">
            <Col className="text-center">
              <SignInButton />
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

App.contextType = AuthContext;
export default App;
