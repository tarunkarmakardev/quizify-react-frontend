import React, { Component } from "react";

export default class QuizInfo extends Component {
  render() {
    const { title, category, maxQuestions, createdBy } = this.props;
    return (
      <div className="container border shadow-sm d-flex flex-column flex-lg-row justify-content-evenly align-items-center mt-4 mb-4 p-4 text-uppercase fs-6">
        <span className="mt-2 mt-lg-0">
          <strong>Title:</strong> {title}
        </span>
        <span className="mt-2 mt-lg-0">
          <strong>Category:</strong> {category}
        </span>
        <span className="mt-2 mt-lg-0">
          <strong>Total Questions:</strong> {maxQuestions}
        </span>
        <span className="mt-2 mt-lg-0">
          <strong>Created By:</strong> {createdBy}
        </span>
      </div>
    );
  }
}
