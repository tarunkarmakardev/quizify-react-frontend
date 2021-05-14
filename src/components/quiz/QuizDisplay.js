import React, { Component } from "react";
import Alert from "../alert/Alert";
import QuizQuestionForm from "../Form/QuizQuestionForm";
import Loader from "../loader/Loader";
import QuizInfo from "./QuizInfo";
import ErrorPage from "../errorPage/ErrorPage";
import LoaderFullScreen from "../loader/LoaderFullScreen";

export default class QuizDisplay extends Component {
  componentDidMount = () => {
    const {
      fetchAllQuizDetail,
      match: {
        params: { quizId, quesNum },
      },
    } = this.props;

    fetchAllQuizDetail(quizId, quesNum);
  };

  componentDidUpdate(prevProps) {
    const {
      fetchAllQuizDetail,
      match: {
        params: { quizId, quesNum },
      },
    } = this.props;
    const {
      match: {
        params: { quizId: prevQuizId, quesNum: prevQuesNum },
      },
    } = prevProps;
    if (quizId !== prevQuizId || quesNum !== prevQuesNum) {
      fetchAllQuizDetail(quizId, quesNum);
    }
  }

  // Helper Methods

  renderQuizInfo = () => {
    const {
      quizDetailData: { title, category, created_by, max_questions },
    } = this.props;

    return (
      <QuizInfo
        title={title}
        category={category}
        createdBy={created_by}
        maxQuestions={max_questions}
      />
    );
  };

  renderButton = ({ submit = false, next = false, finish = false }) => {
    // console.log(this.state.isLastQues);
    if (finish) {
      return (
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.navigateToFinishQuiz}
        >
          Finish
        </button>
      );
    }

    if (submit) {
      return (
        <button className="btn btn-danger" type="submit">
          Submit
        </button>
      );
    }
    if (next) {
      return (
        <button
          className="btn btn-warning"
          type="button"
          onClick={this.navigateToNextQues}
        >
          Next
        </button>
      );
    }
    return null;
  };

  handleOnSubmit = (ansId) => {
    const {
      questionData: { id: quesId, quiz: quizId },
      attemptQuizQuestion,
      checkAttemptStatus,
    } = this.props;
    // console.log(ansId);
    attemptQuizQuestion(quizId, quesId, ansId);
    checkAttemptStatus(quizId, quesId);
  };

  navigateToNextQues = () => {
    const {
      history: { push },
      match: {
        params: { quizId, quesNum },
      },
      quizDetailData: { max_questions },
    } = this.props;
    if (quesNum < max_questions) {
      push(`/quiz/take/${quizId}/${parseInt(quesNum) + 1}`);
      this.props.resetAttemptState();
    } else {
      return null;
    }
  };
  navigateToFinishQuiz = () => {
    const {
      history: { push },
      match: {
        params: { quizId },
      },
    } = this.props;
    push(`/quiz/scorecard/${quizId}`);
  };

  componentWillUnmount() {
    this.props.resetAttemptState();
  }

  renderQuizForm = ({
    button,
    disableChoices = false,
    alert = null,
    selectedAnswerVal = null,
    correctAnswerVal = null,
  }) => {
    const {
      questionData: { id: quesId, question },
      match: {
        params: { quesNum },
      },
      answerListData: { answers },
      quizDetailData: { max_questions },
      attemptStatusData: { attempted },
      attemptQuestionStatus,
    } = this.props;

    if (
      (parseInt(quesNum) === max_questions && attempted) ||
      (parseInt(quesNum) === max_questions && attemptQuestionStatus === 201)
    ) {
      button = this.renderButton({ finish: true });
    }

    return (
      <QuizQuestionForm
        key={quesId}
        quesNum={quesNum}
        questionText={question}
        fieldName="selected_answer"
        choices={answers}
        onFormSubmit={this.handleOnSubmit}
        button={button}
        disableChoices={disableChoices}
        alert={alert}
        selectedAnswerVal={selectedAnswerVal}
        correctAnswerVal={correctAnswerVal}
      />
    );
  };

  render() {
    // console.log(this.props);
    const {
      loading,
      attemptingQuiz,
      quizDetailStatus,
      questionListStatus,
      questionStatus,
      answerListStatus,
      attemptStatusData,
      attemptQuestionStatus,
      attemptData,
    } = this.props;

    const allQuizDetailFetched =
      (questionStatus &&
        questionListStatus &&
        quizDetailStatus &&
        answerListStatus) === 200;

    const allFetchFailed =
      (questionStatus &&
        questionListStatus &&
        quizDetailStatus &&
        answerListStatus) >= 400;

    // If API calls are pending/loading

    if (loading) {
      return (
        <div className="container mt-2 border shadow p-4 d-flex justify-content-center">
          <Loader type="danger" />
        </div>
      );
    }

    if (attemptingQuiz) {
      return <LoaderFullScreen type="danger" message="Submitting" />;
    }

    // If API calls Failed

    if (allFetchFailed) {
      return <ErrorPage />;
    }

    // If user attempts a quiz and attemptQuestionStatus is updated

    if (allQuizDetailFetched && attemptQuestionStatus === 201) {
      const {
        selected_answer_id: selectedAnswerVal,
        correct_answer_id: correctAnswerVal,
      } = attemptData;
      return (
        <>
          {this.renderQuizInfo()}
          {this.renderQuizForm({
            button: this.renderButton({ next: true }),
            disableChoices: true,
            selectedAnswerVal,
            correctAnswerVal,
          })}
        </>
      );
    }
    // If user attempts a quiz and attemptStatusData returned already attempted: show info alert

    if (allQuizDetailFetched && attemptStatusData.attempted) {
      const {
        selected_answer_id: selectedAnswerVal,
        correct_answer_id: correctAnswerVal,
      } = attemptStatusData;
      return (
        <>
          {this.renderQuizInfo()}
          {this.renderQuizForm({
            button: this.renderButton({ next: true }),
            disableChoices: true,
            alert: (
              <Alert
                type={"info"}
                message={"You have already attempted this question!"}
              />
            ),
            selectedAnswerVal,
            correctAnswerVal,
          })}
        </>
      );
    }

    // Question wasn't attempted, return normal form

    if (allQuizDetailFetched) {
      return (
        <>
          {this.renderQuizInfo()}
          {this.renderQuizForm({ button: this.renderButton({ submit: true }) })}
        </>
      );
    }

    return null;
  }
}
