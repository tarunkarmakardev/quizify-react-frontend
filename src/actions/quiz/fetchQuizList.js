import {
  FETCH_QUIZ_LIST_SUCCESS,
  FETCH_QUIZ_LIST_FAILURE,
  FETCH_QUIZ_LIST_LOADING,
} from "../types";
import Quizify from "../../api/Quizify";
import actionHelper from "../helper/actionCreaterHelper";

const fetchQuizList =
  (own = false) =>
  (dispatch) => {
    let makeRequest;
    // console.log(own);
    if (own) {
      makeRequest = (headers) => {
        return Quizify("api/quiz?own=true", headers);
      };
    } else {
      makeRequest = (headers) => {
        return Quizify("api/quiz/", headers);
      };
    }

    actionHelper(
      dispatch,
      makeRequest,
      true,
      FETCH_QUIZ_LIST_SUCCESS,
      FETCH_QUIZ_LIST_FAILURE,
      FETCH_QUIZ_LIST_LOADING
    );
  };

export { fetchQuizList };
