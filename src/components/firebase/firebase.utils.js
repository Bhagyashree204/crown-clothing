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
firebase.initializeApp(config);
export const auth= firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle= () => auth.signInWithPopup(provider);

export default firebase;
