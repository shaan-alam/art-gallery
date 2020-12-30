import { useEffect } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import ImageGrid from "./ImageGrid";
import { getArts } from "../Redux/Actions/ArtActionCreator";
import { connect } from "react-redux";

const Home = ({ getArts }) => {
  useEffect(() => {
    getArts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <ImageGrid />
      </div>
    </>
  );
};

export default connect(null, { getArts })(Home);
