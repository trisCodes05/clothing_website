import React from 'react'
import { signInWithGooglePopup, creaUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


export default function SignIn() {
    const logGoogleUser = async () => {
        const {user} =  await signInWithGooglePopup();
        const userDocRef = await creaUserDocumentFromAuth(user)
    }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
      Sign In with Google
      </button>
    </div>
  )
}
