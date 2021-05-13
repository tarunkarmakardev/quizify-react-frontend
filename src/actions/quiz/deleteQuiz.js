import {
  DELETE_QUIZ_SUCCESS,
  DELETE_QUIZ_FAILURE,
  DELETE_QUIZ_LOADING,
} from "../types";
import actionHelper from "../helper/actionCreaterHelper";
import Quizify from "../../api/Quizify";
import { fetchQuizList } from "./fetchQuizList";

const deleteQuiz = (id) => async (dispatch, getState) => {
  const makeRequest = (headers) => {
    return Quizify.delete(`/api/quiz/${id}/`, headers);
  };

  await actionHelper(
    dispatch,
    makeRequest,
    true,
    DELETE_QUIZ_SUCCESS,
    DELETE_QUIZ_FAILURE,
    DELETE_QUIZ_LOADING
  );

  if (getState().deleteQuizState.status === 204) {
    await dispatch(fetchQuizList(true));
  }
};

export { deleteQuiz };
