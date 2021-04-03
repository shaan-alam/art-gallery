import { motion } from "framer-motion";

const ProgressBar = ({ progress }) => {
  return (
    <div className="h-2 rounded-lg my-3">
      <motion.div
        className="bg-indigo-700 h-full rounded-lg"
        style={{ width: `${progress}%` }}
      ></motion.div>
      {/* <p>Uploading {progress}%</p> */}
    </div>
  );
};

export default ProgressBar;
