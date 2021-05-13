// About
const FETCH_ABOUT_LOADING = "FETCH_ABOUT_LOADING";
const FETCH_ABOUT_SUCCESS = "FETCH_ABOUT_SUCCESS";
const FETCH_ABOUT_FAILURE = "FETCH_ABOUT_FAILURE";
// Auth
const AUTH_LOADING = "AUTH_LOADING";
const AUTH_LOADED = "AUTH_LOADED";
// Auth - signup
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const SIGN_UP_LOADING = "SIGN_UP_LOADING";
// Auth - signin
const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
const SIGN_IN_LOADING = "SIGN_IN_LOADING";
// Auth - signout
const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
// Auth - check user
const CHECK_USER_TYPE_SUCCESS = "CHECK_USER_TYPE_SUCCESS";
const CHECK_USER_TYPE_FAILURE = "CHECK_USER_TYPE_FAILURE";
const CHECK_USER_TYPE_LOADING = "CHECK_USER_TYPE_LOADING";
// Auth - refresh token
const REFRESH_AUTH_TOKEN_SUCCESS = "REFRESH_AUTH_TOKEN_SUCCESS";
const REFRESH_AUTH_TOKEN_FAILURE = "REFRESH_AUTH_TOKEN_FAILURE";
const REFRESH_AUTH_TOKEN_LOADING = "REFRESH_AUTH_TOKEN_LOADING";
// Auth - set authentication
const AUTHENTICATED_TRUE = "AUTHENTICATED_TRUE";
const AUTHENTICATED_FALSE = "AUTHENTICATED_FALSE";
// Quiz
const QUIZ_LOADING = "QUIZ_LOADING";
const QUIZ_LOADED = "QUIZ_LOADED";
// Quiz - fetch quiz list
const FETCH_QUIZ_LIST_SUCCESS = "FETCH_QUIZ_LIST_SUCCESS";
const FETCH_QUIZ_LIST_FAILURE = "FETCH_QUIZ_LIST_FAILURE";
const FETCH_QUIZ_LIST_LOADING = "FETCH_QUIZ_LIST_LOADING";
// Quiz - fetch questions list
const FETCH_QUESTION_LIST_SUCCESS = "FETCH_QUESTION_LIST_SUCCESS";
const FETCH_QUESTION_LIST_FAILURE = "FETCH_QUESTION_LIST_FAILURE";
const FETCH_QUESTION_LIST_LOADING = "FETCH_QUESTION_LIST_LOADING";
// Quiz - fetch question
const FETCH_QUESTION_SUCCESS = "FETCH_QUESTION_SUCCESS";
const FETCH_QUESTION_FAILURE = "FETCH_QUESTION_FAILURE";
const FETCH_QUESTION_LOADING = "FETCH_QUESTION_LOADING";
// Quiz - quiz detail
const FETCH_QUIZ_DETAIL_SUCCESS = "FETCH_QUIZ_DETAIL_SUCCESS";
const FETCH_QUIZ_DETAIL_FAILURE = "FETCH_QUIZ_DETAIL_FAILURE";
const FETCH_QUIZ_DETAIL_LOADING = "FETCH_QUIZ_DETAIL_LOADING";
// Quiz - answer list
const FETCH_ANSWER_LIST_SUCCESS = "FETCH_ANSWER_LIST_SUCCESS";
const FETCH_ANSWER_LIST_FAILURE = "FETCH_ANSWER_LIST_FAILURE";
const FETCH_ANSWER_LIST_LOADING = "FETCH_ANSWER_LIST_LOADING";
// Quiz - attemmpt question
const ATTEMPT_QUESTION_SUCCESS = "ATTEMPT_QUESTION_SUCCESS";
const ATTEMPT_QUESTION_FAILURE = "ATTEMPT_QUESTION_FAILURE";
const ATTEMPT_QUESTION_LOADING = "ATTEMPT_QUESTION_LOADING";
const ATTEMPT_QUESTION_RESET = "ATTEMPT_QUESTION_RESET";
// Quiz - check attempt status
const CHECK_ATTEMPT_STATUS_SUCCESS = "CHECK_ATTEMPT_STATUS_SUCCESS";
const CHECK_ATTEMPT_STATUS_FAILURE = "CHECK_ATTEMPT_STATUS_FAILURE";
const CHECK_ATTEMPT_STATUS_LOADING = "CHECK_ATTEMPT_STATUS_LOADING";
// Quiz - save quiz score
const SAVE_QUIZ_SCORE_SUCCESS = "SAVE_QUIZ_SCORE_SUCCESS";
const SAVE_QUIZ_SCORE_FAILURE = "SAVE_QUIZ_SCORE_FAILURE";
const SAVE_QUIZ_SCORE_LOADING = "SAVE_QUIZ_SCORE_LOADING";
// Quiz - fetch quiz scores
const FETCH_QUIZ_SCORES_SUCCESS = "FETCH_QUIZ_SCORES_SUCCESS";
const FETCH_QUIZ_SCORES_FAILURE = "FETCH_QUIZ_SCORES_FAILURE";
const FETCH_QUIZ_SCORES_LOADING = "FETCH_QUIZ_SCORES_LOADING";
// Quiz - fetch quiz scores
const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";
const FETCH_CATEGORIES_LOADING = "FETCH_CATEGORIES_LOADING";
// Quiz - create Quiz
const CREATE_QUIZ_SUCCESS = "CREATE_QUIZ_SUCCESS";
const CREATE_QUIZ_FAILURE = "CREATE_QUIZ_FAILURE";
const CREATE_QUIZ_LOADING = "CREATE_QUIZ_LOADING";
const CREATE_QUIZ_CLEAR = "CREATE_QUIZ_CLEAR";
// Quiz - Delete Quiz
const DELETE_QUIZ_SUCCESS = "DELETE_QUIZ_SUCCESS";
const DELETE_QUIZ_FAILURE = "DELETE_QUIZ_FAILURE";
const DELETE_QUIZ_LOADING = "DELETE_QUIZ_LOADING";

