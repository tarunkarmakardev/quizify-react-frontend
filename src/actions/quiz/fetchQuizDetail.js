import {
  FETCH_QUIZ_DETAIL_SUCCESS,
  FETCH_QUIZ_DETAIL_FAILURE,
  FETCH_QUIZ_DETAIL_LOADING,
} from "../types";

import Quizify from "../../api/Quizify";
import actionHelper from "../helper/actionCreaterHelper";

const fetchQuizDetail = (quizId) => (dispatch) => {
  const makeRequest = (headers) => {
    return Quizify(`/api/quiz/${quizId}/`, headers);
  };

  actionHelper(
    dispatch,
    makeRequest,
    true,
    FETCH_QUIZ_DETAIL_SUCCESS,
    FETCH_QUIZ_DETAIL_FAILURE,
    FETCH_QUIZ_DETAIL_LOADING
  );
};

export { fetchQuizDetail };
