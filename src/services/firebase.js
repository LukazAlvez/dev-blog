import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB4RGtVgCZ8ujRszupHOHxVgKQCILB5A34',
  authDomain: 'dev-blog-aea7d.firebaseapp.com',
  projectId: 'dev-blog-aea7d',
  storageBucket: 'dev-blog-aea7d.appspot.com',
  messagingSenderId: '381270601921',
  appId: '1:381270601921:web:6aca4f730c76b4c4c4e440',
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
