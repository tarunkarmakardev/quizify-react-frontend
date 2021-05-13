import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  AUTH_LOADED,
  AUTH_LOADING,
} from "../types";
import Quizify from "../../api/Quizify";
import actionHelper from "../helper/actionCreaterHelper";

const requestSignUp = ({ username, password, user_type }) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  const request = {
    user: {
      username,
      password,
    },
    user_type,
  };
  const makeRequest = (headers) => {
    return Quizify.post("api/auth/signup/", JSON.stringify(request), headers);
  };
  actionHelper(dispatch, makeRequest, false, SIGN_UP_SUCCESS, SIGN_UP_FAILURE);
  dispatch({ type: AUTH_LOADED });
};

export { requestSignUp };
