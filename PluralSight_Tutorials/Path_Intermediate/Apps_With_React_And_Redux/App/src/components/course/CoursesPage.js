import React, { Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage() {
    browserHistory.push("course/");
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <input
          type="button"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}
        />
        <CourseList courses={courses} />
      </div>
    );
  }
}

// Prop validation - Dev mode only
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Redux connection
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);

// alternative to the above:
// const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
// export default connectedStateAndProps(CoursesPage);
