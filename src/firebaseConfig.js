import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { v4 as uuidv4 } from "uuid";

// Your Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAwIN2cWNmZlb_jZBjhHeJVS3UymQAGc4M",
	authDomain: "vehicles-marketplace.firebaseapp.com",
	projectId: "vehicles-marketplace",
	storageBucket: "vehicles-marketplace.appspot.com",
	messagingSenderId: "775154818578",
	appId: "1:775154818578:web:d182643d23d2c6c0d182cb",
	measurementId: "G-5PT2T0VZB5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Pass the firebaseApp to getAuth
const storage = getStorage(firebaseApp); // Pass the firebaseApp to getStorage
const db = getFirestore(firebaseApp); // Pass the firebaseApp to getFirestore

export { auth, db, storage };
