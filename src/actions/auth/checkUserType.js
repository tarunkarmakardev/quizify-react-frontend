import {
  CHECK_USER_TYPE_SUCCESS,
  CHECK_USER_TYPE_FAILURE,
  AUTH_LOADED,
  AUTH_LOADING,
} from "../types";
import { refreshAuthToken } from "../auth/refreshAuthToken";
import Quizify from "../../api/Quizify";

const ANONYMOUS = "ANONYMOUS";

const checkUserType = () => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  await dispatch(refreshAuthToken());
  const access = localStorage.getItem("access");
  if (!access) {
    dispatch({
      type: CHECK_USER_TYPE_FAILURE,
      payload: {
        data: { user_type: ANONYMOUS },
        status: 401,
      },
    });
    dispatch({ type: AUTH_LOADED });
    return;
  }
  try {
    const response = await Quizify("api/auth/check_user_type/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    dispatch({
      type: CHECK_USER_TYPE_SUCCESS,
      payload: {
        data: response.data,
        status: response.status,
      },
    });
  } catch (error) {
    dispatch({
      type: CHECK_USER_TYPE_FAILURE,
      payload: {
        data: error.response.data,
        status: error.response.status,
      },
    });
  }
  dispatch({ type: AUTH_LOADED });
};

export { checkUserType };
