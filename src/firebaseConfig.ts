// Import the functions you need from the SDKs you need

export type FirebaseType = {
  apiKey: string | undefined;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_NOT_FIREBASE_KEY,
  authDomain: "codibly-project.firebaseapp.com",
  projectId: "codibly-project",
  storageBucket: "codibly-project.appspot.com",
  messagingSenderId: "624571737224",
  appId: "1:624571737224:web:c8e2c4a98031eae342ab3d",
  measurementId: "G-KYPJMPCHCQ"
};
