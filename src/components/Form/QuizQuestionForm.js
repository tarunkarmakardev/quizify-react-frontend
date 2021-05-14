import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import ReactHtmlParser from "react-html-parser";

class QuizQuestionForm extends Component {
  renderRadioInput = (values) => {
    const {
      input,
      label,
      type,
      disableChoices,
      selectedAnswerVal,
      correctAnswerVal,
      checked,
    } = values;

    let badge;
    if (correctAnswerVal === input.value) {
      if (correctAnswerVal === selectedAnswerVal) {
        badge = (
          <span className="badge bg-success ms-2">Your answer was correct</span>
        );
      } else {
        badge = (
          <span className="badge bg-info ms-2">
            This was the correct answer
          </span>
        );
      }
    }
    if (
      selectedAnswerVal === input.value &&
      correctAnswerVal !== selectedAnswerVal
    ) {
      badge = <span className="badge bg-warning ms-2">You selected this</span>;
    }
    return (
      <>
        <div className="form-check">
          <input
            className="form-check-input"
            {...input}
            type={type}
            disabled={disableChoices}
            checked={selectedAnswerVal === input.value || checked}
          />
          <label className="form-check-label">{ReactHtmlParser(label)}</label>
          {badge}
        </div>
      </>
    );
  };
  onFormSubmission = (values) => {
    // console.log(values);
    if (!values.selected_answer) {
      console.log("Select an option");
      throw new SubmissionError({
        _error: "Select an option",
      });
    } else {
      this.props.onFormSubmit(values);
    }
  };
  render() {
    const {
      quesNum,
      questionText,
      fieldName,
      choices,
      handleSubmit,
      alert,
      button,
      disableChoices,
      selectedAnswerVal,
      correctAnswerVal,
      error,
    } = this.props;
    // console.log(this.props);
    return (
      <div className="container mt-2 border shadow py-3">
        <div className="border-bottom py-2">
          <h5>
            Q.{quesNum} {ReactHtmlParser(questionText)}
          </h5>
        </div>
        <div className="mt-2 p-2">
          <form onSubmit={handleSubmit(this.onFormSubmission)}>
            {choices.map(({ id, answer }) => {
              return (
                <Field
                  name={fieldName}
                  label={answer}
                  type="radio"
                  key={id}
                  value={id}
                  component={this.renderRadioInput}
                  disableChoices={disableChoices}
                  selectedAnswerVal={selectedAnswerVal}
                  correctAnswerVal={correctAnswerVal}
                />
              );
            })}
            {error && (
              <div
                className="invalid-feedback mt-2 mb-3"
                style={{ display: "block" }}
              >
                Please select an option
              </div>
            )}
            <div className="mt-2 py-2">{button}</div>
          </form>
        </div>
        <div className="mt-2 p-2">{alert}</div>
      </div>
    );
  }
}

export default reduxForm({
  form: "QuizQuestionForm",
})(QuizQuestionForm);
