import Quizify from "../../api/Quizify";
import { refreshAuthToken } from "../auth/refreshAuthToken";
import {
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAILURE,
  FETCH_QUESTION_LIST_LOADING,
} from "../types";

const fetchQuestionList = (quizId) => async (dispatch) => {
  dispatch({ type: FETCH_QUESTION_LIST_LOADING });
  await dispatch(refreshAuthToken());
  const access = localStorage.getItem("access");
  if (!access) {
    dispatch({
      type: FETCH_QUESTION_LIST_FAILURE,
      payload: {
        data: [],
        status: 401,
      },
    });
    return;
  }
  try {
    const response = await Quizify(`api/quiz/questions/${quizId}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    dispatch({
      type: FETCH_QUESTION_LIST_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (err) {
    dispatch({
      type: FETCH_QUESTION_LIST_FAILURE,
      payload: {
        data: err.response.data,
        status: err.response.status,
      },
    });
  }
};

export { fetchQuestionList };
