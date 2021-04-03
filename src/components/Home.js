import { useEffect } from "react";
import Navbar from "./Navbar";
import ImageGrid from "./ImageGrid";
import { getArts } from "../Redux/Actions/ArtActionCreator";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = ({ getArts, arts }) => {
  useEffect(() => {
    getArts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container w-8/10 mx-auto my-10">
        {arts.length > 0 ? (
          <ImageGrid />
        ) : (
          <div className="h-full flex flex-col items-center justify-center font-bold text-lg text-center mx-auto py-3 rounded">
            <CircularProgress />
            <p className="mt-6 text-gray-500">Fetching Arts...</p>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    arts: state.art.arts,
  };
};

export default connect(mapStateToProps, { getArts })(Home);
