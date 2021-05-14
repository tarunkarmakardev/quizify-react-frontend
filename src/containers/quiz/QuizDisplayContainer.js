import { connect } from "react-redux";
import {
  fetchAllQuizDetail,
  attemptQuizQuestion,
  checkAttemptStatus,
} from "../../actions/";
import QuizDisplay from "../../components/quiz/QuizDisplay";

const mapStateToProps = ({
  quizLoadingState: { loading },

  fetchQuizDetailState: {
    loading: quizDetailLoading,
    status: quizDetailStatus,
    data: quizDetailData,
  },
  fetchQuestionListState: {
    loading: questionListLoading,
    status: questionListStatus,
    data: questionListData,
  },
  fetchQuestionState: {
    loading: questionLoading,
    status: questionStatus,
    data: questionData,
  },
  fetchAnswerListState: {
    loading: answerListLoading,
    status: answerListStatus,
    data: answerListData,
  },
  attemptQuestionStatusState: {
    data: attemptStatusData,
    loading: attemptStatusLoading,
    status: attemptStatusStatus,
  },
  attemptQuestionState: {
    status: attemptQuestionStatus,
    loading: attemptingQuiz,
    data: attemptData,
  },
}) => {
  return {
    loading,
    attemptingQuiz,
    // fetchQuizDetailState
    quizDetailLoading,
    quizDetailStatus,
    quizDetailData,
    // fetchQuestionListState
    questionListLoading,
    questionListStatus,
    questionListData,
    // fetchQuestionState
    questionLoading,
    questionStatus,
    questionData,
    // fetchAnswerListState
    answerListLoading,
    answerListStatus,
    answerListData,
    // attemptQuestionStatusState
    attemptStatusData,
    attemptStatusLoading,
    attemptStatusStatus,
    // attemptQuestionState
    attemptQuestionStatus,
    attemptData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllQuizDetail: (quizId, quesNum) =>
      dispatch(fetchAllQuizDetail(quizId, quesNum)),
    attemptQuizQuestion: (quizId, quesNum, ansId) =>
      dispatch(attemptQuizQuestion(quizId, quesNum, ansId)),
    resetAttemptState: () => dispatch({ type: "ATTEMPT_QUESTION_RESET" }),
    checkAttemptStatus: (quizId, quesId) =>
      dispatch(checkAttemptStatus(quizId, quesId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizDisplay);
