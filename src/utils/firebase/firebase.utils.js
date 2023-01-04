import { initializeApp } from 'firebase/app'

import {
    signInWithEmailAndPassword,
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAOIQyfQ20cuYGUiyCcd3wVCOPhcIDvqmQ",
    authDomain: "ecommerce-5034f.firebaseapp.com",
    projectId: "ecommerce-5034f",
    storageBucket: "ecommerce-5034f.appspot.com",
    messagingSenderId: "322454700021",
    appId: "1:322454700021:web:39d45d554ca0ed4a72eabc"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const googleprovider = new GoogleAuthProvider();

  googleprovider.setCustomParameters({
     prompt: "select_account"
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);
   
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async(userAuth,additionalInformation={}) => {
       if(!userAuth) return;
       const userDocRef = doc(db, 'users', userAuth.uid);
       
       const userSnapshot = await getDoc(userDocRef);

       if(!userSnapshot.exists()){
          const { displayName ,email } = userAuth;
          const createdAt = new Date();

          try{
              await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation
              });
          }catch(error){
            console.log("Error occured at creating user",error.message);
          }
       }

       return userDocRef;
       
  };

  export const createAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password);

  }

  export const signInAuthUserWithEmailAndPassword = async(email,password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password);

  }
