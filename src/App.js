import React, { Component } from "react";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

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
      <main>
        <div className="App">
       
      </div>
      <h2>
        Git issue manager listing!
      </h2>
      {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <hi>Welcome {firebase.auth().currentUser.displayName}</hi>
            :
          </span>
        ) : (
          <StyledFirebaseAuth
          uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()} />
        )}
      <p>
        This project was bootstrapped with Create React App and contains
        three directories, <code>/public</code> for static assets<code>/src</code>
        for components and content.
      </p>
      </main>

    )
  }
}

export default App