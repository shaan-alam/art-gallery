import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  console.log(progress);
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
