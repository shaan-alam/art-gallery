import { useState, useEffect } from "react";
import { storage, db } from "../firebase/config";
import firebase from "firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Create a reference in the storage bucket
    const storageRef = storage.ref(file.name);

    // Upload file to the reference
    storageRef.put(file).on(
      "state_changed",
      (snapshot) => {
        let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.floor(percent));
      },
      (err) => {
        // if any error
        setError(err);
      },
      () => {
        storageRef.getDownloadURL().then((url) => {
          // Set the url state
          setUrl(url);

          // Saving the uploaded file data in the database
          db.collection("images").add({
            url,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
