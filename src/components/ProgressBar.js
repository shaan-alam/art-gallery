import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar-container">
      <motion.div
        className="progress"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
      ></motion.div>
      <p>Uploading {progress}%</p>
    </div>
  );
};

export default ProgressBar;
