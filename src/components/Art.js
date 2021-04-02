const Art = ({ art }) => {
  return (
    <div className="art">
      <div className="art-img">
        <img src={art.url} alt="An Art" />
      </div>
      <div className="uploaded-by">
        <img
          src={art.uploadedBy.photoURL}
          alt={art.uploadedBy.displayName}
          title={art.uploadedBy.displayName}
        />
        <p>{art.uploadedBy.displayName}</p>
      </div>
    </div>
  );
};

export default Art;
