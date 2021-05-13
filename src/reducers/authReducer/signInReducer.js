import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
} from "../../actions/types";

const initialState = {
  data: [],
  loading: false,
  status: null,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        data: [],
        status: null,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default signInReducer;
