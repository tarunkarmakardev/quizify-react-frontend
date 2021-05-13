import { connect } from "react-redux";
import { fetchQuizList, deleteQuiz } from "../../actions";
import QuizList from "../../components/quiz/QuizList";

const mapStateToProps = ({
  fetchQuizState,
  deleteQuizState,
  userTypeState: {
    data: { user_type },
  },
}) => {
  return { fetchQuizState, deleteQuizState, user_type };
};

export default connect(mapStateToProps, { fetchQuizList, deleteQuiz })(
  QuizList
);
