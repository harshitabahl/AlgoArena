import React, { useEffect, useState } from "react";
import { completeSignIn, checkIfLink } from "../firebase/authFunctions";
import { useNavigate } from "react-router-dom";

export default function FinishSignUp() {
  const [message, setMessage] = useState("Finishing sign in...");
  const navigate = useNavigate();

  useEffect(() => {
    const completeLogin = async () => {
      const url = window.location.href;

      if (!checkIfLink(url)) {
        setMessage("Invalid or expired sign-in link.");
        return;
      }

      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        const enteredEmail = window.prompt("Enter your email to complete sign in:");
        if (!enteredEmail) {
          setMessage("Email is required.");
          return;
        }
        window.localStorage.setItem("emailForSignIn", enteredEmail);
        email = enteredEmail;
      }

      try {
        await completeSignIn(email, url);
        setMessage("✅ Sign-in successful! Redirecting...");
        setTimeout(() => navigate("/"), 1500);
      } catch (error) {
        setMessage(`❌ Sign-in failed: ${error.message}`);
      }
    };

    completeLogin();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
}
