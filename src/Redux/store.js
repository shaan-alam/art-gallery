import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./Reducers/RootReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

export const store = createStore(rootReducer,   composeWithDevTools(applyMiddleware(...middlewares)));

store.subscribe(() => console.log(store.getState()));
