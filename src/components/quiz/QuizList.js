import React, { Component } from "react";
import ListGroup from "../List/ListGroup";
import Loader from "../loader/Loader";
import ErrorPage from "../errorPage/ErrorPage";

export default class QuizList extends Component {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;
    if (pathname === "/quiz/list/own") {
      this.props.fetchQuizList(true);
    } else {
      this.props.fetchQuizList();
    }
  }
  handleOnClick = (id) => {
    const {
      history: { push },
      user_type,
    } = this.props;
    if (user_type !== "TEACH") {
      push(`/quiz/take/${id}`);
    }
  };
  handleOnDelete = (id) => {
    const { deleteQuiz } = this.props;
    deleteQuiz(id);
  };
  render() {
    // console.log(this.props);
    const {
      fetchQuizState: { data, loading: quizLoading, status },
      deleteQuizState: { loading: deleting },
      location: { pathname },
    } = this.props;
    if (quizLoading || deleting) {
      return (
        <div className="container shadow border p-3 mt-2">
          <Loader />
        </div>
      );
    }
    if (status >= 400) {
      return <ErrorPage statusCode={status} />;
    }

    if (pathname === "/quiz/list/own") {
      return (
        <div className="container shadow border p-3 mt-2">
          <h1>Quizes: </h1>
          <ListGroup
            key={"quizListGroup"}
            items={data}
            onClick={this.handleOnClick}
            showDelete
            onDelete={this.handleOnDelete}
          />
        </div>
      );
    }

    return (
      <div className="container shadow border p-3 mt-2">
        <h1>Quizes: </h1>
        <ListGroup items={data} onClick={this.handleOnClick} showCreatedBy />
      </div>
    );
  }
}
