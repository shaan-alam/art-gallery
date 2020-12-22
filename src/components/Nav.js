import { useState } from "react";
import UploadModal from "./UploadModal";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const [uploadModal, setUploadModal] = useState(false);

  return (
    <nav>
      <div className="container">
        <h3>Art Gallery</h3>
        <div className="actions">
          <button className="primary-btn" onClick={() => setUploadModal(true)}>
            <i className="fa fa-upload" aria-hidden="true"></i> Upload
          </button>
          <AnimatePresence>
            {uploadModal && <UploadModal setUploadModal={setUploadModal} />}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
