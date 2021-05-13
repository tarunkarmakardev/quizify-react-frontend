import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class QuizForm extends Component {
  renderInput = (values) => {
    // console.log(values);
    const {
      input,
      meta: { touched, error },
      label,
      type,
    } = values;
    return (
      <>
        <div className="mb-3">
          <label className="form-label">{label}:</label>
          <input
            {...input}
            type={type}
            className={`form-control ${touched && error ? "is-invalid" : ""}`}
          />
        </div>
        {touched && error ? (
          <div
            className="invalid-feedback mt-2 mb-3"
            style={{ display: "block" }}
          >
            {label} is required!
          </div>
        ) : null}
      </>
    );
  };
  renderSelect = (values) => {
    const {
      input,
      meta: { error, touched },
      label,
      options,
    } = values;
    return (
      <>
        <div className="mb-3">
          <label className="form-label">{label}:</label>
          <select
            {...input}
            className={`form-select ${touched && error ? "is-invalid" : ""}`}
          >
            <option defaultValue value="">
              Pick a category
            </option>
            {options.map(({ id, name }) => {
              return (
                <option key={id} value={id}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        {touched && error ? (
          <div
            className="invalid-feedback mt-2 mb-3"
            style={{ display: "block" }}
          >
            {label} is required!
          </div>
        ) : null}
      </>
    );
  };
  OnFormSubmission = (values) => {
    // console.log(values);
    this.props.onSubmit(values);
  };
  //   validators
  rquired = (value) => (value ? undefined : "Enter a value");
  render() {
    // console.log(this.props);
    const { title, handleSubmit, categories } = this.props;
    return (
      <div className="container mt-4 border shadow p-4">
        <h1>{title}:</h1>
        <form onSubmit={handleSubmit(this.OnFormSubmission)}>
          <Field
            name="quiz_name"
            label="Quiz Name"
            type="text"
            component={this.renderInput}
            validate={this.rquired}
          />
          <Field
            name="quiz_category"
            label="Quiz Category"
            type="select"
            component={this.renderSelect}
            options={categories}
            validate={this.rquired}
          />

          <button type="submit" className="btn btn-danger mt-1">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "QuizForm",
})(QuizForm);
