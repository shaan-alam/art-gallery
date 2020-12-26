import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors } from "./Redux/Actions/ErrorActionCreators";

// Custom components here
import Signup from "./components/Signup";
import Home from "./components/Home";

const App = ({ error, clearErrors }) => {
  useEffect(() => {
    setTimeout(() => {
      clearErrors();
    }, 5000);
  }, [error]);

  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error.error,
  };
};

export default connect(mapStateToProps, { clearErrors })(App);
