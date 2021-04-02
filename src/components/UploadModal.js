import { useState, useEffect } from "react";
import Modal from "./Modal";
import useStorage from "../Hooks/useStorage";
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion";


const uploadModalVariants = {
  initial: {
    opacity: 0,
    y: "30%",
  },
  animate: {
    opacity: 1,
    y: "0%",
  },
  exit: {
    opacity: 0,
    y: "30%",
  },
  transition: {
    type: "tween",
  },
};

const UploadModal = ({ setModal }) => {
  const [file, setFile] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);
  const { progress, error, url, setProgress, setError, setUrl } = useStorage(
    file
  );

  useEffect(() => {
    if (url) {
      // If the file is uploaded successfully,
      // reset all parameters
      setProgress(null);
      setError(null);
      setUrl(null);
      setFile(null);

      setSuccessMsg("Your Art has been uploaded sucessfully!!");
    }
  }, [url]);

  console.log(progress, error, url);

  const handleFile = (e) => {
    // Check for allowed image types
    const allowedTypes = ["image/jpeg", "image/gif", "image/png"];

    if (allowedTypes.includes(e.target.files[0].type)) {
      setFile(e.target.files[0]);
    } else {
      setError("Only GIF, JPEG and PNG files are allowed");
    }
  };

  return (
    <Modal>
      <motion.div
        className="upload-modal-container"
        variants={uploadModalVariants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <a href="#!" className="close-modal" onClick={() => setModal(false)}>
          <i className="fa fa-times"></i>
        </a>
        <h1>Upload an Art!</h1>
        {successMsg && (
          <motion.div
            className="alert-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {successMsg}
          </motion.div>
        )}
        {error && (
          <motion.div
            className="alert-error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}
        <div className="file-placeholder">
          <label htmlFor="file">
            <input type="file" id="file" onChange={handleFile} />
            <div className="file-box">
              <h3>{file ? file.name : "Select a file"}</h3>
            </div>
          </label>
        </div>
        {progress && <ProgressBar progress={progress} />}
      </motion.div>
    </Modal>
  );
};

export default UploadModal;
