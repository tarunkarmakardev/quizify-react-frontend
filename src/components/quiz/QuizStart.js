import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import LoaderFullScreen from "../loader/LoaderFullScreen";
import ErrorPage from "../errorPage/ErrorPage";
import QuizInfo from "./QuizInfo";

export default class QuizStart extends Component {
  componentDidMount() {
    const {
      match: {
        params: { quizId },
      },
      fetchQuestionList,
      fetchQuizDetail,
    } = this.props;
    fetchQuestionList(quizId);
    fetchQuizDetail(quizId);
  }
  render() {
    // console.log(this.props);
    const {
      match: {
        params: { quizId },
      },
      user_type,
      fetchQuestionListState,
      fetchQuizDetailState,
    } = this.props;

    if (user_type === "TEACH") {
      return <Redirect to="/quiz/list/" />;
    }

    if (fetchQuestionListState.loading || fetchQuizDetailState.loading) {
      return <LoaderFullScreen />;
    }

    if (
      fetchQuestionListState.status === 200 &&
      fetchQuizDetailState.status === 200
    ) {
      const {
        data: { title, category, created_by, max_questions },
      } = fetchQuizDetailState;
      return (
        <>
          <QuizInfo
            title={title}
            category={category}
            maxQuestions={max_questions}
            createdBy={created_by}
          />
          <div
            className="container border shadow-sm p-3 d-flex flex-column justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <h1 className="mb-4">Let's Begin!</h1>
            <Link
              className="btn btn-danger mt-2"
              to={`/quiz/take/${quizId}/1/`}
            >
              Start Quiz
            </Link>
          </div>
        </>
      );
    }
    if (
      fetchQuestionListState.status === 401 ||
      fetchQuizDetailState.status === 401
    ) {
      return <Redirect to="/signin" />;
    }
    if (
      fetchQuestionListState.status > 400 ||
      fetchQuizDetailState.status > 400
    ) {
      return <ErrorPage />;
    }

    return null;
  }
}
