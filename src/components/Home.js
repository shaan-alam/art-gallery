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

  const Body = () => {
    if (arts.arts.length > 0 && !arts.loading) {
      return <ImageGrid />;
    } else if (arts.loading) {
      return (
        <div className="h-full flex flex-col items-center justify-center font-bold text-lg text-center mx-auto py-3 rounded">
          <CircularProgress />
          <p className="mt-6 text-gray-500">Fetching Arts...</p>
        </div>
      );
    } else {
      return (
        <div className="rounded-lg text-center py-2 px-4 bg-red-300 text-red-800 font-bold">
          No arts to show !!
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container w-8/10 mx-auto my-10">
        <Body />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    arts: state.art,
  };
};

export default connect(mapStateToProps, { getArts })(Home);
