import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import apiCallsInProgress from "./ajaxStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
