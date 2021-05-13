import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

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

      meta: { error, touched },
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
          <label className="form-check-label">{label}</label>
          {badge}
        </div>
        {touched && error ? (
          <div
            className="invalid-feedback mt-2 mb-3"
            style={{ display: "block" }}
          >
            Select an option
          </div>
        ) : null}
      </>
    );
  };
  onFormSubmission = (values) => {
    // console.log(values);
    this.props.onFormSubmit(values);
  };
  rquired = (value) => (value ? undefined : "Enter a value");
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
    } = this.props;
    // console.log(this.props);
    return (
      <div className="container mt-2 border shadow py-3">
        <div className="border-bottom py-2">
          <h5>
            Q.{quesNum} {questionText}
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
                  validate={this.rquired}
                />
              );
            })}
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
