import {
  FETCH_QUIZ_SCORES_SUCCESS,
  FETCH_QUIZ_SCORES_FAILURE,
  FETCH_QUIZ_SCORES_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  loading: false,
  status: null,
};

const fetchQuizScoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_SCORES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case FETCH_QUIZ_SCORES_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case FETCH_QUIZ_SCORES_LOADING:
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

export default fetchQuizScoresReducer;
