import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { clearErrors } from "./Redux/Actions/ErrorActionCreators";

// Custom components here
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoute";

const App = ({ error, clearErrors }) => {
  useEffect(() => {
    setTimeout(() => {
      clearErrors();
    }, 5000);
  }, [error]);

  return (
    <Switch>
      <PrivateRoute path="/" component={Home} exact />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.error.error,
  };
};

export default connect(mapStateToProps, { clearErrors })(App);
