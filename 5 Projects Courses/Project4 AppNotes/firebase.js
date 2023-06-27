import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzqArOsRiGf2MPyMLsiK-hmCKqV8AC1PQ",
  authDomain: "noteapp-4091d.firebaseapp.com",
  projectId: "noteapp-4091d",
  storageBucket: "noteapp-4091d.appspot.com",
  messagingSenderId: "637754597474",
  appId: "1:637754597474:web:2d13038e188e0a6ce8f13b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
