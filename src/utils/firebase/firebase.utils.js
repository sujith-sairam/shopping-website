import { initializeApp } from 'firebase/app'

import {
    signInWithEmailAndPassword,
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
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
  const firebaseApp = initializeApp(firebaseConfig);

  const googleprovider = new GoogleAuthProvider();

  googleprovider.setCustomParameters({
     prompt: "select_account"
  });

  export const auth = getAuth(firebaseApp);

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);
   
  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) =>{
       const collectionRef = collection(db,collectionKey);
       const batch = writeBatch(db);

       objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object);
       });

       await batch.commit();
       console.log("Done");
  };

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
    return categoryMap
  }

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

  export const signOutUser = async () => await  signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth,callback);
