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
      <div className="container">
        <Header />
        {arts.length > 0 ? (
          <ImageGrid />
        ) : (
          <div
            className="alert-error"
            style={{ textAlign: "center", margin: "3rem 0" }}
          >
            No arts to show!!! 😶😶{" "}
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
