import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_USER,
} from "../Actions/ActionTypes";

const initialState = {
  currentUser: null,
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
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: {},
      };

    default:
      return state;
  }
}

export default AuthReducer;
