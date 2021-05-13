import {
  REFRESH_AUTH_TOKEN_SUCCESS,
  REFRESH_AUTH_TOKEN_FAILURE,
} from "../../actions/types";
const initialState = {
  data: [],
  status: null,
  loading: false,
};

const refreshAuthTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case REFRESH_AUTH_TOKEN_FAILURE:
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

export default refreshAuthTokenReducer;
