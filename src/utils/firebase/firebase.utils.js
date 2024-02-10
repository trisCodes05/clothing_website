import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});

  return categoryMap;
};

export const creaUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date(); //when the user is signing in

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    return userDocRef;
  }

  //if userdata doesn't exist ?  Create/ set the document with the data from userAuth in my collection

  //return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// export const SignAuthUserOut =  async()=>{
//   signOut(auth).then(()=>{
//     console.log("signed out")
//   }).catch((error)=>{
//     console.log("error signig out",error )
//   })
// } my method

export const signAuthUserOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback); //like a watchman , always listening or watching
