import { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ImageGrid from "./ImageGrid";
import { getArts } from "../Redux/Actions/ArtActionCreator";
import { connect } from "react-redux";

const Home = ({ getArts, arts }) => {
  useEffect(() => {
    getArts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container w-8/10 mx-auto my-10">
        {/* <Header /> */}
        {arts.length > 0 ? (
          <ImageGrid />
        ) : (
          <div className="bg-gray-400  font-bold text-lg text-center mx-auto py-3 rounded">
            No arts to show!!! 
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
