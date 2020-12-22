import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { storage, db } from "../firebase/config";
import firebase from "firebase";
import { motion } from "framer-motion";

const UploadModal = ({ setUploadModal }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const allowedTypes = ["image/png", "image/jpeg"];

  useEffect(() => {
    // To attach an event listener to window to close modal when clicked outside the modal content or pressed ESC key

    // When clicked outside the modal, close the modal
    const closeModalWhenClickedOutside = (e) => {
      if (e.target.classList.contains("modal-backdrop")) {
        setUploadModal(false);
      }
    };

    // Close modal if escape key is pressed
    const closeModalIfEscPressed = (e) => {
      if (e.keyCode == 27) {
        setUploadModal(false);
      }
    };

    window.addEventListener("click", closeModalWhenClickedOutside);
    window.addEventListener("keydown", closeModalIfEscPressed);

    // Cleanup function
    return () => {
      window.removeEventListener("click", closeModalWhenClickedOutside);
      window.removeEventListener("keydown", closeModalIfEscPressed);
    };
  }, []);

  // File handler => Checks if the image is of PNG / JPEG
  const fileHandler = (e) => {
    const file = e.target.files[0];

    if (!allowedTypes.includes(file.type)) {
      setError("Please select the image type as PNG or JPEG");
      setFile(null);
    } else {
      setError("");
      setFile(file);
    }
  };

  const uploadFile = () => {
    // Create a storage ref
    const storageRef = storage.ref(file.name);

    // File uploadation
    storageRef.put(file).then(
      (snapshot) => {
        let percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent);
      },
      (err) => {
        if (err) setError(err);
      },
      async () => {
        const URL = await storageRef.getDownloadURL();

        // Set the success message
        setSuccessMsg("Your file has been uploaded successfully");

        // Save the uploaded file data in the Firestore Database
        db.collection("images").add({
          url: URL,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
    );
  };

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <header>
          <h1>Upload a Picture</h1>
        </header>
        <div className="file-selector">
          {error && <div className="file-error">{error}</div>}
          {successMsg && <div className="file-success">{successMsg}</div>}

          <label>
            <input type="file" onChange={fileHandler} />
            <div className="file-placeholder">
              {file ? (
                <h1>{file.name}</h1>
              ) : (
                <h1>
                  <i className="fa fa-upload" aria-hidden="true"></i> Select A
                  file
                </h1>
              )}
            </div>
          </label>
        </div>
        {progress && <ProgressBar progress={progress} />}
        <div className="actions">
          <button className="danger-btn" onClick={() => setUploadModal(false)}>
            Cancel
          </button>
          <button className="primary-btn" onClick={uploadFile}>
            <i className="fa fa-upload" aria-hidden="true"></i> Upload
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UploadModal;
