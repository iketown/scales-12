import React, { Component } from "react";
import Layout from "../../layout/Layout.jsx";
import { Image, Button } from "semantic-ui-react";
import firebase from "firebase/app";
import { uiConfig } from "../../utils/firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

export default class SignInScreen extends Component {
  state = {
    isSignedIn: false
  };
  handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(response => {
        console.log("signout response", response);
        this.setState({ isSignedIn: false });
      });
  };
  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user =>
        this.setState({ isSignedIn: !!user, userObj: user })
      );
  }
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  render() {
    if (!this.state.isSignedIn) {
      return (
        <Layout hideNav>
          <h1>please sign in</h1>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Layout>
      );
    }
    return (
      <Layout>
        <p>your name is {firebase.auth().currentUser.displayName}</p>
        <p>your uid is {firebase.auth().currentUser.uid}</p>
        <Image src={firebase.auth().currentUser.photoURL} size="small" />
        <Button onClick={this.handleSignOut}>Sign OUT</Button>
      </Layout>
    );
  }
}
