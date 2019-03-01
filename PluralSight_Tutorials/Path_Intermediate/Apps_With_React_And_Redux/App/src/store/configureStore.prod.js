import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// I am referencing: https://github.com/coryhouse/react-slingshot/blob/master/src/store/configureStore.js
// to add Redux Dev Tools support to the code
function configureStore(initialState) {
  // Add support for Redux dev tools
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default configureStore;
