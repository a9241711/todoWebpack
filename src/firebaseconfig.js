import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGDOQC0AEoC_OjBYd5k3KTUBTN5zC88_k",
  authDomain: "todowebpack.firebaseapp.com",
  projectId: "todowebpack",
  storageBucket: "todowebpack.appspot.com",
  messagingSenderId: "993082092527",
  appId: "1:993082092527:web:826448a7f7630f7d6ee41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
