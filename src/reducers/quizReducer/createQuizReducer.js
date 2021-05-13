import {
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAILURE,
  CREATE_QUIZ_LOADING,
  CREATE_QUIZ_CLEAR,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const createQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_QUIZ_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case CREATE_QUIZ_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case CREATE_QUIZ_LOADING:
      return {
        ...state,
        data: [],
        status: null,
        loading: true,
      };
    case CREATE_QUIZ_CLEAR:
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

export default createQuizReducer;
