import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  AUTH_LOADED,
  AUTH_LOADING,
  AUTHENTICATED_TRUE,
  AUTHENTICATED_FALSE,
} from "../types";

import Quizify from "../../api/Quizify";

const requestSignIn = (formValues) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    const response = await Quizify.post(
      "api/auth/signin/token/",
      JSON.stringify(formValues)
    );
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
    dispatch({ type: AUTHENTICATED_TRUE });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: {
          data: err.response.data,
          status: err.response.status,
        },
      });
    } else {
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: {
          data: [],
          status: 404,
        },
      });
    }
    dispatch({ type: AUTHENTICATED_FALSE });
  }
  dispatch({ type: AUTH_LOADED });
};

export { requestSignIn };
