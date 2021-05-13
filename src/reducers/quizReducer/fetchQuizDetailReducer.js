import {
  FETCH_QUIZ_DETAIL_SUCCESS,
  FETCH_QUIZ_DETAIL_FAILURE,
  FETCH_QUIZ_DETAIL_LOADING,
} from "../../actions/types";

const initialState = {
  loading: null,
  data: [],
  status: null,
};

const fetchQuizDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_DETAIL_SUCCESS:
      return {
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_QUIZ_DETAIL_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_QUIZ_DETAIL_LOADING:
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

export default fetchQuizDetailReducer;
