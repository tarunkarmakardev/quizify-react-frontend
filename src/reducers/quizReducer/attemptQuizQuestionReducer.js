import {
  ATTEMPT_QUESTION_SUCCESS,
  ATTEMPT_QUESTION_FAILURE,
  ATTEMPT_QUESTION_LOADING,
  ATTEMPT_QUESTION_RESET,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const attemptQuizQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTEMPT_QUESTION_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case ATTEMPT_QUESTION_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case ATTEMPT_QUESTION_LOADING:
      return {
        ...state,
        data: [],
        status: null,
        loading: true,
      };
    case ATTEMPT_QUESTION_RESET:
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

export default attemptQuizQuestionReducer;
