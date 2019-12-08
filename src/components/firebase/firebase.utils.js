import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config= {
    
        apiKey: "AIzaSyDtixoqXT5iNV_gzRgJc7y9UvrRinM9i7U",
        authDomain: "crown-db-bd316.firebaseapp.com",
        databaseURL: "https://crown-db-bd316.firebaseio.com",
        projectId: "crown-db-bd316",
        storageBucket: "crown-db-bd316.appspot.com",
        messagingSenderId: "592576449630",
        appId: "1:592576449630:web:31daaef68017093ed2f8cf",
        measurementId: "G-F7ZEMGTGHE"
    };   
      // Initialize Firebasw 

//code to store the user login info from authentication section of firebase to database section of fire base. Mainly creating the document.
//userauth is the authentication object with many properties.
export const createUserProfileDocument= async (userauth, additionalData) => {
  //if userauth is null we wont store in db
  if (!userauth) return;
  //create a reference object to userauth 
  const userRef=firestore.doc(`user/${userauth.uid}`);
  //taking snapshot or fetching the data from the doc 
  const snapshot= await userRef.get();
  console.log(snapshot);
  //use of exists method of docref object to check for any data, if data is not found create the document//
  if(!snapshot.exists) {
    const {displayName, email} = userauth;
    const createdAt=new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }
      )

    } catch(error) {
      console.log('error creatin user' +error.message);


    };
    
  }
  return userRef;
};
firebase.initializeApp(config);
export const auth= firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
