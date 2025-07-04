// src/firebase/authFunctions.js
import { auth } from "./firebase";
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

const actionCodeSettings = {
  url: "http://localhost:3000/finishSignUp", // Replace with your deployed URL
  handleCodeInApp: true,
};

export async function sendMagicLink(email) {
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  window.localStorage.setItem("emailForSignIn", email);
}

export function checkIfLink(url) {
  return isSignInWithEmailLink(auth, url);
}

export async function completeSignIn(email, url) {
  const result = await signInWithEmailLink(auth, email, url);
  window.localStorage.removeItem("emailForSignIn");
  return result;
}
