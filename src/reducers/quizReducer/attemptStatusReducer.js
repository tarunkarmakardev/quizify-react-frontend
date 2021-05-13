import {
  CHECK_ATTEMPT_STATUS_SUCCESS,
  CHECK_ATTEMPT_STATUS_FAILURE,
  CHECK_ATTEMPT_STATUS_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const attemptStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_ATTEMPT_STATUS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case CHECK_ATTEMPT_STATUS_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case CHECK_ATTEMPT_STATUS_LOADING:
      return {
        ...state,
        data: [],
        status: null,
        loading: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default attemptStatusReducer;
