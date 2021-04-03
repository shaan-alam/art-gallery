import { motion } from "framer-motion";

const Modal = ({ children }) => {
  return (
    <motion.div
      className="h-screen w-screen bg-black bg-opacity-50 fixed top-0 left-0 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
