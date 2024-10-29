import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAm2kikbSqz3Emia50-GLnHUQ9EXGIun5c",
  authDomain: "blog-site-92bb7.firebaseapp.com",
  projectId: "blog-site-92bb7",
  storageBucket: "blog-site-92bb7.appspot.com",
  messagingSenderId: "125275506129",
  appId: "1:125275506129:web:3939fbecbfea2f9318ccf0",
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { db, auth }
