import React, { Component } from "react";

export default class QuizInfo extends Component {
  render() {
    const { title, category, maxQuestions, createdBy } = this.props;
    return (
      <div className="container border shadow-sm d-flex justify-content-evenly align-items-center mt-4 mb-4 p-4 text-uppercase fs-6">
        <span>
          <strong>Title:</strong> {title}
        </span>
        <span>
          <strong>Category:</strong> {category}
        </span>
        <span>
          <strong>Total Questions:</strong> {maxQuestions}
        </span>
        <span>
          <strong>Created By:</strong> {createdBy}
        </span>
      </div>
    );
  }
}
