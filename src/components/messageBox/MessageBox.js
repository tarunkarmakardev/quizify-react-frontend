import React, { Component } from "react";
import Loader from "../loader/Loader";

export default class MessageBox extends Component {
  render() {
    const { heading, body, loading } = this.props;
    if (loading) {
      return (
        <div className="container text-center border border-1 shadow-sm p-3 bg-body rounded">
          <Loader message="Loading" />
        </div>
      );
    }
    return (
      <div className="container text-center border border-1 shadow-sm p-3 bg-body rounded">
        <h1 className="">{heading}</h1>
        {body}
      </div>
    );
  }
}
