import {
  FETCH_QUIZ_SCORES_SUCCESS,
  FETCH_QUIZ_SCORES_FAILURE,
  FETCH_QUIZ_SCORES_LOADING,
} from "../types";
import Quizify from "../../api/Quizify";
import actionHelper from "../helper/actionCreaterHelper";

const fetchQuizScores = () => (dispatch) => {
  const makeRequest = (headers) => {
    return Quizify("api/quiz/show/scores/", headers);
  };

  actionHelper(
    dispatch,
    makeRequest,
    true,
    FETCH_QUIZ_SCORES_SUCCESS,
    FETCH_QUIZ_SCORES_FAILURE,
    FETCH_QUIZ_SCORES_LOADING
  );
};

export { fetchQuizScores };
