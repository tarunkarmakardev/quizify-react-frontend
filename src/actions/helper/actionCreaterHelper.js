import { refreshAuthToken } from "../auth/refreshAuthToken";

const actionCreatorHelper = async (
  dispatch,
  makeRequest,
  needAuth,
  SUCCESS,
  FAILURE,
  LOADING
) => {
  // await delay(2);
  if (LOADING) {
    dispatch({ type: LOADING });
  }
  let access;
  if (needAuth) {
    await dispatch(refreshAuthToken());
    access = localStorage.getItem("access");
    if (!access) {
      dispatch({
        type: FAILURE,
        payload: {
          data: [],
          status: 401,
        },
      });
      return;
    }
  }

  try {
    if (needAuth) {
      const headers = { Authorization: `Bearer ${access}` };
      const response = await makeRequest({ headers });
      dispatch({
        type: SUCCESS,
        payload: {
          data: response.data,
          status: response.status,
        },
      });
    } else {
      const response = await makeRequest();
      dispatch({
        type: SUCCESS,
        payload: {
          data: response.data,
          status: response.status,
        },
      });
    }
  } catch (err) {
    // console.log(err.response);
    if (err.response) {
      dispatch({
        type: FAILURE,
        payload: {
          data: err.response.data,
          status: err.response.status,
        },
      });
    } else {
      dispatch({
        type: FAILURE,
        payload: {
          data: [],
          status: 404,
        },
      });
    }
  }
};

export default actionCreatorHelper;
