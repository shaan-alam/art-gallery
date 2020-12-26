// Login
// Logout
// Sign up
import { auth } from "../../firebase/config";
import firebase from "firebase";

import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  SET_USER,
} from "./ActionTypes";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const logout = (redirect) => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
      redirect();
    })
    .catch(() => {
      dispatch({ type: LOGOUT_FAIL });
    });
};

export const signupWithEmailAndPassword = (email, password, redirect) => (
  dispatch
) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      dispatch({
        type: AUTH_SUCCESS,
        payload: user,
      });

      // Redirect the user to homepage
      redirect();
    })
    .catch((err) => {
      dispatch({
        type: AUTH_FAIL,
        payload: err,
      });
    });
};

export const signupWithGoogle = (redirect) => (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: result.user,
      });

      // redirect to user home page
      redirect();
    })
    .catch((err) => {
      dispatch({
        type: AUTH_FAIL,
        payload: err,
      });
    });
};

export const signInWithEmailAndPassword = (email, password, redirect) => (
  dispatch
) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      dispatch({ type: LOGIN_SUCCESS, payload: result.user });

      redirect();
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};
