
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDhGgnDFQ8BzpzZRGrvSVN5ghOo78dXuVA",
  authDomain: "mkn-portfolio-dashboard.firebaseapp.com",
  projectId: "mkn-portfolio-dashboard",
  storageBucket: "mkn-portfolio-dashboard.appspot.com",
  messagingSenderId: "1014295769872",
  appId: "1:1014295769872:web:07d66a657c9646b3272b95",
  measurementId: "G-SDJTHRCSS0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);