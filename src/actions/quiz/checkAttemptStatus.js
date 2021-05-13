import {
  CHECK_ATTEMPT_STATUS_SUCCESS,
  CHECK_ATTEMPT_STATUS_FAILURE,
  CHECK_ATTEMPT_STATUS_LOADING,
} from "../types";

import actionHelper from "../helper/actionCreaterHelper";
import Quizify from "../../api/Quizify";

const checkAttemptStatus = (quizId, quesId) => (dispatch) => {
  const makeRequest = (headers) => {
    return Quizify(`api/quiz/attempt/status/${quizId}/${quesId}/`, headers);
  };

  actionHelper(
    dispatch,
    makeRequest,
    true,
    CHECK_ATTEMPT_STATUS_SUCCESS,
    CHECK_ATTEMPT_STATUS_FAILURE,
    CHECK_ATTEMPT_STATUS_LOADING
  );
};

export { checkAttemptStatus };
