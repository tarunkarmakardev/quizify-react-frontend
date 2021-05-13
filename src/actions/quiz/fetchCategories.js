import { categories } from "../../api/Opentdb";
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING,
  CREATE_QUIZ_CLEAR,
} from "../types";
import actionHelper from "../helper/actionCreaterHelper";

const fetchQuizCategories = () => async (dispatch) => {
  const makeRequest = () => {
    return categories();
  };
  await actionHelper(
    dispatch,
    makeRequest,
    false,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_LOADING
  );
  dispatch({ type: CREATE_QUIZ_CLEAR });
};

export { fetchQuizCategories };
