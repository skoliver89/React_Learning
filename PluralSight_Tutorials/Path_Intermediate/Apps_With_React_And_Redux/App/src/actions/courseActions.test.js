import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
// Imports to test thunks
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

//configure mock store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Course Actions", () => {
  // Test a sync action
  describe("Sync Actions", () => {
    describe("createCourseSuccess", () => {
      it("should create a CREATE_COURSE_SUCCESS action", () => {
        //arrange
        const course = { id: "clean-code", title: "Clean Code" };
        const expectedAction = {
          type: types.CREATE_COURSE_SUCCESS,
          course: course
        };

        //act
        const action = courseActions.createCourseSuccess(course);

        //assert
        expect(action).toEqual(expectedAction);
      });
    });
  });
  // Test Thunks (Async Actions)
  describe("Async Actions", () => {
    // Clean the nocks after each call
    afterEach(() => {
      nock.cleanAll();
    });
    describe("loadCoursesSuccess", () => {
      // Passing (done) => {...} to flag that is called when async work is complete.
      it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", done => {
        // Example Usage of nock call. <- for when using actual APIs not mocked ones
        /*
      nock('http://example.com/')
        .get('/courses')
        .reply(200, { body: { course: [...{...}] }});
      */

        //arrange
        const expectedActions = [
          { type: types.BEGIN_AJAX_CALL },
          {
            type: types.LOAD_COURSES_SUCCESS,
            body: { courses: [{ id: "clean-code", title: "Clean Code" }] }
          }
        ];
        const store = mockStore({ courses: [] }, expectedActions);

        //act & assert
        store.dispatch(courseActions.loadCourses()).then(() => {
          const actions = store.getActions();
          expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
          expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
          done(); // flag that we are done with the async call
        });
      });
    });
  });
});
