import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

const UploadModal = ({ setUploadModal }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const allowedTypes = ["image/png", "image/jpeg"];

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("");
    }, 5000);
  }, [successMsg]);

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
      if (e.keyCode === 27) {
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
  }, [setUploadModal]);

  // File handler => Checks if the image is of PNG / JPEG
  const fileHandler = (e) => {
    if (!allowedTypes.includes(e.target.files[0].type)) {
      setError("Image of only PNG and JPEG are allowed");
      setFile(null);
    } else {
      setError(null);
      setFile(e.target.files[0]);
    }
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
          <a href="#!" onClick={() => setUploadModal(false)}>
            <i className="fa fa-times"></i>
          </a>
        </header>
        <div className="modal-content-container">
          <div className="file-selector">
            {error && (
              <motion.div
                className="file-error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.div>
            )}
            {successMsg && (
              <motion.div
                className="file-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {successMsg}
              </motion.div>
            )}

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
          {file && (
            <ProgressBar
              file={file}
              setFile={setFile}
              setSuccessMsg={setSuccessMsg}
              setError={setError}
              setIsFileUploaded={setIsFileUploaded}
            />
          )}
          <div className="actions">
            {isFileUploaded && (
              <button className="primary-btn" onClick={() => setUploadModal(false)}>
                <i className="fa fa-check" aria-hidden="true"></i> Done
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UploadModal;
