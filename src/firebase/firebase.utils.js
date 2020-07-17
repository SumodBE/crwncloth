import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBru3k7zOeAF4mLKquQd-hTcM5-7PfhCSc",
    authDomain: "crown-db-28202.firebaseapp.com",
    databaseURL: "https://crown-db-28202.firebaseio.com",
    projectId: "crown-db-28202",
    storageBucket: "crown-db-28202.appspot.com",
    messagingSenderId: "608518803451",
    appId: "1:608518803451:web:43e273a49f45c85c89c55e",
    measurementId: "G-V4M8XNC3G6"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData

            })
        }
        catch(error){
            console.log("error creating user", error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
