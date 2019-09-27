import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyCOGABI9qz9HSUjmzOTJBkL6VUvrAA_hss",
  authDomain: "github-issue-manager-31755.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = ()=>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            :
          </span>
        ) : (
          <div>You are not signed in</div>
        )}
      </div>
    )
  }
}

export default App