import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBjTezEMHRfCPNmGCWvLLfLDdCyUWZ7fUw",
  authDomain: "portfolio-builder-ed9e7.firebaseapp.com",
  projectId: "portfolio-builder-ed9e7",
  storageBucket: "portfolio-builder-ed9e7.firebasestorage.app",
  messagingSenderId: "745905636419",
  appId: "1:745905636419:web:0fb26c958d83fc8ca3c0f6",
  measurementId: "G-Z4T67QDKR3"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
