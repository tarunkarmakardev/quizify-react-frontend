import {
  FETCH_QUIZ_LIST_SUCCESS,
  FETCH_QUIZ_LIST_FAILURE,
  FETCH_QUIZ_LIST_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const fetchQuizListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case FETCH_QUIZ_LIST_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case FETCH_QUIZ_LIST_LOADING:
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

export default fetchQuizListReducer;
