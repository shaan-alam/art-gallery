// Login
// Logout
// Sign up

import { AUTH_FAIL, AUTH_SUCCESS } from "./ActionTypes";

export const signup = (user) => {
  return {
    type: AUTH_SUCCESS,
    payload: user,
  };
};
