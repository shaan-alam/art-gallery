import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../Actions/ActionTypes";

const initialState = {
  currentUser: {},
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
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
}

export default AuthReducer;
