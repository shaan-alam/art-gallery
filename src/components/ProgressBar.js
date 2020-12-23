import { useEffect } from "react";
import { motion } from "framer-motion";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({
  file,
  setFile,
  setSuccessMsg,
  setError,
  setIsFileUploaded,
}) => {
  const { progress, url, error } = useStorage(file);

  useEffect(() => {
    if (error) {
      setError(error);
    }

    if (url) {
      setFile(null);
      setIsFileUploaded(true);
      setSuccessMsg("Your file has been uploaded successfully!!");
    }
  }, [error, url]);

  return (
    <div className="progress-bar">
      <p>Uploading {progress}%</p>
      <motion.div
        className="progress-width"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
    </div>
  );
};

export default ProgressBar;
