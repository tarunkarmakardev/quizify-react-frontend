import {
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
  FETCH_QUESTION_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const fetchQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_QUESTION_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_QUESTION_LOADING:
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

export default fetchQuestionReducer;
