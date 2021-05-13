import Quizify from "../../api/Quizify";
import {
  FETCH_ANSWER_LIST_SUCCESS,
  FETCH_ANSWER_LIST_FAILURE,
  FETCH_ANSWER_LIST_LOADING,
} from "../types";
import actionHelper from "../helper/actionCreaterHelper";

const fetchAnswerList = (quizId, quesId) => (dispatch) => {
  const makeRequest = (headers) => {
    return Quizify(`api/quiz/answers/${quizId}/${quesId}/`, headers);
  };
  actionHelper(
    dispatch,
    makeRequest,
    true,
    FETCH_ANSWER_LIST_SUCCESS,
    FETCH_ANSWER_LIST_FAILURE,
    FETCH_ANSWER_LIST_LOADING
  );
};

export { fetchAnswerList };
