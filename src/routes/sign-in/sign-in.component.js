import SignUp from "../../components/sign-up/sign-up.component";
import {
  signInWithGooglePopup,
  creaUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import React from "react";


export default function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creaUserDocumentFromAuth(user);
  };


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
     <SignUp/>
    </div>
  );
}
