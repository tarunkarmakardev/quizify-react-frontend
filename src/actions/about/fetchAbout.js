import {
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_FAILURE,
  FETCH_ABOUT_LOADING,
} from "../types";
import createAction from "../helper/actionCreaterHelper";
import Quizify from "../../api/Quizify";

const fetchAbout = () => (dispatch) => {
  const makeRequest = (headers) => {
    return Quizify("api/about/", headers);
  };
  createAction(
    dispatch,
    makeRequest,
    false,
    FETCH_ABOUT_SUCCESS,
    FETCH_ABOUT_FAILURE,
    FETCH_ABOUT_LOADING
  );
};

export { fetchAbout };
