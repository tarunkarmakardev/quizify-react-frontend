import { connect } from "react-redux";
import { fetchQuizCategories, createQuiz } from "../../actions";
import QuizCreateForm from "../../components/quiz/QuizCreateForm";

const mapStateToProps = ({
  fetchQuizCategoriesState: categories,
  createQuizState,
}) => {
  return { categories, createQuizState };
};

export default connect(mapStateToProps, { fetchQuizCategories, createQuiz })(
  QuizCreateForm
);
