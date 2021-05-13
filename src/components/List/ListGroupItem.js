import React, { Component } from "react";

export default class ListGroupItem extends Component {
  render() {
    // console.log(this.props);
    const {
      heading,
      createdBy,
      category,
      onClick,
      id,
      active,
      maxQuestions,
      showDelete,
      onDelete,
    } = this.props;
    return (
      <div
        className={`list-group-item list-group-item-action ${
          active ? "active" : ""
        } `}
        onClick={() => onClick(id)}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{heading}</h5>
          <small>{createdBy}</small>
          {showDelete ? (
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(id);
              }}
            >
              Delete
            </button>
          ) : null}
        </div>
        <p className="mb-1"></p>
        <small>{category}</small>
        <small className="d-block">Number of questions: {maxQuestions}</small>
      </div>
    );
  }
}
