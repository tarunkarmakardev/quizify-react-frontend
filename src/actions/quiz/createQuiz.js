import Opentdb from "../../api/Opentdb";
import {
  CREATE_QUIZ_SUCCESS,
  CREATE_QUIZ_FAILURE,
  CREATE_QUIZ_LOADING,
} from "../types";
import actionHelper from "../helper/actionCreaterHelper";
import Quizify from "../../api/Quizify";

const createQuiz =
  ({ quiz_category, quiz_name }) =>
  async (dispatch) => {
    dispatch({ type: CREATE_QUIZ_LOADING });

    const response = await Opentdb("", {
      params: {
        category: quiz_category,
      },
    });

    const data = response.data.results.map(
      ({ question, correct_answer, incorrect_answers }) => {
        incorrect_answers = incorrect_answers.map((incorrect_answer) => {
          return { answer: incorrect_answer, is_correct: false };
        });
        return {
          question,
          answers: [
            {
              answer: correct_answer,
              is_correct: true,
            },
            ...incorrect_answers,
          ],
        };
      }
    );

    const makeRequest = (headers) => {
      return Quizify.post(
        "/api/quiz/",
        JSON.stringify({
          quiz: {
            quiz_name,
            category: response.data.results[0].category,
            max_questions: 10,
          },
          data,
        }),
        headers
      );
    };
    await actionHelper(
      dispatch,
      makeRequest,
      true,
      CREATE_QUIZ_SUCCESS,
      CREATE_QUIZ_FAILURE,
      CREATE_QUIZ_LOADING
    );
  };

export { createQuiz };
