import React, { Component } from "react";
import reactDom from "react-dom";

export default class LoaderFullScreen extends Component {
  render() {
    const { type, message } = this.props;
    return reactDom.createPortal(
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(15, 15, 15, 0.8)" }}
      >
        <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
          <strong
            className={`mb-2 text-capitalize ${
              type ? `text-${type}` : "text-danger"
            }`}
          >
            {message || "Loading"}
          </strong>
          <div
            className={`spinner-border ${
              type ? `text-${type}` : "text-danger"
            }`}
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}
