import { useState } from "react";
import { auth } from "../firebase/config";

const useAuthentication = () => {
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const sendPasswordResetEmail = async (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setSuccessMsg("Check your inbox for further details!!");
        return { error, successMsg };
      })
      
      .catch((err) => {
        setError(err);
      });
  };

  return { sendPasswordResetEmail };
};

export default useAuthentication;
