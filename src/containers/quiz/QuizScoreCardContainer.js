import { connect } from "react-redux";
import { saveQuizScore } from "../../actions";
import QuizScoreCard from "../../components/quiz/QuizScoreCard";

const mapStateToProps = ({ saveQuizState }) => {
  return {
    saveQuizState,
  };
};

export default connect(mapStateToProps, { saveQuizScore })(QuizScoreCard);
