import {
  REFRESH_AUTH_TOKEN_SUCCESS,
  REFRESH_AUTH_TOKEN_FAILURE,
  AUTH_LOADED,
  AUTH_LOADING,
  AUTHENTICATED_TRUE,
  AUTHENTICATED_FALSE,
} from "../types";
import Quizify from "../../api/Quizify";

const refreshAuthToken = () => async (dispatch) => {
  const refreshToken = localStorage.getItem("refresh");
  if (!refreshToken) {
    dispatch({
      type: REFRESH_AUTH_TOKEN_FAILURE,
      payload: {
        data: [],
        status: 401,
      },
    });
    dispatch({ type: AUTHENTICATED_FALSE });
    localStorage.clear();
    dispatch({ type: AUTH_LOADED });
    return;
  }

  dispatch({ type: AUTH_LOADING });

  try {
    const response = await Quizify.post(
      "api/auth/signin/token/refresh/",
      JSON.stringify({ refresh: refreshToken })
    );
    dispatch({
      type: REFRESH_AUTH_TOKEN_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
    dispatch({ type: AUTHENTICATED_TRUE });
    localStorage.setItem("access", response.data.access);
  } catch (err) {
    if (err.response) {
      dispatch({
        type: REFRESH_AUTH_TOKEN_FAILURE,
        payload: {
          data: err.response.data,
          status: err.response.status,
        },
      });
    } else {
      dispatch({
        type: REFRESH_AUTH_TOKEN_FAILURE,
        payload: {
          data: [],
          status: 404,
        },
      });
    }
    dispatch({ type: AUTHENTICATED_FALSE });
    localStorage.clear();
  }
  dispatch({ type: AUTH_LOADED });
};

export { refreshAuthToken };
