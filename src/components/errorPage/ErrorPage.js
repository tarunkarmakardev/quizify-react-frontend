import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorPage extends Component {
  render() {
    const { statusCode, message, buttonText, buttonLink } = this.props;
    return (
      <div
        className="container border shadow d-flex flex-column justify-content-center align-items-center p-4 mt-4"
        style={{ height: "50vh" }}
      >
        <h1 className="fs-1">Error</h1>
        <h2 className="fs-2">{statusCode}</h2>
        <i className="bi bi-bug-fill fs-1"></i>
        <div className="mb-4">
          {message || `This page cannot be displayed.`}
        </div>
        <Link to={buttonLink || `/`} className="btn btn-danger">
          {buttonText || `Back to Home`}
        </Link>
      </div>
    );
  }
}
