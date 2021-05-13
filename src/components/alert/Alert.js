import React, { Component } from "react";

export default class Alert extends Component {
  state = {
    showAlert: false,
  };
  componentDidMount() {
    const { message } = this.props;
    if (message) {
      this.setState({ showAlert: true });
    }
  }
  closeAlert = () => {
    this.setState({ showAlert: false });
  };
  render() {
    const { type, message, dismissible } = this.props;
    const { showAlert } = this.state;

    if (showAlert && dismissible) {
      return (
        <div
          className={`alert alert-${type} alert-dismissible fade show`}
          role="alert"
        >
          {message}
          <button
            type="button"
            className="btn-close"
            onClick={this.closeAlert}
          ></button>
        </div>
      );
    }
    if (showAlert) {
      return (
        <div className={`alert alert-${type} fade show`} role="alert">
          {message}
        </div>
      );
    }
    return null;
  }
}
