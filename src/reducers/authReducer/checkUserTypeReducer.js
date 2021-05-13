import {
  CHECK_USER_TYPE_SUCCESS,
  CHECK_USER_TYPE_FAILURE,
  SIGN_OUT_SUCCESS,
} from "../../actions/types";

const initialState = {
  data: { user_type: "anonymous" },
  loading: false,
  status: null,
};

const checkUserTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USER_TYPE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case CHECK_USER_TYPE_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        data: { user_type: "anonymous" },
        loading: false,
        status: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default checkUserTypeReducer;
