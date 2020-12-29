import { useState, useEffect } from "react";
import { storage, db, auth } from "../firebase/config";
import firebase from "firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (file !== null) {
      // Create a reference for the file to be uploaded in the bucket & firestore
      const storageRef = storage.ref(file.name);
      const collectionRef = db.collection("art");

      // File Upload
      storageRef.put(file).on(
        "state_changed",
        (snapshot) => {
          let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.floor(percent));
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await storageRef.getDownloadURL();
          setUrl(url);

          const { uid, displayName, photoURL } = auth.currentUser;

          collectionRef.add({
            url,
            uploadedBy: { uid, displayName, photoURL },
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
      );
    }
  }, [file]);

  return { progress, error, url, setProgress, setError, setUrl };
};

export default useStorage;
