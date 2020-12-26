import AuthReducer from "./AuthReducer";
import ErrorReducer from "./ErrorReducer";
import { combineReducers } from "redux";

export default combineReducers({ auth: AuthReducer, error: ErrorReducer });
