import {
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAILURE,
  FETCH_QUESTION_LIST_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const fetchQuestionListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_QUESTION_LIST_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_QUESTION_LIST_LOADING:
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

export default fetchQuestionListReducer;
