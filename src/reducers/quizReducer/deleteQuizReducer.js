import {
  DELETE_QUIZ_SUCCESS,
  DELETE_QUIZ_FAILURE,
  DELETE_QUIZ_LOADING,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
  loading: false,
};

const deleteQuizReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_QUIZ_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case DELETE_QUIZ_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case DELETE_QUIZ_LOADING:
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

export default deleteQuizReducer;
