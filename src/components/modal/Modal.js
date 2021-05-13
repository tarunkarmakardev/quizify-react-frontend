import React, { Component } from "react";
import reactDom from "react-dom";

export default class Modal extends Component {
  renderButtons = (buttons) => {
    return buttons.map(({ id, name, type, style, onClick, form }) => {
      return (
        <button
          form={form}
          key={id}
          type={type || "button"}
          className={`btn btn-${style}`}
          onClick={onClick}
          style={{ textTransform: "capitalize" }}
        >
          {name}
        </button>
      );
    });
  };
  render() {
    // console.log(this.props);
    const { title, children, closeModal, buttons } = this.props;
    return reactDom.createPortal(
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{ display: "block", backgroundColor: "rgba(15, 15, 15, 0.5)" }}
        onClick={closeModal}
      >
        <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">{this.renderButtons(buttons())}</div>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}
