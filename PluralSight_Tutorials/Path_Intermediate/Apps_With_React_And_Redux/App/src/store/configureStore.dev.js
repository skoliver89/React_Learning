import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

// I am referencing: https://github.com/coryhouse/react-slingshot/blob/master/src/store/configureStore.js
// to add Redux Dev Tools support to the code
function configureStore(initialState) {
  const middleware = [
    thunk,
    // Throw an error if state is mutated
    reduxImmutableStateInvariant()
  ];
  // Add support for Redux dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
}

export default configureStore;
