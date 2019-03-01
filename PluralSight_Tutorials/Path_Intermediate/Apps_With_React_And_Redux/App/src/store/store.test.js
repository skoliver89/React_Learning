import expect from "expect";
import { createStore } from "redux";
import rootReducer from "../reducers";
import initialState from "../reducers/initialState";
import * as courseActions from "../actions/courseActions";

// Automated Testing for the Redux Store
// NOTE: this is not unit testing (it requires some dependencies) we are simply testing the store system.
describe("Store", () => {
  it("Should handle creating courses", () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    };

    //act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    const expected = {
      title: "Clean Code"
    };
    expect(actual).toEqual(expected);
  });
});
