import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import Modal from "../modal/Modal";

class AuthForm extends Component {
  buttonsConfig = () => {
    return [
      {
        id: 1,
        name: "submit",
        type: "submit",
        style: "danger",
        form: "auth-form",
      },
      {
        id: 2,
        name: "close",
        style: "warning",
        onClick: () => {
          this.closeModal();
        },
      },
    ];
  };
  renderError = (text) => {
    return (
      <div className="invalid-feedback mt-2 mb-3" style={{ display: "block" }}>
        {text}
      </div>
    );
  };
  renderinput = (values) => {
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
          <label className="form-label">{label}: </label>

          <input
            {...input}
            className={`form-control ${touched && error ? "is-invalid" : ""}`}
            type={type}
          />
        </div>
        {touched && error ? this.renderError(`${label} is required!`) : null}
      </>
    );
  };

  renderSelect = (values) => {
    const {
      input,
      meta: { error, touched },
      label,
    } = values;
    return (
      <>
        <div className="mb-3">
          <label className="form-label">{label}: </label>

          <select
            className={`form-select ${touched && error ? "is-invalid" : ""}`}
            {...input}
          >
            <option defaultValue>Select an option</option>
            <option value="STU">Student</option>
            <option value="TEACH">Teacher</option>
          </select>
        </div>

        {touched && error ? this.renderError(`Select an option!`) : null}
      </>
    );
  };

  closeModal = () => {
    this.props.history.push("/");
  };
  OnFormSubmission = (values) => {
    // console.log(values);
    this.props.onSubmit(values);
  };
  removeAlert = () => {
    this.setState({ removeAlert: true });
  };
  // validators
  required = (value) => (value ? undefined : "Error");
  render = () => {
    const { title, handleSubmit, showUserTypeSelection, alert } = this.props;
    return (
      <Modal
        title={title}
        closeModal={this.closeModal}
        buttons={this.buttonsConfig}
      >
        {alert}
        <form
          onSubmit={handleSubmit(this.OnFormSubmission)}
          id="auth-form"
          autoComplete="off"
        >
          <Field
            name="username"
            type="text"
            label="Username"
            component={this.renderinput}
            validate={this.required}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            component={this.renderinput}
            validate={this.required}
          />
          {showUserTypeSelection ? (
            <Field
              name="user_type"
              type="select"
              label="You're a"
              component={this.renderSelect}
              validate={this.required}
            />
          ) : null}
        </form>
      </Modal>
    );
  };
}

export default reduxForm({
  form: "AuthForm",
})(AuthForm);
