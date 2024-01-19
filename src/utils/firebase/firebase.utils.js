import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqQXIExtfPO1T6HFVqccIo1Hwa4Y4arqI",
  authDomain: "crown-shopping-db-f640a.firebaseapp.com",
  projectId: "crown-shopping-db-f640a",
  storageBucket: "crown-shopping-db-f640a.appspot.com",
  messagingSenderId: "1097341196640",
  appId: "1:1097341196640:web:390b32428e6a014982e605",
};

const firebaseApp = initializeApp(firebaseConfig); //crud happens using firebaseApp

const provider = new GoogleAuthProvider(); //why new ? a class we get from firebase auth connected to google auth itself

provider.setCustomParameters({
  //the way auth provider should behave
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const creaUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists())

  //if user data exists
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth; 
    const createdAt = new Date(); //when the user is signing in
   
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }catch(error){
      console.log('error creating the user',error.message)
    }
    return userDocRef;
  }

  //if userdata doesn't exist ?  Create/ set the document with the data from userAuth in my collection

  //return userDocRef
};
