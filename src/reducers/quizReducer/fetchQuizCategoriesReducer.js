import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING,
} from "../../actions/types";

const initialState = {
  loading: false,
  data: [],
  status: null,
};

const fetchQuizCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };

    case FETCH_CATEGORIES_LOADING:
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

export default fetchQuizCategoriesReducer;
