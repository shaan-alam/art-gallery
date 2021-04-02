import { connect } from "react-redux";
import Art from "./Art";
import { motion } from "framer-motion";

const ImageGrid = ({ arts }) => {
  return (
    <motion.div className="art-grid" layout>
      {arts.map((art) => (
        <Art art={art} key={art.id} />
      ))}
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    arts: state.art.arts,
  };
};

export default connect(mapStateToProps)(ImageGrid);
