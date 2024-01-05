import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
const firebaseConfig = {
   apiKey: "AIzaSyDglPJJ03n3KzNZShvsk9RawtZJklQIH84",
  authDomain: "video-app-42281.firebaseapp.com",
  projectId: "video-app-42281",
  storageBucket: "video-app-42281.appspot.com",
  messagingSenderId: "1054700515988",
  appId: "1:1054700515988:web:f70d036d931919d6a8ba81"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
