import React from "react";
import { auth } from "../firebase/firebase";

export const AuthContext = React.createContext();

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: auth.currentUser,
    };
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.currentUser}>
        {!this.state.loading && this.props.children}
      </AuthContext.Provider>
    );
  }

  componentDidMount() {
    this.authUnsubscribe = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user, loading: false });
    });
  }

  componentWillUnmount() {
    clearInterval(this.authUnsubscribe);
  }
}

export default AuthContextProvider;
