
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDhGgnDFQ8BzpzZRGrvSVN5ghOo78dXuVA",
  authDomain: "mkn-portfolio-dashboard.firebaseapp.com",
  projectId: "mkn-portfolio-dashboard",
  storageBucket: "mkn-portfolio-dashboard.appspot.com",
  messagingSenderId: "1014295769872",
  appId: "1:1014295769872:web:07d66a657c9646b3272b95",
  measurementId: "G-SDJTHRCSS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);