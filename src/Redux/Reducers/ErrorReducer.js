import {
  GET_ERRORS,
  CLEAR_ERRORS,
  AUTH_FAIL,
  LOGIN_FAIL,
  LOGOUT_FAIL,
} from "../Actions/ActionTypes";

const initialState = {
  error: null,
};

const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_FAIL:
    case LOGIN_FAIL:
    case LOGOUT_FAIL:
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default ErrorReducer;
