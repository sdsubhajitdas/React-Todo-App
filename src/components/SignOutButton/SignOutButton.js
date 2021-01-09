import React from "react";
import Button from "react-bootstrap/Button";
import { auth } from "../../firebase/firebase";

class SignOutButton extends React.Component {
  render() {
    return (
      <Button variant="outline-info" onClick={() => auth.signOut()}>
        Sign out
      </Button>
    );
  }
}

export default SignOutButton;
