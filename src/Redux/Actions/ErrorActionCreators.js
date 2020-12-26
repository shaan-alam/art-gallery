import { GET_ERRORS, CLEAR_ERRORS } from "./ActionTypes";

export const getErrors = (err) => {
  return {
    type: GET_ERRORS,
    payload: err,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
