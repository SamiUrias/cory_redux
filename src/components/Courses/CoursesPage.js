//

import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCourse(courseActions.createCourse(this.state.course));
    this.setState({ course: "" });
    // alert("Submit form");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
          style={{ width: "200px" }}
        />
        <input type="submit" value="Save" />
        <ul>
          {this.props.courses.map((course, index) => (
            <li key={index}>{course.title}</li>
          ))}
        </ul>
      </form>
    );
  }
}

CoursesPage.PropTypes = {
  createCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

// This should be specific
function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    createCourse: course => dispatch(courseActions.createCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