export {
  // About
  FETCH_ABOUT_SUCCESS,
  FETCH_ABOUT_FAILURE,
  FETCH_ABOUT_LOADING,
  // Auth
  AUTH_LOADING,
  AUTH_LOADED,
  // Auth - signup
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_LOADING,
  // Auth - signin
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_IN_LOADING,
  // Auth - signout
  SIGN_OUT_SUCCESS,
  // Auth - check user
  CHECK_USER_TYPE_SUCCESS,
  CHECK_USER_TYPE_FAILURE,
  CHECK_USER_TYPE_LOADING,
  // Auth - refresh token
  REFRESH_AUTH_TOKEN_SUCCESS,
  REFRESH_AUTH_TOKEN_FAILURE,
  REFRESH_AUTH_TOKEN_LOADING,
  // Auth - set authentication
  AUTHENTICATED_TRUE,
  AUTHENTICATED_FALSE,
  // Quiz
  QUIZ_LOADING,
  QUIZ_LOADED,
  // Quiz - fetch quiz list
  FETCH_QUIZ_LIST_SUCCESS,
  FETCH_QUIZ_LIST_FAILURE,
  FETCH_QUIZ_LIST_LOADING,
  // Quiz - fetch quiz detail
  FETCH_QUIZ_DETAIL_SUCCESS,
  FETCH_QUIZ_DETAIL_FAILURE,
  FETCH_QUIZ_DETAIL_LOADING,
  // Quiz - fetch questions list
  FETCH_QUESTION_LIST_SUCCESS,
  FETCH_QUESTION_LIST_FAILURE,
  FETCH_QUESTION_LIST_LOADING,
  // Quiz - fetch question
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_FAILURE,
  FETCH_QUESTION_LOADING,
  // Quiz - fetch answer list
  FETCH_ANSWER_LIST_SUCCESS,
  FETCH_ANSWER_LIST_FAILURE,
  FETCH_ANSWER_LIST_LOADING,
  // Quiz - attempt question
  ATTEMPT_QUESTION_SUCCESS,
  ATTEMPT_QUESTION_FAILURE,
  ATTEMPT_QUESTION_LOADING,
  ATTEMPT_QUESTION_RESET,
  // Quiz - check attempt status
  CHECK_ATTEMPT_STATUS_SUCCESS,
  CHECK_ATTEMPT_STATUS_FAILURE,
  CHECK_ATTEMPT_STATUS_LOADING,
  // Quiz - check attempt status
  SAVE_QUIZ_SCORE_SUCCESS,
  SAVE_QUIZ_SCORE_FAILURE,
  SAVE_QUIZ_SCORE_LOADING,
  //Quiz -fetch scores
  FETCH_QUIZ_SCORES_SUCCESS,
  FETCH_QUIZ_SCORES_FAILURE,
  FETCH_QUIZ_SCORES_LOADING,
  //Quiz -fetch scores
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_LOADING,
  // Quiz - Create quiz
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAILURE,
  CREATE_QUIZ_LOADING,
  CREATE_QUIZ_CLEAR,
  // Quiz - Delete quiz
  DELETE_QUIZ_SUCCESS,
  DELETE_QUIZ_FAILURE,
  DELETE_QUIZ_LOADING,
};
