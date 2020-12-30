import { connect } from "react-redux";
import Art from "./Art";

const ImageGrid = ({ arts }) => {
  return (
    <div className="art-grid">
      {arts.map((art) => (
        <Art art={art} key={art.id} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arts: state.art.arts,
  };
};

export default connect(mapStateToProps)(ImageGrid);
