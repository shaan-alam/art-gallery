import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { motion } from "framer-motion";

const ImgGrid = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    db.collection("images")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setDocs(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
  }, []);

  return (
    <div className="container">
      <h3>Newly Uploaded</h3>
      <div className="img-grid">
        {docs.map((doc) => (
          <motion.div className="img" key={doc.id} layout>
            <motion.img
              src={doc.url}
              alt="Pic"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImgGrid;
