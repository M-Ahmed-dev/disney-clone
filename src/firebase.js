import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCE1pDin6Ab74z8HJIcZWG_OYfKzPabDHA",
  authDomain: "disney-clone-61024.firebaseapp.com",
  projectId: "disney-clone-61024",
  storageBucket: "disney-clone-61024.appspot.com",
  messagingSenderId: "662545272160",
  appId: "1:662545272160:web:f9c6e533dc261e4fcde205",
  measurementId: "G-3RLX9CDB3M"
};
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;