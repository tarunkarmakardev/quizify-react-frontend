import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
  FETCH_QUESTION_LOADING,
} from "../types";

import Quizify from "../../api/Quizify";
import { refreshAuthToken } from "../auth/refreshAuthToken";

const fetchQuestion = (quizId, quesId) => async (dispatch) => {
  dispatch({ type: FETCH_QUESTION_LOADING });
  await dispatch(refreshAuthToken());
  const access = localStorage.getItem("access");
  if (!access) {
    dispatch({
      type: FETCH_QUESTION_FAILURE,
      payload: {
        data: [],
        status: 401,
      },
    });
    return;
  }
  try {
    const response = await Quizify(`api/quiz/questions/${quizId}/${quesId}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    dispatch({
      type: FETCH_QUESTION_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_QUESTION_FAILURE,
      payload: {
        data: error.response.data,
        status: error.response.status,
      },
    });
  }
};

export { fetchQuestion };
