import {
  ATTEMPT_QUESTION_SUCCESS,
  ATTEMPT_QUESTION_FAILURE,
  ATTEMPT_QUESTION_LOADING,
} from "../types";

import actionHelper from "../helper/actionCreaterHelper";
import Quizify from "../../api/Quizify";

const attemptQuizQuestion = (quizId, quesId, ansId) => (dispatch) => {
  const makeRequest = (headers) => {
    return Quizify.post(
      `api/quiz/attempt/${quizId}/${quesId}/`,
      JSON.stringify({ selected_answer_id: parseInt(ansId.selected_answer) }),
      headers
    );
  };

  actionHelper(
    dispatch,
    makeRequest,
    true,
    ATTEMPT_QUESTION_SUCCESS,
    ATTEMPT_QUESTION_FAILURE,
    ATTEMPT_QUESTION_LOADING
  );
};

export { attemptQuizQuestion };
