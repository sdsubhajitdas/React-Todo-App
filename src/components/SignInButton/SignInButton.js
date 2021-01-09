import React from "react";
import Button from "react-bootstrap/Button";
import firebase from "firebase/app";
import { auth } from "../../firebase/firebase";

class SignInButton extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  render() {
    return (
      <Button variant="primary" size="lg" onClick={this.onButtonClick}>
        <i className="fab fa-google mr-3" />
        Sign in with Google
      </Button>
    );
  }

  onButtonClick() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
}

export default SignInButton;
