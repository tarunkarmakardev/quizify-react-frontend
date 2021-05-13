import React, { Component } from "react";
import AuthForm from "../Form/AuthForm";
import LoaderFullScreen from "../loader/LoaderFullScreen";
import Alert from "../alert/Alert";
import { Redirect } from "react-router";

export default class SignUp extends Component {
  handleOnSubmit = (values) => {
    this.props.requestSignUp(values);
  };
  renderAlert = (type = "success", message = "") => {
    return <Alert type={type} message={message} />;
  };
  render() {
    // console.log(this.props);
    const {
      signUpState: { loading, status, data },
    } = this.props;
    let message = "";
    if (loading) {
      return <LoaderFullScreen message="submitting" />;
    }
    if (status === 201) {
      message = data.message;
      return (
        <Redirect
          to={{ pathname: "/signin", message: `${message}. Sign in Now!` }}
        />
      );
    }
    if (status >= 400) {
      message =
        data.length !== 0 ? data.user.username : "Error! Something went wrong.";
      return (
        <AuthForm
          title="Sign Up Form"
          history={this.props.history}
          showUserTypeSelection={true}
          onSubmit={this.handleOnSubmit}
          alert={this.renderAlert("danger", message)}
        />
      );
    }
    return (
      <AuthForm
        title="Sign Up Form"
        history={this.props.history}
        showUserTypeSelection={true}
        onSubmit={this.handleOnSubmit}
      />
    );
  }
}
