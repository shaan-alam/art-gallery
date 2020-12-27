import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./firebase/config";

export default function PrivateRoute({ component: Component, ...rest }) {
  const currentUser = auth.currentUser;

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
