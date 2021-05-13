import { connect } from "react-redux";
import { fetchQuestionList, fetchQuizDetail } from "../../actions";
import QuizStart from "../../components/quiz/QuizStart";

const mapStateToProps = ({
  fetchQuestionListState,
  fetchQuizDetailState,
  userTypeState: {
    data: { user_type },
  },
}) => {
  return { fetchQuestionListState, fetchQuizDetailState, user_type };
};

export default connect(mapStateToProps, { fetchQuizDetail, fetchQuestionList })(
  QuizStart
);
