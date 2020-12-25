import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/RootReducer";
// import thunk from "redux-thunk";

// const middlewares = [thunk];

export const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => console.log(store.getState()));
