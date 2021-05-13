import { connect } from "react-redux";
import { fetchQuizScores } from "../../actions";
import QuizDashboard from "../../components/quiz/QuizDashboard";

const mapStateToProps = ({ fetchQuizScoresState: quizScores }) => {
  return { quizScores };
};

export default connect(mapStateToProps, { fetchQuizScores })(QuizDashboard);
