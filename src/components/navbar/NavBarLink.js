import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBarLink extends Component {
  render() {
    // user_types
    // const ANONYMOUS = "ANONYMOUS";
    const STU = "STU";
    const TEACH = "TEACH";
    const { user_type } = this.props;
    if (user_type === TEACH) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/quiz/list">
              All quizzes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/quiz/list/own">
              Your quizzes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/quiz/create">
              Create a Quiz
            </NavLink>
          </li>
        </>
      );
    }
    if (user_type === STU) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/quiz/list">
              All quizzes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/dashboard">
              Dashboard
            </NavLink>
          </li>
        </>
      );
    }

    return (
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
      </li>
    );
  }
}
