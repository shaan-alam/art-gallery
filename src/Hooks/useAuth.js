import { useState, useEffect } from "react";
import { auth } from "../firebase/config";

const useAuth = (email, password) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, []);

  return { user, error };
};

export default useAuth;
