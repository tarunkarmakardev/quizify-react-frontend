import React from "react";

export default function Loader({ type, className, message }) {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <div
        className={`spinner-border text-${type || "danger"} ${className}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className={`mt-2 text-${type || "danger"}`}>{message}</span>
    </div>
  );
}
