import { QUIZ_LOADING, QUIZ_LOADED } from "../../actions/types";

const initialState = {
  loading: false,
  action: null,
};

const quizLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUIZ_LOADING:
      return {
        ...state,
        loading: true,
      };
    case QUIZ_LOADED:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default quizLoadingReducer;
