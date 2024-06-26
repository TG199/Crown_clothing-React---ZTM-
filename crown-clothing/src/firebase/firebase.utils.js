import firebase  from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBrXalMfMpcVuIbuXI7VtIFMYELEd6WpMQ",
    authDomain: "crown-db-99b4b.firebaseapp.com",
    projectId: "crown-db-99b4b",
    storageBucket: "crown-db-99b4b.appspot.com",
    messagingSenderId: "546515365078",
    appId: "1:546515365078:web:6069b820193bdd16db2d77",
    measurementId: "G-VSYSS3L4MJ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => 
{
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle  = () => auth.signInWithPopup(provider)

export default firebase;