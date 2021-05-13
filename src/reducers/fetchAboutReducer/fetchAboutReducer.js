import {
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_FAILURE,
  FETCH_ABOUT_LOADING,
} from "../../actions/types";
const initialState = {
  data: [],
  status: null,
  loading: false,
};

const fetchAboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ABOUT_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        loading: false,
      };
    case FETCH_ABOUT_FAILURE:
      return {
        ...state,
        data: [],
        status: action.payload.status,
        loading: false,
      };
    case FETCH_ABOUT_LOADING:
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

export default fetchAboutReducer;
