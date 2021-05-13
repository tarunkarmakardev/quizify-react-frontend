// Special action creator to allow chaining of actions
import { QUIZ_LOADING, QUIZ_LOADED } from "../types";
import { fetchQuizDetail } from "./fetchQuizDetail";
import { fetchQuestionList } from "./fetchQuestionList";
import { fetchQuestion } from "./fetchQuestion";
import { fetchAnswerList } from "./fetchAnswerList";
import { checkAttemptStatus } from "./checkAttemptStatus";

const fetchAllQuizDetail = (quizId, quesNum) => async (dispatch, getState) => {
  dispatch({ type: QUIZ_LOADING });
  // console.log(quesNum);
  // await delay(5);
  await dispatch(fetchQuizDetail(quizId));
  await dispatch(fetchQuestionList(quizId));

  if (getState().fetchQuestionListState.status === 200) {
    const question_ids = getState().fetchQuestionListState.data.question_ids;
    await dispatch(fetchQuestion(quizId, question_ids[parseInt(quesNum) - 1]));
    await dispatch(
      fetchAnswerList(quizId, question_ids[parseInt(quesNum) - 1])
    );
    await dispatch(
      checkAttemptStatus(quizId, question_ids[parseInt(quesNum) - 1])
    );
  }
  dispatch({ type: QUIZ_LOADED });
};

export { fetchAllQuizDetail };
