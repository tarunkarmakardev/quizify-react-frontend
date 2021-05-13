import Quizify from "../../api/Quizify";
import { refreshAuthToken } from "../auth/refreshAuthToken";
import {
  SAVE_QUIZ_SCORE_SUCCESS,
  SAVE_QUIZ_SCORE_FAILURE,
  SAVE_QUIZ_SCORE_LOADING,
} from "../types";

const saveQuizScore = (quizId) => async (dispatch) => {
  dispatch({ type: SAVE_QUIZ_SCORE_LOADING });
  await dispatch(refreshAuthToken());
  const access = localStorage.getItem("access");
  if (!access) {
    dispatch({
      type: SAVE_QUIZ_SCORE_FAILURE,
      payload: {
        data: [],
        status: 401,
      },
    });
    return;
  }
  try {
    const response = await Quizify.post(
      `api/quiz/save/${quizId}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    dispatch({
      type: SAVE_QUIZ_SCORE_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: SAVE_QUIZ_SCORE_FAILURE,
        payload: {
          data: err.response.data,
          status: err.response.status,
        },
      });
    } else {
      dispatch({
        type: SAVE_QUIZ_SCORE_FAILURE,
        payload: {
          data: [],
          status: 404,
        },
      });
    }
  }
};

export { saveQuizScore };
