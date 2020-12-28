import { useState } from "react";
import Modal from "./Modal";

const UploadModal = ({ setModal }) => {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Modal setModal={setModal}>
      <div className="upload-modal-container">
        <a href="#!" className="close-modal" onClick={() => setModal(false)}>
          <i className="fa fa-times"></i>
        </a>
        <h1>Upload an Art!</h1>
        <div className="file-placeholder">
          <label htmlFor="file">
            <input type="file" id="file" onChange={handleFile} />
            <div className="file-box">
              <h3>{file ? file.name : "Select a file"}</h3>
            </div>
          </label>
        </div>
        <button className="btn-primary">Done</button>
      </div>
    </Modal>
  );
};

export default UploadModal;
