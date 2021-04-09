import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_USER,
  SET_IS_AUTHENTICATING,
} from "../Actions/ActionTypes";

const initialState = {
  currentUser: null,
  isAuthenticating: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        currentUser: {},
      };

    case AUTH_SUCCESS:
    case LOGIN_SUCCESS:
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticating: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
      };

    case SET_IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.payload,
      };
    default:
      return state;
  }
}

export default AuthReducer;
