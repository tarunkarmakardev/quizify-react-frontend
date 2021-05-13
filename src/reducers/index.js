import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
// About
import aboutPageState from "./fetchAboutReducer/fetchAboutReducer";
// Auth
import signUpState from "./authReducer/signUpReducer";
import signInState from "./authReducer/signInReducer";
import authState from "./authReducer/setAuthStatusReducer";
import refreshTokenState from "./authReducer/refreshAuthTokenReducer";
import userTypeState from "./authReducer/checkUserTypeReducer";
// Quiz
import quizLoadingState from "./loaderReducer/quizLoadingReducer";
import fetchQuizState from "./quizReducer/fetchQuizListReducer";
import fetchQuizDetailState from "./quizReducer/fetchQuizDetailReducer";
import fetchQuestionListState from "./quizReducer/fetchQuestionListReducer";
import fetchQuestionState from "./quizReducer/fetchQuestionReducer";
import fetchAnswerListState from "./quizReducer/fetchAnswerListReducer";
import attemptQuestionState from "./quizReducer/attemptQuizQuestionReducer";
import attemptQuestionStatusState from "./quizReducer/attemptStatusReducer";
import saveQuizState from "./quizReducer/saveQuizReducer";
import fetchQuizScoresState from "./quizReducer/fetchQuizScoresReducer";
import fetchQuizCategoriesState from "./quizReducer/fetchQuizCategoriesReducer";
import createQuizState from "./quizReducer/createQuizReducer";
import deleteQuizState from "./quizReducer/deleteQuizReducer";

export default combineReducers({
  form,
  // About
  aboutPageState,
  // Auth
  signUpState,
  signInState,
  authState,
  refreshTokenState,
  userTypeState,
  // Quiz
  quizLoadingState,
  fetchQuizState,
  fetchQuizDetailState,
  fetchQuestionListState,
  fetchQuestionState,
  fetchAnswerListState,
  attemptQuestionState,
  attemptQuestionStatusState,
  saveQuizState,
  fetchQuizScoresState,
  fetchQuizCategoriesState,
  createQuizState,
  deleteQuizState,
});
