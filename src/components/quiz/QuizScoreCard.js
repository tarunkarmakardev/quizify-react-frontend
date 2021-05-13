import React, { Component } from "react";
import ErrorPage from "../errorPage/ErrorPage";
import Loader from "../loader/Loader";

export default class QuizScoreCard extends Component {
  componentDidMount() {
    const {
      match: {
        params: { quizId },
      },
      saveQuizScore,
    } = this.props;
    saveQuizScore(quizId);
  }
  render() {
    // console.log(this.props);
    const {
      saveQuizState: { loading, status },
    } = this.props;
    if (loading) {
      return <Loader type="danger" message="Please wait" />;
    }
    if (status === 200) {
      const {
        saveQuizState: {
          data: { has_passed, obtained_marks, quiz_title },
        },
      } = this.props;
      return (
        <div
          className="container border shadow d-flex flex-column justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          <h1 className="text-uppercase">{quiz_title}</h1>
          <h2>
            Your score is: <span className="fs-2">{obtained_marks}</span>
          </h2>
          <p className="fs-5">
            Result:{" "}
            <span
              className={`text-${
                has_passed ? "success" : "danger"
              } text-uppercase`}
            >
              {" "}
              {has_passed ? "Passed" : "Failed"}{" "}
            </span>
          </p>
        </div>
      );
    }
    if (status >= 400) {
      return <ErrorPage message={status} />;
    }
    return null;
  }
}
