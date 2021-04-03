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
        className="bg-white rounded-md px-8 py-2 relative h-1/2 w-1/2"
        variants={uploadModalVariants}
        initial="initial"
        animate="animate"
        transition="transition"
        exit="exit"
      >
        <a
          href="#!"
          className="absolute top-2 right-5 text-black"
          onClick={() => setModal(false)}
        >
          <i className="fa fa-times"></i>
        </a>
        <h1 className="text-center text-indigo-700 my-7 text-3xl font-bold">
          Upload an Art!
        </h1>
        {successMsg && (
          <motion.div
            className="bg-green-300 text-green-800 py-2 rounded-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {successMsg}
          </motion.div>
        )}
        {error && (
          <motion.div
            className="bg-red-300 text-red-800 py-2 rounded-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        )}
        <div className="h-1/2 my-4 w-full border-dashed border-4 border-gray-400 flex flex-col justify-center items-center hover:border-gray-700 cursor-pointer">
          <label htmlFor="file">
            <h3 className="text-gray-600 text-center font-bold text-xl mt-6">
              {file ? file.name : "+ Select a file"}
            </h3>
            <input
              type="file"
              id="file"
              className="invisible"
              onChange={handleFile}
            />
          </label>
        </div>
        {progress && <ProgressBar progress={progress} />}
      </motion.div>
    </Modal>
  );
};

export default UploadModal;
