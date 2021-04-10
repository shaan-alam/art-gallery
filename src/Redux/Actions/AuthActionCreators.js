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
  SET_IS_AUTHENTICATING,
  CLEAR_ARTS,
} from "./ActionTypes";

export const setIsAuthenticating = (isAuthenticating) => {
  return {
    type: SET_IS_AUTHENTICATING,
    payload: isAuthenticating,
  };
};

export const setUser = (redirect) => (dispatch) => {
  dispatch(setIsAuthenticating(true));

  auth.onAuthStateChanged((user) => {
    if (user) {
      // Redirect to the home page
      redirect();

      dispatch({ type: SET_USER, payload: user });
    } else {
      dispatch(setIsAuthenticating(false));
    }
  });
};

export const logout = (redirect) => (dispatch) => {
  auth
    .signOut()
    .then(() => {
      dispatch({ type: CLEAR_ARTS });
      dispatch({ type: LOGOUT_SUCCESS });
      redirect();
    })
    .catch(() => {
      dispatch({ type: LOGOUT_FAIL });
    });
};

export const signupWithEmailAndPassword = (
  email,
  username,
  password,
  redirect,
  disableLoading
) => (dispatch) => {
  // Set is authenticating to true
  dispatch(setIsAuthenticating(true));

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Disable form loading
      disableLoading();

      result.user
        .updateProfile({ displayName: username })
        .then(() => {
          dispatch({
            type: AUTH_SUCCESS,
            payload: result.user,
          });
        })
        .then(() => {
          // Reirect the user to homepage
          redirect();
        });
    })
    .catch((err) => {
      // Disable form loading
      disableLoading();

      dispatch({
        type: AUTH_FAIL,
        payload: err.message,
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

export const signInWithEmailAndPassword = (
  email,
  password,
  redirect,
  disableLoading
) => (dispatch) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Disable form loading
      disableLoading();

      dispatch({ type: LOGIN_SUCCESS, payload: result.user });

      redirect();
    })
    .catch((err) => {
      disableLoading();
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};
