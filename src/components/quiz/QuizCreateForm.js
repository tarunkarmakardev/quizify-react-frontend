import React, { Component } from "react";
import ErrorPage from "../errorPage/ErrorPage";
import QuizForm from "../Form/QuizForm";
import Loader from "../loader/Loader";
import Alert from "../alert/Alert";

export default class QuizCreateForm extends Component {
  componentDidMount() {
    this.props.fetchQuizCategories();
  }
  handleOnSubmit = (values) => {
    // console.log(values);
    this.props.createQuiz(values);
  };
  render() {
    // console.log(this.props);
    const {
      categories: { status, loading },
      createQuizState: { loading: creatingQuiz, status: createQuizStatus },
    } = this.props;
    if (loading || creatingQuiz) {
      return <Loader message="Please wait" />;
    }
    if (status === 200) {
      const {
        categories: { data },
        createQuizState: {
          data: { message },
        },
      } = this.props;
      return (
        <>
          <QuizForm
            title="Create a Quiz"
            categories={data.trivia_categories}
            onSubmit={this.handleOnSubmit}
          />
          {createQuizStatus === 201 ? (
            <div className="container text-uppercase mt-4">
              <Alert type="success" message={message} />
            </div>
          ) : null}
        </>
      );
    }
    if (status >= 400) {
      return <ErrorPage />;
    }
    return null;
  }
}
