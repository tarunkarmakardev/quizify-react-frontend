import {
  SAVE_QUIZ_SCORE_SUCCESS,
  SAVE_QUIZ_SCORE_FAILURE,
  SAVE_QUIZ_SCORE_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  loading: false,
  status: null,
};

const saveQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_QUIZ_SCORE_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SAVE_QUIZ_SCORE_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case SAVE_QUIZ_SCORE_LOADING:
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

export default saveQuizReducer;
