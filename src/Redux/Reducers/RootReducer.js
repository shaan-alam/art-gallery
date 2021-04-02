import AuthReducer from "./AuthReducer";
import ErrorReducer from "./ErrorReducer";
import ArtReducer from "./ArtReducer";
import { combineReducers } from "redux";

export default combineReducers({
  auth: AuthReducer,
  error: ErrorReducer,
  art: ArtReducer,
});
