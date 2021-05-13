import {
  AUTHENTICATED_TRUE,
  AUTHENTICATED_FALSE,
  AUTH_LOADING,
  AUTH_LOADED,
} from "../../actions/types";

const initialState = { isSignedIn: false, loading: false };

const setAuthStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED_TRUE:
      return {
        ...state,
        isSignedIn: true,
      };
    case AUTHENTICATED_FALSE:
      return {
        ...state,
        isSignedIn: false,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_LOADED:
      return {
        ...state,
        loading: false,
      };

    default:
      return { ...state };
  }
};

export default setAuthStatusReducer;
