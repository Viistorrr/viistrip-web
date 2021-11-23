import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../clientApp";
import { getAuth, GithubAuthProvider } from "firebase/auth";

// Configure FirebaseUI.
const uiConfig = {
  // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/",
  // GitHub as the only included Auth Provider.
  // You could add and configure more here!
  signInOptions: [GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen() {
  return (
    <div>
      <h1>viiStrip Login</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth} />
    </div>
  );
}

export default SignInScreen;
