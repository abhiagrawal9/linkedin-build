import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'AUTH_DOMAIN',
  projectId: 'PROJECT_ID',
  storageBucket: 'STORAGE_BUCKET',
  messagingSenderId: 'MESSAGE_SENDER_ID',
  appId: 'APP_ID',
};

// init firebase
initializeApp(firebaseConfig);

// init database service
const db = getFirestore();

// Init Auth Service
const auth = getAuth();

export { db, auth };
