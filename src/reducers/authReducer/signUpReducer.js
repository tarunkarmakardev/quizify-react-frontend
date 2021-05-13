import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../../actions/types";

const initialState = {
  data: [],
  loading: false,
  status: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default signUpReducer;
