import { connect } from "react-redux";
import Art from "./Art";

const ImageGrid = ({ arts }) => {
  const col1 = arts.slice(0, Math.floor(0.33 * arts.length));
  const col2 = arts.slice(
    Math.floor(0.33 * arts.length) + 1,
    Math.floor(0.66 * arts.length)
  );
  const col3 = arts.slice(Math.floor(0.66 * arts.length) + 1);

  return (
    <div className="art-grid">
      <div className="art-flex">
        {col1.map((art) => (
          <Art art={art} key={art.id} />
        ))}
      </div>
      <div className="art-flex">
      {col2.map((art) => (
        <Art art={art} key={art.id} />
      ))}
      </div>
      <div className="div-flex">
      {col3.map((art) => (
        <Art art={art} key={art.id} />
      ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arts: state.art.arts,
  };
};

export default connect(mapStateToProps)(ImageGrid);
