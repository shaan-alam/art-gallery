const Art = ({ art }) => {
  return (
    <div className="art">
      <div className="img-container"></div>
      <div className="art-info">
        <div className="uploadedd-by">
          <img
            src={art.uploadedBy.photoURL}
            alt={art.uploadedBy.displayName}
            title={art.uploadedBy.displayName}
          />
          <p>{art.uploadedBy.displayName}</p>
        </div>
        <div className="created-at">
          <p>{art.createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Art;
