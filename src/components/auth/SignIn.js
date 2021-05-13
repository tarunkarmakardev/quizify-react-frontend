import React, { Component } from "react";
import AuthForm from "../Form/AuthForm";
import LoaderFullScreen from "../loader/LoaderFullScreen";
import Alert from "../alert/Alert";
import { Redirect } from "react-router";

export default class SignIn extends Component {
  handleOnSubmit = (values) => {
    this.props.requestSignIn(values);
  };
  renderAlert = (type = "success", message = "") => {
    return <Alert type={type} message={message} />;
  };
  render() {
    // console.log(this.props);
    const {
      signInState: { loading, status, data },
    } = this.props;
    let message = "";
    if (loading) {
      return <LoaderFullScreen message="submitting" />;
    }
    if (status === 200) {
      return <Redirect to="/" />;
    }
    if (this.props.history.location.message) {
      message = this.props.history.location.message;
      return (
        <AuthForm
          title="Sign In"
          history={this.props.history}
          onSubmit={this.handleOnSubmit}
          alert={this.renderAlert("success", message)}
        />
      );
    }
    if (status >= 400) {
      message = data.detail || "Error! Something went wrong.";
      console.log(message);
      return (
        <AuthForm
          title="Sign In"
          history={this.props.history}
          onSubmit={this.handleOnSubmit}
          alert={this.renderAlert("danger", message)}
        />
      );
    }
    return (
      <AuthForm
        title="Sign In"
        history={this.props.history}
        onSubmit={this.handleOnSubmit}
      />
    );
  }
}
