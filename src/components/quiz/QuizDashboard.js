import React, { Component } from "react";
import Loader from "../loader/Loader";
import ErrorPage from "../errorPage/ErrorPage";
export default class QuizDashboard extends Component {
  componentDidMount() {
    const { fetchQuizScores } = this.props;
    fetchQuizScores();
  }
  renderCard = () => {
    const {
      quizScores: { data },
    } = this.props;
    if (data.length === 0) {
      return null;
    }
    return data.map(
      ({ has_passed, obtained_marks, quiz: { title: quizTitle } }) => {
        return (
          <div className="card shadow mx-2" style={{ width: "10rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">{quizTitle}</h5>
              <p className="card-text">Your Score: {obtained_marks}</p>
              <p
                className={`text-${
                  has_passed ? "success" : "danger"
                } text-uppercase`}
              >
                {has_passed ? "passed" : "failed"}
              </p>
            </div>
          </div>
        );
      }
    );
  };
  render() {
    console.log(this.props);
    const {
      quizScores: { status, loading },
    } = this.props;
    if (loading) {
      return <Loader message="Please wait" />;
    }
    if (status === 200) {
      return (
        <div
          className="container border shadow p-4 d-flex justify-content-center align-items-center"
          style={{ height: "50vh" }}
        >
          {this.renderCard()}
        </div>
      );
    }
    if (status >= 400) {
      return <ErrorPage />;
    }
    return null;
  }
}
