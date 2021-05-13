import { SIGN_OUT_SUCCESS, AUTHENTICATED_FALSE } from "../types";

// Works with requestSignInReducer
const requestSignOut = () => (dispatch) => {
  localStorage.clear();
  dispatch({
    type: SIGN_OUT_SUCCESS,
  });
  dispatch({
    type: AUTHENTICATED_FALSE,
  });
};

export { requestSignOut };
